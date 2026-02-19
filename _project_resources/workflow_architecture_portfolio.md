# 📘 Workflow Architecture Document
## Professional Academic Portfolio Website

---

## 1. Workflow Overview

The workflow follows a **static-site development lifecycle** designed for:

- Fast delivery
- Low maintenance
- High reliability
- Single-developer execution

### Lifecycle Stages

1. Content Collection  
2. Content Structuring  
3. Development & Component Build  
4. Testing & Quality Checks  
5. Deployment  
6. Maintenance & Updates  

---

## 2. Content Workflow

### Step 1 — Content Collection
Gather:

- Profile photo
- Academic biography
- Research interests
- Publications list
- Patents / books
- Experience details
- CV PDF

---

### Step 2 — Content Filtering
Convert CV-style data into:

- Short website-friendly sections
- High-impact highlights
- Thematic grouping (not chronological overload)

---

### Step 3 — Structured Content Conversion

| Content Type | Format |
|---|---|
| Biography | Markdown |
| Research sections | Markdown |
| Publications | JSON / BibTeX |
| Metrics / Stats | JSON |
| CV | PDF |

---

### Step 4 — Integration
Static Site Generator reads content files during build:

```
Content Files → Build Process → Rendered Website
```

---

## 3. Development Workflow

### Project Setup
- Initialize Git repository
- Setup framework (Next.js / Hugo / Jekyll)
- Configure global styles

---

### Component Creation
Build reusable components:

- Hero/Profile
- Section titles
- Publication cards
- Experience timeline
- Contact section

---

### Page Assembly
Core pages:

- Home
- About
- Research
- Publications
- Teaching
- Contact

---

### Responsive Implementation
Ensure:

- Mobile-first layout
- Proper spacing
- Readable typography

---

### Local Testing
Run local server to verify:

- Routing
- Data rendering
- Layout behavior

---

## 4. Data Workflow

### Folder Structure

```
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

### Data Strategy

- Static file-based data
- No database required
- UI decoupled from content

---

### Publication Management

Each publication includes:

- Title
- Authors
- Journal
- Year
- DOI
- Indexing tags

---

### Update Flow

```
Edit file → Save → Commit → Deploy
```

Build process acts as data renderer.

---

## 5. Build & Deployment Workflow

### Git Workflow

```
Local Change
   ↓
Git Commit
   ↓
Push to main
   ↓
Auto Build (Vercel/Netlify)
   ↓
Global CDN Deployment
```

---

### Continuous Deployment
- Fully automated
- No manual upload
- HTTPS enabled automatically

---

## 6. Update & Maintenance Workflow

### Adding Publications
- Add entry in publications.json
- Push update

---

### Updating CV
- Replace `cv.pdf`
- Keep same filename

---

### Editing Content
- Modify Markdown file
- Push changes

---

### Version Control
Git maintains:

- Full history
- Rollback capability
- Change tracking

---

## 7. Quality Assurance Workflow

### Device Testing
- Mobile responsiveness
- No horizontal scrolling

---

### Accessibility
- Alt text for images
- Proper heading hierarchy
- Color contrast compliance

---

### Performance
- WebP image compression
- Minimal JavaScript
- Target load time:

```
< 2 seconds
```

---

### SEO & Academic Discoverability

- Structured publication metadata
- ORCID + Google Scholar linking
- Semantic HTML structure

---

## 8. Future Enhancement Workflow

Possible upgrades:

- Blog / News module
- CMS integration (Decap CMS)
- ORCID auto-sync
- Interactive research visualizations
