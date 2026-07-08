---
name: Next.js/Turbopack client-module data exports
description: Plain data exported from a "use client" component file breaks (e.g. "x.map is not a function") when imported into a server component.
---

Under Next.js (App Router) with Turbopack, a plain data export (array/object, no hooks) from a file marked `"use client"` is not safely usable when imported into a server component — it gets proxied as a client reference and loses its actual shape at runtime.

**Why:** Turbopack's client-reference boundary wraps everything exported from a `"use client"` module, including inert data, not just components/functions.

**How to apply:** When a server component (e.g. a page building JSON-LD) needs data that a client component also uses (e.g. FAQ Q&A pairs), extract that data into its own plain module with no `"use client"` directive, and import it independently from both the client component and the server component.
