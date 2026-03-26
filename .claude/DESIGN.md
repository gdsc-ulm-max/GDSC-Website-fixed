---
description: Design principles and styling guidelines based on the Hawkathon page
---

# Web Design Skills & Guidelines (GDSC ULM)

This skill document captures the premium, modern design aesthetic established by the Hawkathon pages (Hawkathon2026/HawkathonPage). It serves as the primary reference when redesigning or creating any other pages on the website to maintain site-wide consistency.

## Core Aesthetic Principles
1. **Modern & Vibrant**: Utilize Google's primary colors thoughtfully as accents, gradients, and subtle highlights.
2. **Clean Typography**: Rely on high-contrast, heavily weighted headings and readable sans-serif body text.
3. **Space & Depth**: Use generous padding, subtle drop shadows, glassmorphism, and hover animations to create a premium feel.
4. **Structured Layouts**: Information should be grouped into distinct, beautifully boxed sections with soft rounded corners.

## 1. Typography
- **Primary Font Family**: `'Google Sans', 'Inter', 'Segoe UI', sans-serif`
- **Hero Headings**: Extremely large (`clamp(3rem, 9vw, 5.5rem)`), `font-weight: 900`, tight letter spacing (`-0.04em`), usually dark (`#111827`).
- **Section Headings**: Size around `1.85rem` to `2.5rem`, `font-weight: 800`, `letter-spacing: -0.03em`.
- **Accents/Tags (e.g., Dates, Labels)**: Small size (`~0.7rem`), uppercase, wide letter spacing (`0.12em` to `0.15em`), uppercase, `font-weight: 700`, highly legible grey (`#9ca3af`).
- **Body Text**: Size `0.85rem` to `1rem`, color `#4b5563` or `#6b7280`, line height of `1.45` to `1.6`.

## 2. Color Palette
- **Google Theme Colors**:
  - Blue: `#4285f4`
  - Green: `#0f9d58`
  - Yellow: `#f4b400`
  - Red: `#db4437`
- **Backgrounds**:
  - Main Body: Clean white (`#ffffff`) with subtle recurring textures. *Example: Radial gradient dot-grid (`radial-gradient(#d1d5db 1px, transparent 1px)`) with size `24px 24px`.*
  - Off-White Section: `rgba(248, 249, 250, 0.9)` with `backdrop-filter: blur(2px)`.
- **Text Gradients**: For emphasis on specific words or dates, use `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent` with a gradient like `linear-gradient(135deg, #4285f4, #0f9d58)`.

## 3. Cards & Containers
- **Borders & Radii**:
  - Soft rounding: `border-radius: 12px`, `14px`, or `20px`.
  - Subtle borders: `1px solid #e5e7eb` or transparent for shadow-driven cards.
- **Shadows**:
  - Rest state: `box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)`.
  - Hover state: deeper shadow `box-shadow: 0 8px 24px rgba(0,0,0,0.09)` and gentle translation `transform: translateY(-4px)`.
  - Smooth transitions: `transition: transform 0.2s ease, box-shadow 0.2s ease`.
- **Accents**: Add a subtle colored top border to specific cards corresponding to themes (e.g., `border-top: 3px solid #4285f4;`).

## 4. UI Components

### Buttons
- **Primary Button**:
  - Background: `#4285f4`
  - Text: White, `font-weight: 700`, `font-size: 1rem`, `letter-spacing: 0.01em`
  - Shape: `border-radius: 8px`, `padding: 0.85rem 2.5rem`
  - Hover: Background darkens slightly (`#3373e0`), button rises slightly (`transform: translateY(-1px)`).

### Decorative Dots & Timelines
- Use Google-colored dots (e.g., `.dot-blue`, `.dot-green`, `.dot-yellow`, `.dot-red`).
- Dimensions around `8px` for list bullet points, or larger `38px` encircled dots for timeline features.
- Connect timeline elements using linear-gradient background bars behind the dots.

### Badges / Tags
- Used for simple context indicators. Example:
  - Shape: Fully rounded (`border-radius: 999px`), `padding: 0.2rem 0.65rem`.
  - Typography: `font-size: 0.68rem`, `font-weight: 700`, uppercase.
  - Colors: Light background with corresponding darker text/border (e.g., Green tag: `background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0;`).

## 5. Spacing Guidelines
- **Max Width**: Keep core content constrained to `1000px` — `1200px` with `margin: 0 auto;` and padding `0 2rem;`.
- **Section Spacing**: Very generous padding to let the content breathe. Minimum padding of `3rem 0` to `4.5rem 0`.
- **Inner Component Spacing**: Use `display: flex` or `display: grid` with predictable `gap`s (`1rem`, `1.5rem`, `2rem`) to align items cleanly without relying on excessive margins.

## Execution Checklist when redesigning a page:
1. Wrap the page content in a container with the dot-grid backing.
2. Refactor existing generic headings to use the heavy, well-spaced typography scales.
3. Replace generic solid-background sections with floating cards on blurred/off-white backgrounds.
4. Integrate Google accent colors through text gradients, decorative border-tops, and small graphical dots.
5. Upgrade buttons to the pill/rounded sleek styles with gentle hover physics.
6. Ensure mobile responsiveness via Flexbox/CSS Grid breakpoints.
