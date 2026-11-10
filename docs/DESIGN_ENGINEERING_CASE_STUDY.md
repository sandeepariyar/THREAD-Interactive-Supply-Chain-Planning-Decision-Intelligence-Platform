# THREAD — Design Engineering Case Study

> **From shelf to source. From interface to reusable system.**
>
> Independent portfolio concept by Sandeep Pariyar. THREAD is a synthetic supply-chain planning prototype. It is not affiliated with any employer or commercial planning vendor.

## Design challenge

Operational planning interfaces often separate retail demand, available inventory, distribution dependencies and manufacturing constraints into disconnected screens. A planner must reconstruct cause and effect manually.

THREAD explores a single interaction model: select a product, follow its supplier-to-store dependencies, change an assumption, run a deterministic what-if scenario and inspect the projected consequences.

The design-engineering challenge was not to create more charts. It was to develop a **coherent visual language and reusable interaction system** that keeps the user's decision and context clear through every workspace.

## The experience

| Workspace | User question | Key interface behavior |
| --- | --- | --- |
| Product Explorer | Which product should I investigate? | Search, filter, selection and scope |
| Supply Network | What does this SKU depend on? | Entity lineage, highlighted paths and inspector |
| Scenario Studio | What changes if demand changes? | Draft parameters, explicit Run, baseline comparison |
| Portfolio Exposure | Which products share exposure? | Aggregate and product-level risk context |

**Live application:** [Launch THREAD](https://sandeepariyar.github.io/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/)

**Visual system:** [Launch the interactive design-system reference](https://sandeepariyar.github.io/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/design-system/)

## Designing the system, not just the screens

### 1. Visual identity

The identity uses a branching and rejoining route mark, representing the propagation of one decision through dependent entities. The palette keeps iris for selections and active paths, with semantically distinct green, amber and red for health states. Contrast-safe text ramps prioritize prolonged desktop use.

- [Brand and icon rules](../design-system/guides/02_BRAND_AND_ICONS.md)
- [59 custom SVG icons](../design-system/assets/icons/)
- [Semantic tokens](../design-system/tokens/thread.tokens.json)

### 2. Foundations and reusable components

The proposed design system captures the existing app's layout and palette, then specifies future refinements with explicit migration boundaries.

- **Type:** DM Sans for interface hierarchy; IBM Plex Mono for numbers and system codes
- **Density:** 4px base spacing grid and legible 14/20px primary body text
- **Responsive layout:** 1600×900 reference with a flexible center, collapsible explorer and slide-over inspector at narrower widths
- **Components:** typed buttons, badges, fields, panels, metrics, list rows and keyboard-accessible tabs
- **States:** active, hover, loading, disabled, dirty draft, calculated result, caution and error

[React reference primitives](../design-system/components/ThreadPrimitives.tsx) · [Component specifications](../design-system/guides/04_COMPONENTS.md) · [Foundations](../design-system/guides/03_FOUNDATIONS.md)

### 3. Interaction behavior is part of the design

The most important interaction contract is **draft ≠ result**. Moving the demand slider changes an unsimulated draft, not the existing projection. Pressing Run explicitly commits assumptions to the illustrative model and updates the result and its time label. The selected product and week remain shared across screens.

| Action | Immediate feedback | Computation |
| --- | --- | --- |
| Select SKU | Selected row, active network lineage | No scenario recomputation |
| Adjust demand | Draft value and dirty indicator | Prior result remains labeled as last run |
| Run scenario | Progress/result feedback | Compute new deterministic result |
| Scrub week | Current time cursor and node statuses | Show the chosen time slice |
| Inspect facility | Node/path emphasis and contextual detail | No operational change |

Ordinary transitions use 140–280ms timings, with up to 380ms for spatial orientation. Reduced-motion settings should retain meaning without movement. This is a **design contract**; not every proposed transition is implemented in the current application.

[Interaction recipes](../design-system/guides/05_INTERACTIONS.md) · [Visualization semantics](../design-system/guides/06_VISUALIZATION.md)

### 4. Cross-platform design-to-engineering handoff

THREAD demonstrates a practical design-to-code pipeline:

1. Audit working React/CSS source and separate current tokens from proposed tokens.
2. Define color, typography, component and state contracts independent of any one rendering toolkit.
3. Supply TypeScript/CSS component examples with semantic props.
4. Map tokens to a Qt Quick singleton for a possible Qt/QML port.
5. Define keyboard, reduced-motion, contrast and data-provenance checks before adoption.
6. Migrate progressively with regression checks rather than rewriting the application.

**Qt/QML relevance:** the repository contains [ThreadTheme.qml](../design-system/qml/ThreadTheme.qml), [QML handoff guidance](../design-system/guides/09_QML_HANDOFF.md) and earlier [application-level QML notes](../app/docs/QML_HANDOFF.md). These are handoff materials, **not a claim that a Qt application has already been built**. A future native port could use Qt Quick for the interface and C++ for the shared scenario/model layer.

### 5. Trust, accessibility and testability

For high-stakes-looking enterprise UI, visual polish cannot substitute for truthful states:

- Label synthetic, inferred, simulated and observed information distinctly.
- Show quantity units, scope, baseline and time horizon.
- Do not use color alone for status.
- Provide keyboard navigation, visible focus and reduced-motion equivalents.
- Review token contrast and vector consistency automatically.
- Avoid implying that local what-if actions modify operational systems.

[Accessibility contract](../design-system/guides/07_ACCESSIBILITY.md) · [Design-system validator](../design-system/tests/validate_design_system.py) · [Source audit](../design-system/guides/10_SOURCE_AUDIT.md)

## Engineering evidence and current limits

**In the running React prototype:** four connected workspaces, synthetic SKU and network data, selection and scenario state, explicit what-if simulation, a browser-based demo and test/build scripts.

**In the design-system package:** brand, 59 SVG icons, semantic light/dark tokens, interactive visual reference, detailed component specifications, example TypeScript/CSS primitives and a QML theme starting point.

**Proposed, not yet integrated:** component replacement across the React application, alternative dark-theme implementation there, full adaptive behavior at smaller breakpoints, deep keyboard/a11y audits and a functioning native Qt/C++ version.

The work demonstrates the ability to connect **UX decisions → reusable design rules → typed component contracts → implementation constraints** while honestly documenting what is and isn't shipped.

## Open the project

[Live application](https://sandeepariyar.github.io/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/) · [Interactive design system](https://sandeepariyar.github.io/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/design-system/) · [React source](../app/src/) · [UX audit](./UX_AUDIT.md) · [Design-system index](../design-system/README.md)

**Design and development:** Sandeep Pariyar. This is an independent case study with fictional products, facilities and scenario outputs.
