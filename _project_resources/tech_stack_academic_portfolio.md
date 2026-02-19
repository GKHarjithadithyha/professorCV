# 📦 Technical Stack Document
## Glassmorphism Academic Portfolio Website

---

## 1. Overview

This document defines the complete technical stack for building a **Professional Academic Portfolio Website** using a modern glassmorphism design system.

The stack is optimized for:

- Static-first architecture
- High performance
- Minimal maintenance
- Clean UI implementation
- Single-developer workflow

---

## 2. Frontend Framework

### ✅ Next.js (Recommended)

**Why:**

- Static Site Generation (SSG)
- Excellent SEO support
- Production-ready routing
- Easy deployment to Vercel
- Component-based architecture

Alternative (if needed):
- Hugo (SSG)
- Jekyll
- 11ty

---

## 3. Styling System

### ✅ Tailwind CSS

**Why:**

- Utility-first styling
- Rapid UI development
- Easy glassmorphism implementation
- Consistent spacing system
- Responsive design built-in

---

## 4. Typography

### Font: Lexend

Loaded via:

- Google Fonts OR
- Local font import

**Reason:**

- Clean geometric structure
- High readability
- Modern academic tone
- Works well with glass backgrounds

---

## 5. Glassmorphism Implementation

CSS Features Used:

- `backdrop-filter: blur()`
- RGBA background transparency
- Soft shadow system
- Border transparency

Tailwind Custom Utilities Recommended:

- Custom blur intensity
- Custom shadow presets
- Extended color palette

---

## 6. Content Management Strategy

### Static File-Based Content

| Content Type | Format |
|--------------|--------|
| Biography | Markdown |
| Research | Markdown |
| Publications | JSON / BibTeX |
| Awards | JSON |
| CV | PDF |

All content stored inside repository.

No database required.

---

## 7. Folder Structure

```
/app or /pages
/components
/content
   about.md
   research.md
/data
   publications.json
   awards.json
/assets
   images/
   cv.pdf
```

---

## 8. Hosting & Deployment

### ✅ Vercel (Recommended)

**Why:**

- Native Next.js support
- Automatic CI/CD
- Global CDN
- Free SSL
- Fast deployments

Alternative:

- Netlify
- GitHub Pages (for static export)

---

## 9. Version Control

### Git + GitHub

Workflow:

```
Local Development
    ↓
Git Commit
    ↓
Push to main
    ↓
Auto Build & Deploy
```

Provides:

- Version history
- Rollback capability
- Backup
- Collaboration support

---

## 10. Performance Optimization Tools

- Next.js Image Optimization
- WebP image format
- Lazy loading
- Minified CSS & JS
- CDN caching

Target Performance:

- Load time < 2 seconds
- Lighthouse score 90+

---

## 11. SEO & Discoverability

- Semantic HTML structure
- Structured publication metadata
- Open Graph tags
- Sitemap.xml generation
- ORCID & Google Scholar linking

---

## 12. Security Considerations

- No database exposure
- No authentication system
- HTTPS enabled by default
- Email obfuscation if needed

---

## 13. Optional Enhancements

Future-ready integrations:

- Blog module
- Headless CMS (Decap CMS)
- ORCID API sync
- Analytics (Plausible / Google Analytics)
- Dark mode toggle

---

## 14. Final Stack Summary

| Layer | Technology |
|-------|------------|
| Framework | Next.js |
| Styling | Tailwind CSS |
| Typography | Lexend |
| Content | Markdown + JSON |
| Hosting | Vercel |
| Version Control | GitHub |
| Architecture | Static-first |

---

## Conclusion

This stack provides:

- High performance
- Academic credibility
- Modern glassmorphism UI support
- Easy long-term maintenance
- Professional deployment workflow

It is optimized for a single-developer academic portfolio build.
