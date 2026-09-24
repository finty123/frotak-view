# Source Manifest

Snapshot date: 2026-09-23

## User visual direction

| Field | Value |
|---|---|
| File | `assets/videotelemetry-visual-direction.png` |
| SHA-256 | `A48993B67BE613AEEDCD0C13DA74926C70749B1871A7D27451BAE01F6958FA42` |
| Purpose | Composition, density and operational hierarchy reference |
| Included rights | User-provided reference for this project |
| Restriction | Do not copy myGeotab/Michelin branding, logo, proprietary artwork, wording or trade dress |

## AlignUI

| Snapshot | Origin | Revision | License | Local path |
|---|---|---|---|---|
| Next.js TypeScript starter | `https://github.com/alignui/alignui-nextjs-typescript-starter` | `f37bd913a058ceca39d5bfc2369ec420018e5716` (`master`) | MIT | `vendor/alignui-nextjs/` |
| Remix TypeScript starter | `https://github.com/alignui/alignui-remix-typescript-starter` | `16afe4b9dc641182ce06f2ea19f975dd4bd55d1a` (`master`) | MIT | `vendor/alignui-remix/` |
| AlignUI CLI/tokens | `https://github.com/alignui/cli` | `07f37c8346138b2f8324c437eb401194cf156ddd` (`master`), package `0.0.19` | MIT | `vendor/alignui-cli/` |
| Component documentation | `https://www.alignui.com/docs/v1.2/introduction` | Docs v1.2, consulted 2026-09-23 | Base components stated as MIT | `catalogs/alignui-docs.md` |

Included: base components, starter utilities, semantic colors, typography, shadows, radii and public documentation index. Excluded: AlignUI PRO blocks, sector templates, premium Figma library and any asset requiring a separate commercial license.

## Preline

| Snapshot | Origin | Revision | License | Local path |
|---|---|---|---|---|
| Preline source | `https://github.com/htmlstreamofficial/preline` | `05ca59998db345cfede649b00093032409b37f25` (`main`), package `5.0.0` | MIT + Preline UI Fair Use License | `vendor/preline/` |
| Documentation catalog | `https://www.preline.co/docs/` | v5-era docs, consulted 2026-09-23 | Subject to official license/terms | `catalogs/preline-docs.md` |

Included: package source, distributable behavior, themes, official agent-skill material, README and license. Excluded: Preline Pro, separately sold blocks/templates, third-party brand assets and website-only copyrighted media.

## Compliance rules

- Keep `licenses/ALIGNUI-MIT-LICENSE.txt` with substantial AlignUI-derived source.
- Keep `licenses/PRELINE-LICENSE.txt`, identify Preline UI and link the original repository when redistributing adapted source.
- FrotaK View is an end-user videotelemetry product, not a general-purpose UI library competing with either source.
- Do not present upstream snapshots as FrotaK-authored work.
- Re-check licenses before refreshing snapshots or publishing a reusable design-system package.
