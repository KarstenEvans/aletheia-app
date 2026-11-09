#!/usr/bin/env python3
"""Althea Beowulf deterministic CPU frame renderer (stdlib; no AI, network, or shell)."""
import argparse
import hashlib
import json
from pathlib import Path
from time import perf_counter


def draw_frame(frame, total, width, height):
    """Make one simple Amiga-inspired frame using a reusable background + moving sprites."""
    image = bytearray(width * height * 3)
    def rect(x0, y0, x1, y1, rgb):
        x0, x1 = max(0, int(x0)), min(width, int(x1))
        y0, y1 = max(0, int(y0)), min(height, int(y1))
        if x0 >= x1 or y0 >= y1:
            return
        row = bytes(rgb) * (x1 - x0)
        for y in range(y0, y1):
            a = (y * width + x0) * 3
            image[a:a + len(row)] = row
    # Reuse one inexpensive gradient rather than regenerating every object.
    for y in range(height):
        row = bytes((int(8 + y * 17 / height), int(25 + y * 43 / height),
                     int(48 + y * 45 / height))) * width
        a = y * width * 3
        image[a:a + width * 3] = row
    ground = int(height * 0.76)
    rect(0, ground, width, height, (28, 48, 64))
    rect(0, ground + 3, width, ground + 7, (117, 161, 170))
    # Palette-cycling lamps: same positions, only RGB entries change each frame.
    palette = ((78, 205, 162), (142, 216, 239), (235, 181, 89), (184, 150, 232))
    for i in range(8):
        x = i * width // 8 + width // 100
        rect(x, ground - 12, x + width // 18, ground - 9,
             palette[(i + frame // 3) % len(palette)])
    # Train layer moves without requiring new artwork or a diffusion pass.
    train_x = ((frame * 5) % (width + width // 3)) - width // 3
    rect(train_x, ground - 64, train_x + width // 3, ground - 15, (147, 194, 207))
    for i in range(4):
        x = train_x + 9 + i * width // 13
        rect(x, ground - 55, x + width // 21, ground - 33, (32, 60, 83))
    # AI-PI: robot sprite, changing pose and position, not a generative video model.
    phase = frame * 6.283185307179586 / max(1, total)
    from math import sin
    cx = int(width * .50 + width * .14 * sin(phase * 2))
    cy = int(height * .45 + height * .025 * sin(phase * 6))
    arm = int(height * .13 * sin(phase * 5))
    rect(cx - 34, cy - 5, cx + 34, cy + 58, (144, 214, 205))
    rect(cx - 24, cy + 7, cx + 24, cy + 29, (26, 56, 76))
    rect(cx - 18, cy + 11, cx - 9, cy + 20, (253, 234, 176))
    rect(cx + 9, cy + 11, cx + 18, cy + 20, (253, 234, 176))
    rect(cx - 49, cy + 11 + arm, cx - 34, cy + 30 + arm, (111, 185, 188))
    rect(cx + 34, cy + 11 - arm, cx + 49, cy + 30 - arm, (111, 185, 188))
    rect(cx - 22, cy + 58, cx - 8, cy + 83, (107, 177, 185))
    rect(cx + 8, cy + 58, cx + 22, cy + 83, (107, 177, 185))
    rect(cx - 5, cy - 20, cx + 5, cy - 5, (241, 188, 83))
    return bytes(image)


def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--start', type=int, default=0, help='First frame index (zero-based)')
    p.add_argument('--count', type=int, default=12, help='Frames produced by this worker')
    p.add_argument('--frames', type=int, default=48, help='Full shared scene frame count')
    p.add_argument('--fps', type=int, default=12)
    p.add_argument('--width', type=int, default=320)
    p.add_argument('--height', type=int, default=180)
    p.add_argument('--node', type=str, default='local-worker')
    p.add_argument('--output', type=Path, default=Path('frames'))
    a = p.parse_args()
    if not (1 <= a.frames <= 900 and 0 <= a.start < a.frames and
            1 <= a.count <= 900 and a.start + a.count <= a.frames):
        p.error('frame range invalid or outside the clip (max 900 frames)')
    if not (64 <= a.width <= 1280 and 64 <= a.height <= 720 and 1 <= a.fps <= 60):
        p.error('invalid dimensions or fps')
    a.output.mkdir(parents=True, exist_ok=True)
    t0 = perf_counter()
    files = []
    for n in range(a.start, a.start + a.count):
        pixels = draw_frame(n, a.frames, a.width, a.height)
        filename = f'frame_{n:04d}.ppm'
        data = f'P6\n{a.width} {a.height}\n255\n'.encode('ascii') + pixels
        (a.output / filename).write_bytes(data)
        files.append({'name': filename, 'sha256': hashlib.sha256(data).hexdigest()})
    report = {'schema': 'aletheia.beowulf.render-receipt.v0.1', 'engine': 'deterministic-cpu-demo',
              'node': a.node, 'start': a.start, 'count': a.count, 'frames': a.frames,
              'fps': a.fps, 'width': a.width, 'height': a.height,
              'elapsed_seconds': round(perf_counter() - t0, 3), 'outputs': files}
    (a.output / f'receipt_{a.start:04d}.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print(f"Rendered {a.count} frame(s) to {a.output}; {report['elapsed_seconds']} s")
    print('NOTE: No AI model, phone node, network, or GPU was used.')


if __name__ == '__main__':
    main()