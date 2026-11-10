# Source audit — existing app vs proposed system

Inspected THREAD `app/src/styles.css`, `components.tsx`, `App.tsx` and the standalone interactive demo.

| Field | Existing | Design system v1 |
| --- | --- | --- |
| Brand | CSS tile, simple white path, THREAD/ | original route mark + vector wordmark |
| Canvas | #F5F6FB | preserved |
| Primary | #5449D8 | preserved as semantic accent |
| Ink | #18223A | preserved |
| UI fonts | DM Sans / IBM Plex Mono | preserved with defined scales |
| Layout | header 64; nav 76; explorer 280; inspector 306 | retained plus adaptive behavior |
| Icons | inline SVG map | 59 individual consistent SVG assets |
| Status colors | healthy/watch/at-risk definitions | AA-oriented semantic refinement |
| Dark mode | not implemented | **proposal only** |
| Component design | compact inline primitives | explicit contracts/variants and state model |

**Known UX debt:** first 30 product matches only; some static facility mappings; portfolio checkboxes do not affect metrics; advertised global search scope too broad; some unreadably small labels; missing full keyboard patterns. The proposed system must not be advertised as deployed into THREAD's actual UI until migration is tested.

## Data truth
All product and planning data are fictional. This is an illustrative prototype—not a real supply-chain solver, live telemetry interface, or official RELEX application.