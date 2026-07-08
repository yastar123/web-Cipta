---
name: Next.js metadata canonical inheritance
description: Setting alternates.canonical in the root layout.tsx metadata wrongly canonicalizes every child route to that URL.
---

Next.js App Router metadata is inherited by child routes unless overridden. Setting `alternates: { canonical: '/' }` in the root `layout.tsx`'s `metadata` export causes every page (e.g. `/portfolio`) to declare `/` as its canonical URL, which is wrong and can suppress indexing of subpages.

**Why:** Metadata inheritance in Next.js merges/overrides per-field, not per-object; a root-level canonical isn't scoped to `/` only.

**How to apply:** Do not set a canonical default in the root layout. Instead, give each route (page.tsx) its own `metadata` export with `alternates.canonical` pointing to that route's own path.
