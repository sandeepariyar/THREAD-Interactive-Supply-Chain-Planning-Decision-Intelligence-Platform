# THREAD — Interactive Supply Chain Planning & Decision Intelligence

**From Shelf to Source.**

An interactive enterprise planning prototype connecting **products, retail demand, warehouse inventory, manufacturing capacity, and distribution**. THREAD explores how planners can follow supply dependencies, test demand changes, and understand their projected consequences in one coherent workspace.

[**Launch interactive demo**](https://sandeepariyar.github.io/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/) · [**Explore React source**](./app/) · [**Read case study**](./app/docs/CASE_STUDY.md)

> **Independent portfolio prototype.** All products, facilities, inventory, forecasts, and scenario results are fictional. THREAD is not affiliated with RELEX Solutions or any other supply-chain software provider. The simulation is illustrative, not an operational planning or optimization engine.

## Explore the experience

| Workspace | What it demonstrates |
| --- | --- |
| **Product Explorer** | Search and examine a synthetic catalog of 1,284 SKUs with inventory and risk indicators. |
| **Supply Network** | Follow a selected product across its retail, distribution, and manufacturing context. |
| **Scenario Studio** | Change demand and capacity assumptions; run deterministic what-if simulations and compare outcomes with baseline conditions. |
| **Portfolio Exposure** | Investigate which products may be at risk and review aggregate, illustrative impacts. |

Selection, scenario settings, and the planning timeline share state across the experience. Pending parameter edits are distinguished from the most recently calculated simulation.

## Design & engineering

**Stack:** React · TypeScript · Vite · CSS · reusable UI components · deterministic synthetic data model.

**Design focus:** Enterprise UX, product discovery, multi-level information architecture, explainable scenario planning, interaction design, and reusable component systems.

- [Application & component source](./app/src/)
- [Simulation data model](./app/src/model.ts)
- [Design/UX review and improvements](./docs/UX_AUDIT.md)
- [QML handoff notes](./app/docs/QML_HANDOFF.md)

## Run locally

```bash
cd app
npm install
npm run dev
```

Or open the self-contained [browser demo file](./index.html) locally without installing dependencies.

For testing and a production build:

```bash
cd app
npm test
npm run build
```

## Project status

This is an **interactive prototype**, not production supply-chain software. Product-dependent network accuracy, shared-capacity modeling, and deeper accessibility and responsive behavior are documented as areas for improvement in the [UX audit](./docs/UX_AUDIT.md).

## Credits

Independent concept and development by **Sandeep Pariyar**. Visual exploration used Google Stitch. Third-party notices are included in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md). Publishing configuration is documented separately in [docs/PUBLISHING.md](./docs/PUBLISHING.md).
