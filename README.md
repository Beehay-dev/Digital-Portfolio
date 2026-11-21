# AURA // Digital Imaging, 3D Art & Graphic Design Portfolio

A cutting-edge, high-performance portfolio website engineered specifically for **Digital Imaging Specialists, Photo Editors, 3D CGI Artists, and Graphic Designers**.

Built with **React 19**, **Vite 8**, **Tailwind CSS v4**, **Three.js (WebGL)**, and **Lucide Icons**.

---

## 🌟 Key Features & Interactive Showcases

### 1. 📸 Interactive Before & After Photo Retouching Split-Slider
- **Real-Time Draggable Divider**: Seamlessly compare unedited studio RAW captures against editorial magazine master grades.
- **Dual View Modes**: Switch between **Split Slider**, **Side-by-Side Dual View**, and **Hold-to-Compare (Quick Flash)**.
- **Layer & Technique Breakdown**: Inspect steps including Exposure Neutralization in Capture One, High/Low Frequency Separation, 50% Gray Dodge & Burn bone contouring, and ACEScg color grading.
- **EXIF & Camera Metadata Drawer**: Displays camera model (Sony A7R V 61MP), lens (85mm GM f/1.4), exposure values, and non-destructive layer count (84 layers).

### 2. 🧊 3D Digital Imaging & Quad Topology X-Ray Inspector
- **3D Render Breakdown**: Interactive opacity slider and pass buttons to inspect the underlying **14.2M quad wireframe & ambient occlusion clay pass** alongside the **final multi-pass Octane render**.
- **Shader & Lighting Breakdown**: Technical metrics for subsurface scattering (polycarbonate shell), internal glowing fiber optics, and anisotropic brushed titanium.

### 3. 🌐 Real-Time Interactive Three.js WebGL Hero Canvas
- Dynamic floating crystalline icosahedron with an inner refractive glass core, surrounded by glowing additive particle dust.
- Responds with smooth rotational inertia to cursor movements across the viewport.

### 4. 🎨 Comprehensive Curated Works Archive (2D & 3D)
- **3D Digital Images**:
  - *Cybernetic Chrysalis* (Biomechanical Hard-surface Sculpting & Octane 8K)
  - *Aura Botanica // Micro-Cosm* (Bioluminescent Terrarium with Glass Dispersion & Fluid Dynamics)
  - *Aura Parfum // Commercial CGI* (Luxury Flacon with Real-Time Caustics & Marvelous Silk Simulation)
- **Photo Editing & Commercial Retouching**:
  - *Velvet Radiance // Vogue Editorial* (High-fashion Beauty Retouching, 16-Bit ProPhoto RGB)
- **2D Graphic Design & Concept Art**:
  - *Synthesis // Form Poster Series* (Award-winning International Swiss Typographic Style)
  - *Sanctuary of the Monolith* (Atmospheric 2D Digital Matte Painting & Cinematic Concept Art)
  - *Aura // Brand Identity & Packaging* (Hot Foil Stamping, Dieline Engineering, Pantone Emerald 3302C)

### 5. 🔍 In-Depth Case Study Modal
- High-resolution modal with multi-tab inspection:
  - **Overview**: Client brief, artistic concept, creative challenges solved.
  - **Production Process**: 4-phase step-by-step technical breakdown.
  - **Technical Specs**: Resolution (8K / 61MP), polygon count, render engines, color profiles, and downloadable spec sheets.

### 6. ⚙️ Interactive Scope & Commission Cost Estimator
- Interactive calculator allowing prospective clients to configure discipline (3D CGI, Photo Retouching, 2D Graphic Design, or Integrated Campaign), asset deliverable count (1–10+), turnaround urgency, and commercial licensing tiers.
- Integrated direct inquiry form that generates custom project references (`#VNC-XXXXXX`).

### 7. 📄 Artist Bio & Curriculum Vitae Modal
- Detailed professional CV featuring agency background, exhibition history, client roster, and education (Royal College of Art & Zurich University of the Arts).

---

## 🚀 Getting Started

### Local Development
```bash
# Navigate to the project directory
cd "C:\Users\alaob\.gemini\antigravity\scratch\digital-portfolio"

# Start the Vite development server
npm run dev
```

### Production Build & Preview
```bash
# Build the optimized production bundle
npm run build

# Preview the production build locally
npm run preview -- --port 5173 --host
```

---

## 📁 Project Structure

```
digital-portfolio/
├── public/
│   └── assets/                     # High-resolution 2D and 3D portfolio imagery
│       ├── botanical_biome_3d.jpg
│       ├── brand_identity_2d.jpg
│       ├── celestial_gateway_2d.jpg
│       ├── cyber_sculpture_final.jpg
│       ├── cyber_sculpture_wireframe.jpg
│       ├── perfume_product_3d.jpg
│       ├── portrait_raw_before.jpg
│       ├── portrait_retouched_after.jpg
│       └── poster_design_2d.jpg
├── src/
│   ├── components/
│   │   ├── BeforeAfterSlider.jsx    # Photo retouching comparison slider
│   │   ├── CaseStudyModal.jsx       # Multi-tab project case study modal
│   │   ├── CommissionCalculator.jsx # Interactive project estimate calculator
│   │   ├── CreativeProcess.jsx      # 4-stage 2D/3D production workflow
│   │   ├── Footer.jsx               # Avant-garde footer with contact links
│   │   ├── Hero.jsx                 # Hero section with headline and metrics
│   │   ├── Hero3DCanvas.jsx         # Three.js WebGL interactive 3D background
│   │   ├── Navbar.jsx               # Sticky nav with mobile drawer & shortcuts
│   │   ├── ProjectCard.jsx          # Individual portfolio item card
│   │   ├── ProjectGrid.jsx          # Filterable grid with live search
│   │   ├── ResumeModal.jsx          # Artist CV and education modal
│   │   ├── ReviewsAndAwards.jsx     # Client testimonials and industry honors
│   │   └── SkillsMatrix.jsx         # Software proficiency and services
│   ├── data/
│   │   └── portfolioData.js         # Comprehensive project dataset & specs
│   ├── App.jsx                      # Main app layout
│   ├── index.css                    # Tailwind CSS v4 and typography rules
│   └── main.jsx                     # Application entry point
├── index.html                       # HTML template with Syne & Space Grotesk fonts
├── package.json                     # Dependencies and scripts
└── vite.config.js                   # Vite configuration with React & Tailwind
```

---

## 🎨 Customizing Portfolio Content

All projects, descriptions, software tags, and client reviews are centrally configured in:
`src/data/portfolioData.js`

To add a new project, simply append an entry to `portfolioProjects`:
```javascript
{
  id: "your-project-id",
  title: "Your Artwork Title",
  category: "3d", // '3d' | 'photo' | '2d'
  categoryBadge: "3D Digital Image",
  aspect: "16:9", // '16:9' or '3:4'
  thumbnail: "/assets/your_image.jpg",
  client: "Client Name",
  year: "2025",
  role: "Lead 3D Artist",
  summary: "Brief project summary...",
  specs: {
    software: ["Blender 4.2", "Octane Render"],
    resolution: "7680 × 4320 (8K)",
    polyCount: "10M Quads"
  },
  process: [
    { step: "01. Sculpting", detail: "..." },
    { step: "02. Shading", detail: "..." }
  ]
}
```

---

## 🌐 Deployment

The project can be deployed to any static hosting provider:

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```
