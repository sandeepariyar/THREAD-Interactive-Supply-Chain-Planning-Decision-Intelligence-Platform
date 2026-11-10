# THREAD — Live demo publishing

**Live demo:** https://sandeepariyar.github.io/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/

**Deployment status:** [GitHub Actions — Deploy THREAD demo to GitHub Pages](https://github.com/sandeepariyar/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/actions/workflows/pages.yml).

The static site is deployed from `index.html` using the committed workflow `.github/workflows/pages.yml`. GitHub Actions automatically packages the self-contained site and deploys it on pushes to `main` that change the website or deployment workflow. Deployment can also be triggered manually from the Actions tab.

## What is served

- [`index.html`](../index.html) is the entire standalone interactive browser demo. No external bundles or npm installation are needed.
- [`app/`](../app/) contains the reusable React + TypeScript + Vite source and tests.
- All planning data, facilities and scenario results are synthetic.

## Troubleshooting a blank page or missing update

1. Review the [deployment workflow runs](https://github.com/sandeepariyar/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/actions/workflows/pages.yml); the latest run must show **Success**.
2. Visit the live URL above directly, not the GitHub `index.html` code preview.
3. Try a hard refresh (Ctrl+F5) or a private browsing window if the previous 404/blank page is cached.
4. If the workflow fails because Pages is disabled or its publishing source is wrong, open [Settings → Pages](https://github.com/sandeepariyar/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/settings/pages) and choose **GitHub Actions** under Source.

This is a public, independent design-engineering prototype, not an operational supply-chain system.
