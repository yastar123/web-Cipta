---
name: ImageMagick montage fonts
description: Replit runtime behavior when composing image sprites with ImageMagick.
---

When using ImageMagick `montage` in this runtime, pass an explicit installed font, for example `-font "$(fc-match -f '%{file}' sans)"`. Without it, montage may fail with `unable to read font ''` even when no labels are used.

**Why:** The runtime's montage command did not have a default font configured, which caused repeated sprite-generation failures.

**How to apply:** Resolve a font path with `fc-match` and pass it to `montage` when assembling composite images.
