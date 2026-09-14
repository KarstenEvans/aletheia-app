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

## Chess resources

The app ends with a discreet **Additional information: Chess resources & gifts** link below the AI handoff settings. On mobile this follows the main board, VIBE panel and A-PROMPT controls. HELP repeats the link under **Additional information** without making it a primary game action.

It opens this separate resource page in a new window so the current game is preserved:

`https://swindon.org.uk/resources/aletheia-chess-rsc.htm`

The resource page is editorial-first: free learning material and books come before commercial gifts. Ordinary learning links may be live immediately; commercial links are affiliate-ready and must retain a clear disclosure when tracking is added. The catalogue includes practical and luxury sets, Alice in Wonderland / Through the Looking-Glass chess, useful accessories, original chess humour, and cat-safe chess-themed ideas.


## V0.9 GUI refinements

- WINK gives the recommendation directly as **"My suggestion is ..."** and does not repeatedly say it has looked ahead.
- Thalia is **off by default** for a quicker, less distracting first-use flow; the user may enable it at any time.
- Voice remains on by default.
- AI handoff windows are adaptive:
  - desktop: prefer approximately 900 × 760, constrained to the available screen;
  - mobile/small screens: do not force desktop dimensions; let the browser open the AI in its normal tab/window behaviour.
- Detect the current viewport/available screen rather than hard-coding specific phone models.
- External chess-learning sites belong on the resource page rather than primary HELP. The current resource page includes Lichess and Chess.com.
- The intended public resource URL remains:
  `https://swindon.org.uk/resources/aletheia-chess-rsc.htm`
  even while Swindon.org.uk hosting/DNS is being repaired.
