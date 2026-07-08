---
name: AI-generated image aspect ratio
description: generateImage returns a square (e.g. 1024x1024) image even when the prompt describes a specific aspect ratio like "wide 1200x630 banner".
---

The `generateImage` callback does not accept an aspect-ratio parameter, and descriptive phrasing in the prompt (e.g. "wide 16:9", "1200x630") is not reliably honored — it commonly returns a square image regardless.

**Why:** The underlying model defaults to square output; prompt text alone doesn't control output dimensions.

**How to apply:** When an exact size is required (e.g. an OG share image at 1200x630), generate the image first, then resize/crop it to the exact target dimensions with ImageMagick (`convert in.jpg -resize WxH^ -gravity center -extent WxH out.jpg`) rather than trusting the generator's raw output.
