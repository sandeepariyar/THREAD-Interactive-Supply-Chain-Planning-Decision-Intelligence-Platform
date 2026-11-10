# Motion, state and interaction

## User action → visible feedback → state transition
| Action | Immediate UI | State change |
| --- | --- | --- |
| Select product | Selected rail, active path, inspector | selected SKU shared by all workspaces |
| Select warehouse | Connector emphasis and node focus | selected node changes |
| Move demand slider | Draft percentage, unsimulated label | only draftScenario changes |
| Run simulation | Progress, then result and explanation | result recomputed from current draft |
| Scrub week | Cursor and time label | displayed week changes |
| Change portfolio selection | Selection count | selected SKU set changes |
| Save draft | Local save feedback | no operational action implied |
| Switch workspace | Current context retained | navigation changes |

## Motion vocabulary
- Press response: 80ms ease-out
- Hover: 140ms ease-out
- Badge, chip and tabs: 220ms cubic-bezier(.2,0,0,1)
- Inspector transition: 280ms cubic-bezier(.2,0,0,1)
- Spatial orientation: up to 380ms cubic-bezier(0,0,.2,1)

Reduced-motion mode suppresses scaling, bouncing and decorative network motion. It cannot suppress important status changes.

## Signature flow: explainable chain reaction
1. Select a SKU and highlight supplier → factory → DC → store.
2. Edit demand; label it Draft (not calculated).
3. Run a deterministic what-if simulation.
4. Emphasize constraints in sequence and explain causal relationships.
5. Scrub to the first projected shortage with what/where/when/why in the inspector.
6. Compare two staged mitigations without presenting them as production execution.

## Shared ownership
One app state owns productId, selectedNodeId, week, draftScenario, lastRunSettings, simulationResult, filters and selectedProductIds. The simulation result remains immutable until a successful new Run. Set dirty based on a deep comparison of draft and last-run assumptions.

## Keyboard
Support Tab/Shift+Tab, Enter/Space, arrow navigation for tabs and timeline, Escape for overlays, and visible focus. Avoid trapping focus in dismissed surfaces.
