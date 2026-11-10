# Foundations — color, type, layout, themes

## Source and proposal
The existing application defines canvas #F5F6FB, surface #FFFFFF, ink #18223A, iris #5449D8, DM Sans and IBM Plex Mono, and a 64px header / 76px rail / 280px explorer / 306px inspector layout. See tokens/extracted-current.json for captured source values, and tokens/thread.tokens.json for the proposed contract.

## Semantic colors
| Role | Light | Dark proposal |
| --- | --- | --- |
| Canvas | #F5F6FB | #111628 |
| Surface | #FFFFFF | #1B2237 |
| Primary text | #18223A | #F3F5FF |
| Secondary text | #596681 | #BBC5DF |
| Action/accent | #5449D8 | #ABA5FF |
| Positive | #086C55 | #80D9B8 |
| Caution | #965400 | #F3CD7B |
| Danger | #AA263C | #FF9DA8 |

Use status text and icons along with color. Never use selection violet as a danger signal.

## Typography and hierarchy
- Display: DM Sans 30/36px, bold
- Section heading: DM Sans 20/27px
- Panel heading: DM Sans 16/22px
- Body: DM Sans 14/20px
- Field label: DM Sans 12/18px
- Data: IBM Plex Mono 13/20px, tabular numerals
- Major metric: IBM Plex Mono 26/32px

Fallbacks: Segoe UI / Arial; Consolas / monospace. Do not redistribute commercial or third-party font binaries.

## Rhythm and focus
4px spacing grid, common increments 8/12/16/24/32. Controls 32/36/40px high. Radii 3/5/8/10/16px. Visible 2px keyboard focus outline with 2px offset.

## Adaptive layout
At 1600×900, reserve 64px header, 76px rail, 280px explorer and 306px inspector. At narrower desktop widths, collapse explorer or move inspector to a slide-over rather than crushing the central graph. Below 1280px requires a deliberately compact design.

## Implementation handoff
CSS custom properties live in tokens/thread.css; the typed object in tokens/thread.ts; the QML singleton in qml/ThreadTheme.qml. These proposed refinements are not yet wired into the live app.
