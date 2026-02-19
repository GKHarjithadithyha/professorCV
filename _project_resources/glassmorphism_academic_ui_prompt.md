# 🎨 Glassmorphism Academic Portfolio UI Prompt

Create a modern **PROFESSIONAL ACADEMIC PORTFOLIO** website using a subtle glassmorphism design system.

This is for a professor-level academic profile — the design must feel elegant, calm, and credible. Avoid flashy startup aesthetics.

---

## 🎨 Design System Specification

### Color Palette

**Glass Surfaces:**  
`#DEF4FC`

**Background:**  
`#B0B0B0`

**Primary Text / Headers (Charcoal Black):**  
`#1C1C1E`

Use white (`#FFFFFF`) only for highlights and inner card contrast when needed.

Do not introduce additional strong accent colors.

---

### Typography

**Font Family:**  
`Lexend, sans-serif`

#### Hierarchy

- **Hero Title:** 44–48px, bold, charcoal (`#1C1C1E`)
- **Section Titles:** 28–32px, semi-bold
- **Body Text:** 16–18px, regular
- **Metadata / Publication Details:** 14px, medium

**Line height:** `1.6`

Text must always maintain strong readability over glass backgrounds.

---

## 🧊 Glassmorphism Rules

### Glass Card Styling

```css
background: rgba(222, 244, 252, 0.25);
backdrop-filter: blur(18px);
border: 1px solid rgba(255,255,255,0.35);
border-radius: 18px;
box-shadow: 0 8px 30px rgba(0,0,0,0.08);
```

Glass effect must be subtle and professional.  
Do **NOT** overuse transparency.

---

## 📐 Layout & Spacing

Use large, breathable spacing.

**Spacing scale:**  
`8 / 16 / 24 / 32 / 48 / 64 / 96`

- Section spacing: minimum **80px** vertical gap
- Max content width: **1100–1200px**
- Centered layout
- Mobile-first responsive design required

---

## 🧱 Required Sections

- Hero (Profile image + Name + Designation)
- About
- Research Interests
- Publications
- Academic Experience
- Patents / Books
- Contact + CV Download

Each major section should be placed inside subtle glass containers.

---

## 🎞 Interaction & Motion

Use minimal smooth transitions only.

**Hover**
- Slight elevation (`translateY(-3px)`)
- Soft shadow enhancement

**Scrolling**
- Smooth scrolling behavior

**Avoid**
- Heavy animations
- Parallax
- Neon glow
- Bright gradients

---

## 🧠 Visual Tone

The design should feel like:

**Apple × Academic Institution × Minimal Luxury**

The interface must communicate:

- Authority
- Clarity
- Calm confidence
- Modern academic professionalism

---

## 🧩 Implementation Notes

- Production-ready UI
- Fully responsive layout
- Reusable components
- Clean structure

### Recommended stack (optional add-on)

- Next.js
- Tailwind CSS
- Avoid inline styles
