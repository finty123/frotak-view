# Source Manifest

Snapshot audit date: 2026-09-24

## User visual direction

| Field | Value |
|---|---|
| File | `assets/videotelemetry-visual-direction.png` |
| SHA-256 | `A48993B67BE613AEEDCD0C13DA74926C70749B1871A7D27451BAE01F6958FA42` |
| Purpose | Composition, density and operational hierarchy reference |
| Included rights | User-provided reference for this project |
| Restriction | Do not copy third-party branding, logos, proprietary artwork, wording, account data or exact trade dress |

## AlignUI free sources

| Snapshot | Origin | Revision/version | License | Local path |
|---|---|---|---|---|
| Next.js TypeScript starter | `https://github.com/alignui/alignui-nextjs-typescript-starter` | `f37bd913a058ceca39d5bfc2369ec420018e5716` (`master`, confirmed current 2026-09-24) | MIT | `vendor/alignui-nextjs/` |
| Remix TypeScript starter | `https://github.com/alignui/alignui-remix-typescript-starter` | `16afe4b9dc641182ce06f2ea19f975dd4bd55d1a` (`master`) | MIT | `vendor/alignui-remix/` |
| AlignUI CLI/foundations | `https://github.com/alignui/cli` | `07f37c8346138b2f8324c437eb401194cf156ddd` (`master`, package `0.0.19`, confirmed current 2026-09-24) | MIT | `vendor/alignui-cli/` |
| Component documentation | `https://www.alignui.com/docs/v1.2/introduction` | v1.2, audited 2026-09-24 | Base Components FREE | `catalogs/alignui-docs.md` |

Included: Color and Typography foundations; all 49 free Actions, Displaying Data, Feedback, Form, Layout, Navigation, Overlays and Utils entries; public starter helpers; semantic tokens; typography; shadows; radii; source licenses; documentation index.

The public starter does not contain every component currently listed by the v1.2 documentation. The following official documentation sources are preserved in `vendor/alignui-nextjs/components/ui/` to close the free inventory without importing premium material:

| Documentation-only source | Official URL | Local file |
|---|---|---|
| Banner | `https://www.alignui.com/docs/v1.2/ui/banner` | `banner.tsx` |
| Toast wrapper | `https://www.alignui.com/docs/v1.2/ui/toast` | `toast.tsx` |
| Toast alert composition | `https://www.alignui.com/docs/v1.2/ui/toast` | `toast-alert.tsx` |

Data Table is represented by the official `table.tsx` primitive. Rating is intentionally represented by the official rating composition and `svg-rating-icons.tsx`; the documentation does not define a single encompassing Rating primitive.

Excluded: AlignUI PRO components and blocks, sector templates, premium Figma files, website media and anything requiring a separate commercial license.

## Compliance rules

- Keep `licenses/ALIGNUI-MIT-LICENSE.txt` with substantial adapted source.
- Do not present upstream snapshots as FrotaK-authored work.
- Vendor code is an offline implementation reference. Adopt components through a project-owned API and review dependencies, tokens, behavior and accessibility.
- Recheck the license, documentation version and repository revisions before refreshing the package or publishing a reusable design-system package.
