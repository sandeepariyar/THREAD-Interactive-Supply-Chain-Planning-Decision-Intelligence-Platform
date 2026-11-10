# THREAD Design System / v1.0

**An operating language for connected decisions.**

The reverse-engineered, implementation-ready visual system for **THREAD — Interactive Supply Chain Planning & Decision Intelligence**. It encompasses branding, vector assets, semantic design tokens, component contracts, interaction and visualization patterns, accessibility, and a Qt/QML handoff.

[**Open the interactive design-system reference**](./index.html) · [**THREAD application**](../index.html) · [**QML handoff**](./guides/QML_HANDOFF.md)

> **Status matters:** `extracted-current.json` documents values **actually used in the existing React prototype**. `thread.tokens.json`, vector logos, icon library and components propose a **refined v1 design language**; they are not yet wired into the live application. Dark mode is an explicitly *proposed* theme. Never claim implementation in React or Qt before integration/testing.

## System directory

| Location | What it contains |
| --- | --- |
| `index.html` | Interactive visual design-system reference, no build step |
| `assets/brand/` | Original THREAD mark, mono mark, wordmark, light/dark lockups and favicon (SVG) |
| `assets/icons/` | 59 original, 24×24, consistent-stroke SVG icons, plus manifest and sprite |
| `tokens/` | Existing CSS extraction, proposed JSON tokens, CSS custom properties and TypeScript mapping |
| `components/` | Reusable typed React primitive examples and CSS implementations |
| `guides/` | Professional foundation, brand, component, content, data visualization, UX and accessibility rules |
| `qml/` | Theme singleton + `qmldir` foundation for the future Qt 6 port |
| `tests/` | Automated validation for SVG syntax, token alignment and accessible color pairings |

## Core decisions

- **Personality:** Editorial clarity, industrial precision, calm confidence. No decorative sci-fi, generic SaaS cards, or false telemetry.
- **Primary brand color:** iris `#5449D8`; reserved for focus, selection, action and active lineage paths.
- **Typography:** DM Sans for UI; IBM Plex Mono for quantities, codes, dates, axes and technical state. Fonts are referenced—not distributed.
- **Layout:** 1600×900 reference, 64 px top header, 76 px nav rail, 280 px explorer, 306 px inspector, fluid canvas. At 1280×800 use dockable/overlay panels.
- **Status color:** positive green, caution amber, actionable danger red. Always pair color with text/icon/pattern.
- **Motion:** 140–280 ms for ordinary controls, up to 380 ms for spatial orientation, reduced-motion support.
- **Data provenance:** observed vs inferred vs simulated always explicit; no fake ‘live’ claims.

## Recommended adoption order

1. Lock brand mark and semantic tokens; review the visual reference.
2. Implement the atomic primitives in React, then replace legacy JSX gradually with visual regression checks.
3. Adopt network node, timeline and scenario contracts; enforce shared selection/state models.
4. Port tokens/icons to QML as-is; implement visuals via native Qt Quick components and the scenario model via C++.

**License:** Follow the repository's root LICENSE and preserve third-party notices for the current application. SVG designs in this kit were created for THREAD; no font binaries are included.