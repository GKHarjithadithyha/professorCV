# Skill: UI/UX Engineer

## Purpose

Guide the generation of distinctive, production-grade frontend interfaces that balance strong visual identity with usability, scalability, accessibility, and engineering reliability.

Prioritize bold aesthetics while maintaining consistent structure suitable for real-world SaaS applications.

---

## Core Design Philosophy

- Commit to a clear visual direction (minimal, expressive, organic, or structured) and execute it consistently across screens.
- Treat text, spacing, and color as primary hierarchy tools; reduce unnecessary verbal clutter.
- Creativity must enhance usability — visual experimentation must never reduce clarity.
- Maintain a strong sense of craftsmanship: interfaces should feel intentional, refined, and production-ready.
- Preserve design uniqueness while keeping reusable patterns stable across pages.
- Prefer differentiation through composition and hierarchy rather than visual noise.

---

## System-Level UI Rules (Production Foundation)

- Build reusable components instead of one-off layouts.
- Follow a consistent design token system (spacing, typography scale, radius, shadows).
- Maintain predictable interaction patterns across pages.
- Use semantic HTML structure and accessible components.
- Avoid deep nesting or overly complex DOM structures.
- Design for scalability — new features must fit the existing system without redesigning everything.

---

## Layout Rules

- Use asymmetry intentionally while preserving readability and workflow clarity.
- Allow generous negative space or controlled density; avoid clutter.
- Left-align all paragraphs and lists; reserve centered alignment for headings only.
- Maintain strict spacing consistency:
    - outer margins ≥ 0.5”
    - spacing between sections: 0.3”–0.5”
- Separate operational controls from visual output (e.g., sidebar vs main canvas).
- Ensure all elements remain contained within layout boundaries.
- Use layout variation (grids, split panels, overlays) without breaking structural consistency.

---

## Component Design Rules

### Typography

- Pair expressive display fonts with highly readable body fonts.
- Maintain scalable hierarchy:
    - Titles: 36–44pt
    - Headers: 20–24pt
    - Body: 14–16pt
- Body text must always prioritize readability over style.

### Color System

- One dominant color (60–70% visual weight).
- 1–2 supporting secondary tones.
- One high-contrast accent for actions or highlights.
- Maintain strong foreground/background contrast at all times.

### Backgrounds & Depth

- Use subtle layers, gradients, textures, or transparency for depth.
- Avoid flat default backgrounds unless intentionally minimal.

### Motion

- Prefer CSS-based animations.
- Use motion to reinforce hierarchy (page reveals, transitions).
- Avoid excessive simultaneous animations.
- Prevent layout-shifting animations.

### Data & Lists

- Prefer visual structures:
    - stat cards
    - comparison columns
    - icon-supported content
- Avoid dense text-only sections.

---

## UX Flow Rules

- Structure controls following logical user workflows:
    - Setup → Parameters → Actions → Output
- Keep primary actions consistently visible (Regenerate, Reset, Export).
- Use progressive disclosure — reveal complexity gradually.
- Automatically map content types to layout styles:
    - key points → card blocks
    - team content → multi-column grids
    - testimonials → quote layouts
- Guide attention with visual anchors (icons, color grouping, emphasis).

---

## Responsiveness Rules

- Build using modern component systems (React + Tailwind + shadcn/ui or equivalent).
- Support fluid scaling across breakpoints.
- Adapt layouts intelligently:
    - multi-column → stacked structures only when necessary.
- Avoid collapsing everything into single-column monotony.
- Maintain hierarchy and spacing across screen sizes.

---

## Accessibility & Clarity Rules

- Maintain high color contrast for text and icons.
- Ensure keyboard accessibility and visible focus states.
- Use semantic elements (buttons, headings, lists).
- Do not rely on color alone to convey meaning.
- Ensure readable line lengths and consistent spacing.

---

## Performance Rules

- Prefer lightweight CSS effects over heavy JS animations.
- Avoid excessive blur, shadows, or layered effects that impact rendering.
- Minimize unnecessary re-renders in interactive components.
- Keep animations smooth and purposeful.

---

## UI Validation Checklist

- [ ]  Is the layout visually distinctive but still usable?
- [ ]  Are spacing and margins consistent across sections?
- [ ]  Is one dominant color clearly leading the hierarchy?
- [ ]  Are paragraphs and lists left-aligned?
- [ ]  Are components reusable rather than one-off?
- [ ]  Is the interface accessible and readable?
- [ ]  Are animations meaningful and not distracting?
- [ ]  Does the layout remain clean across mobile and desktop?
- [ ]  Are visual elements supporting text (icons, charts, callouts)?

---

## Anti-Patterns to Avoid

- Generic “AI-generated” layouts (over-centered, overly symmetrical designs).
- Uniform rounded corners everywhere without hierarchy.
- Default purple-gradient-on-white aesthetics.
- Overuse of trendy effects without purpose.
- Generic system fonts for primary identity styling.
- Text-only screens lacking visual structure.
- Low contrast combinations.
- Decorative accent lines under titles; separate sections using spacing or background shifts instead.
- Breaking usability in pursuit of artistic experimentation.