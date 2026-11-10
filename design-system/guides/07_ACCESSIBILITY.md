# Accessibility and ergonomic requirements

Targets: WCAG 2.2 AA for ordinary body text (4.5:1); visible interactive boundaries (3:1 where applicable); non-color status semantics; keyboard and reduced-motion support. The proposed semantic text/status color pairs were checked by a contrast script in the complete design-system package.

- Default content 14px / 20px DM Sans, label 12px / 18px; numeric codes IBM Plex Mono with tabular digits. Avoid the current prototype's microscopic 9–11px *primary* copy.
- Icon-only buttons need accessible names and ≥32×32px mouse targets. Mixed touch devices should use ≥44×44px.
- Product rows should be buttons **or** a complete ARIA listbox with roving focus/keyboard options—never a partial hybrid.
- Tab bars use aria-selected and ArrowLeft/ArrowRight/Home/End handling.
- Focus must be visible during product and network selection; moving between views must not discard selected context.
- Include baseline, time horizon, units and provenance in labels; missing data reads `Unavailable`, not zero.
- Reduced motion disables ornamental route movement without hiding data changes.
- Preserve a semantic 2D alternative if GPU/3D effects are unavailable.

Test at 1600×900, 1280×800, 200% zoom, keyboard-only, reduced-motion and screen reader. The design-system reference is an interactive specimen, not proof of complete application-level accessibility.