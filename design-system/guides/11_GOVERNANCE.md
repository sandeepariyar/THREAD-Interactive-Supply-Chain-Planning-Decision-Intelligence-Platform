# Design-system governance and quality bar

## Versioning
Major: renamed tokens, changed component properties or semantics. Minor: a new backward-compatible icon, component or pattern. Patch: documentation or optical improvements.

Every design change should record the use case, before/after evidence, components and states affected, keyboard/contrast/reduced-motion tests, React impact, QML impact, rollback strategy and pull request.

## Component acceptance criteria
- Explicit API, default behavior, loading/disabled/error states
- Consistent 24×24 viewBox SVG icons and stroke geometry
- Semantic contrast, accessible name and non-color-only status
- Keyboard operation and visible focus
- Reduced-motion specification
- 1600×900 and 1280×800 responsiveness
- One canonical design-token implementation
- Qt/QML property and signal mapping
- Units, baselines and forecast horizons
- Regression checks before adoption in live app

## Release stages
**Proposed → Reviewed → Tested → Implemented in React → Validated in QML → Stable.**

A component published in this design-system kit can still be Proposed relative to the running THREAD application. Never equate documented with integrated.

## Ownership
This is an independent portfolio concept, unaffiliated with employers or supply-chain vendors. Honor repository licensing and third-party notices. Do not bundle font binaries.
