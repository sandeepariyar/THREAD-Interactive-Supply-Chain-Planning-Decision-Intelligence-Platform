# Design principles and rationale

## Explain the system, don't decorate it
Every visual relationship serves a decision. One selected SKU can be followed from supplier, factory and distribution center to store, demand projection and scenario consequence. Spatial visualization and shaders should clarify where and why—not simply occupy space.

## Begin broad, then focus without disorientation
The explorer separates total catalog, filtered result count and selected item. Selection persists across Product Explorer, Supply Network, Scenario Studio and Portfolio Exposure. Every inspector provides a path back.

## One dominant decision per view
- Product Explorer: Which SKU requires attention?
- Supply Network: What upstream and downstream dependencies matter?
- Scenario Studio: What changes if an assumption changes?
- Portfolio: Which other products share this exposure?

## Provenance before precision
Show Simulated, Illustrative and Last run labels, and units and time horizons for calculations. Draft edits must never appear as fresh computed projections.

## Reusable components, accessible density and meaningful motion
Buttons, badges, forms, panels, rows, nodes, metrics, tabs and inspectors share semantic token contracts. Text defaults to 14/20px; essential labels should not rely on 9px typography. Motion communicates state, and reduced-motion preferences are honored.

## Design language
Calm editorial clarity, industrial precision and a restrained pearl, graphite and iris palette. Flat functional geometry with modest radii, borders and shadows. Custom vector brand mark represents paths branching and rejoining. Dark theme is a proposal, not yet shipped in the application.
