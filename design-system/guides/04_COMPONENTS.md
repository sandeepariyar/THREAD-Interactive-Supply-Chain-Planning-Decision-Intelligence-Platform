# Reusable component specifications

THREAD uses explicit reusable component contracts rather than page-specific cards.

| Component | Required properties | Essential behavior |
| --- | --- | --- |
| ThreadButton | variant primary/secondary/quiet/danger; size; loading; disabled | Enter/Space, visible focus, no double-submit |
| StatusBadge | status, text, icon | text plus color, not color alone |
| ThreadField | label, value, help, error | real label, error linked to input |
| ProductRow | sku, name, stock, risk, selected | click/keyboard selection updates the entire workspace |
| ExplorerPanel | total, filtered, query, sort, selected | total vs filtered vs selected counts always visible |
| Metric | label, value, unit, delta, provenance | distinguish % and percentage points |
| NetworkNode | id, kind, label, status, selected | keyboard-selectable, opens contextual inspector |
| NetworkEdge | from/to, direction, status, confidence | arrows/semantics represent actual modeled relationships |
| Inspector | entity type/id, detail sections | follows selection, overlay at narrow widths |
| Timeline | dates, cursor, baseline, scenario | arrow keys; visible units/time |
| ScenarioEditor | draft, lastRun, dirty, errors | edited draft does not silently alter last run |
| PortfolioTable | rows, scope, selection, sort | selection meaning is explicit, not cosmetic |
| Dialog | title, purpose, dismiss | focus trapping and Escape restore |
| Toast | message, kind | polite live region; no critical info only in toast |

Canonical dimensions: controls 32/36/40px; 20px default icon from a 24px grid; panel radius 8–10px; default body 14/20px. States: default, hover, focus, pressed, disabled; additionally loading, selected, invalid or unavailable where meaningful.

Avoid two primary CTAs inside the same decision scope. Prototype actions must say `Stage recommendation`, `Save scenario draft`, `Compare`, not `Execute live operations`.