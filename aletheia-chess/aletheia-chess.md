# Aletheia Chess

> **Version:** V0.9  
> **Application file:** `aletheia-chess.htm`  
> **Specification file:** `aletheia-chess.md`

## V0.9 — VIBE consensus A-PROMPT

Version remains V0.9.

### A-PROMPT SEARCH return format

The external AI receives the live FEN and evaluates the position through the nine current VIBEs:

- Flying Mouse
- Tiger
- Dragon
- Magnus
- Kasparov
- Gukesh
- AlphaZero
- Stockfish
- Deep Blue

The AI is told to group identical move recommendations, so a result can look like:

`d4 — Magnus, Gukesh, Stockfish, Deep Blue`

rather than repeating `d4` four times.

The response ends with:

```text
COPY-BACK
BEST CONSENSUS: d4
ALTERNATIVES: Nf3, e4
MOVE: d4
```

The final `MOVE:` line contains exactly one legal SAN move and no commentary. Aletheia Chess already accepts a `Move:` prefix, so the user can copy that line into the move box and press ENTER.

The prompt explicitly treats named players/engines as VIBE lenses rather than claiming that the real person or engine chose the move.

All other V0.9 behaviour remains unchanged.