# Network, chart and spatial visualization

THREAD's network is a business topology, not a decorative node graph. Node relationships should come from the selected SKU's synthetic data record, never coordinates alone.

## Nodes and connectors
Each node has entity type, name/code, units, lead time or capacity, and an explicit health/status label. Standard nodes use muted outlines, the active lineage uses iris, projected constraints use amber dashed and broken connections use danger dashed with text. Connector width represents quantity only if data-backed and explained by a legend.

Arrow direction is explicit. Upstream trace mode must say so if arrows reverse.

## Timeline and scenario charts
Baseline slate dashed, scenario iris solid, threshold amber/red dotted with labels. Axes always show time and units. Explain zoomed domains. Results are labeled Last simulated run whenever draft values differ.

A metric must identify aggregation scope (SKU/facility/portfolio), time horizon and source. Use +14pp for percentage-point changes; never use +14% as a substitute. Unavailable data is unavailable—not zero.

## React and Qt rendering strategy
Use SVG and CSS transforms for explanatory 2.5D in React. For Qt Quick 3D, reserve geometry/shader effects for spatial tasks where depth adds decision value. Keep labels as native scalable/accessibility-friendly text, not baked into textures.

Renderer fallback: a 2D diagram showing identical semantic relationships. Critical status must remain legible without animation, glow or 3D.
