# Qt/QML implementation handoff

THREAD Design System v1 is a design **contract**, not a mechanical React-to-QML converter. Follow the same semantic colors, geometry, icons, states, copy and data provenance, but implement native Qt Quick controls.

## Target
Qt 6.11.2 desktop, Windows MinGW, QML/C++ with optional Qt Quick 3D. Reference canvas 1600×900; minimum 1280×800. Header 64 px, nav 76 px, explorer 280 px, inspector 306 px, 12 px gutters.

## Mapping
| React | QML |
| --- | --- |
| Button / IconButton | Button / AbstractButton with custom background/contentItem |
| ProductRow | ListView delegate with keyboard focus and shared selection |
| StatusBadge | Rectangle + Text + semantic token |
| Product Explorer | ListView + filtering/sorting model |
| NetworkNode / Edge | Item + Shape / ShapePath; Qt Quick 3D only where comprehension benefits |
| Timeline | Slider + Canvas/Shape + value labels |
| PortfolioTable | TableView + ItemSelectionModel |
| Inspector | Pane / dockable Drawer |
| Dialog / Toast | Dialog / Popup with accessible status |

## State
Use an AppState QObject with Q_PROPERTY for selectedProductId, selectedNodeId, activePage, timeIndex, draftScenario, lastRunScenario, dirty, and modelStatus. Never recompute last-run results from unsubmitted edits. Use C++ for deterministic planning calculations and QAbstractListModel for catalog/edges.

## Tokens
Import the provided singleton: `import "./qml" as ThreadDS` then `color: ThreadDS.ThreadTheme.surface`; `radius: ThreadDS.ThreadTheme.radiusMd`. Verify import paths in your own Qt project.

## Icons
SVG sources are designed at 24×24. Qt Images do not inherit CSS currentColor from a QML parent: create tone-specific versions or render strokes with Shapes. No font files are distributed. On MCU targets, pre-rasterize and optimize per display density.

## Port order
Shell → Token singleton → Button/Field/Badge → Product Explorer → Network/Inspector → Scenario model parity → Timeline/Portfolio → Accessibility and performance tests.

**Important:** proposed dark mode and component variants are not yet integrated into the existing React demo.