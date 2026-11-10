# Publish THREAD as a GitHub Pages live demo

The root [index.html](../index.html) is a self-contained, offline-capable static React prototype. No npm build step is needed to host it. A root `.nojekyll` file is included to disable unnecessary Jekyll processing.

## One-time GitHub setting (repository administrator)

1. Open https://github.com/sandeepariyar/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/settings/pages
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**; click **Save**.
4. On the Pages settings page, check the deployment status and follow the published site link.

Expected URL when GitHub Pages is active:

https://sandeepariyar.github.io/THREAD-Interactive-Supply-Chain-Planning-Decision-Intelligence-Platform/

Any changes to `index.html` on `main` will then deploy through GitHub Pages.

## Source versus hosted preview

- `index.html`: standalone browser demo served by Pages
- `app/`: React + TypeScript + Vite source; can be developed with `npm install && npm run dev`
- This is an independent portfolio prototype using entirely synthetic planning data.
