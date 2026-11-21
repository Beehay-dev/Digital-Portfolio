export const artistProfile = {
  name: "Alao Breakthrough Hepzibah",
  alias: "BREAKTHROUGH",
  title: "Digital Imaging Specialist, 3D Artist & Graphic Designer",
  tagline: "Bridging the tactile realism of Photo Editing with the boundless imagination of 3D Digital Art and Graphic Design.",
  location: "Lagos, Nigeria",
  phone: "+234 915 077 8437",
  email: "alaobreakthrough@gmail.com",
  bio: "Specializing in commercial photo retouching, procedural 3D world-building, high-end CGI product visualization, and bespoke 2D graphic design. Creating evocative visual identities and key artwork for brands and publications worldwide from Lagos, Nigeria.",
  stats: [
    { label: "Commercial Campaigns", value: "85+" },
    { label: "2D & 3D Deliverables", value: "320+" },
    { label: "Client Satisfaction", value: "99.8%" },
    { label: "Turnaround Accuracy", value: "100%" }
  ],
  awards: [
    { year: "2024", title: "Awwwards Site of the Day", category: "Digital Art Direction" },
    { year: "2024", title: "Behance Featured Project", category: "3D Digital Imaging" },
    { year: "2023", title: "Adobe Design Achievement", category: "Commercial Retouching" },
    { year: "2023", title: "3D World Magazine Spotlight", category: "Hard-Surface Modeling" }
  ],
  services: [
    {
      id: "photo-editing",
      title: "Digital Imaging & Photo Retouching",
      desc: "Editorial beauty retouching, micro-texture preservation, non-destructive dodge & burn, high-end compositing, and precise color grading.",
      tools: ["Adobe Photoshop CC", "Capture One Pro", "Lightroom Classic", "Radiant Color"]
    },
    {
      id: "3d-imaging",
      title: "3D Digital Art & CGI Visualization",
      desc: "Photorealistic product visualization, hard-surface modeling, complex caustics & refractive shading, procedural environments, and cinematic lighting.",
      tools: ["Blender 4.2", "Octane Render", "ZBrush", "Cinema 4D", "Substance 3D"]
    },
    {
      id: "graphic-design",
      title: "2D Graphic Design & Visual Identity",
      desc: "Avant-garde Swiss typographic layouts, brand systems, luxury packaging mockups, vector artwork, and digital matte painting.",
      tools: ["Adobe Illustrator", "InDesign", "Figma", "After Effects", "Procreate"]
    }
  ],
  skills: [
    { name: "Photoshop (Compositing & Retouching)", level: 98, category: "Photo & 2D" },
    { name: "Frequency Separation & Skin Retouch", level: 96, category: "Photo & 2D" },
    { name: "Octane & Blender 3D Rendering", level: 94, category: "3D Digital" },
    { name: "Hard-Surface & Organic 3D Modeling", level: 91, category: "3D Digital" },
    { name: "Lightroom / Capture One Color Grading", level: 95, category: "Photo & 2D" },
    { name: "Illustrator & Typographic Systems", level: 92, category: "Photo & 2D" },
    { name: "Substance 3D Material Authoring", level: 89, category: "3D Digital" },
    { name: "Digital Matte Painting & Concept Art", level: 90, category: "Photo & 2D" }
  ]
};

export const categories = [
  { id: "all", label: "All Works" },
  { id: "3d", label: "3D Digital Images" },
  { id: "photo", label: "Photo Editing & Retouching" },
  { id: "2d", label: "2D Graphic Design & Art" }
];

export const portfolioProjects = [
  {
    id: "cybernetic-chrysalis",
    title: "Cybernetic Chrysalis",
    category: "3d",
    categoryBadge: "3D Digital Image",
    aspect: "16:9",
    featured: true,
    thumbnail: "/assets/cyber_sculpture_final.jpg",
    hasBreakdown: true,
    breakdown: {
      type: "wireframe-vs-final",
      wireframeImage: "/assets/cyber_sculpture_wireframe.jpg",
      finalImage: "/assets/cyber_sculpture_final.jpg",
      wireframeLabel: "Clay & AO Topology Pass",
      finalLabel: "Final Octane Multi-pass Composite"
    },
    client: "NeuroForm Robotics / Apex Art",
    year: "2024",
    role: "Lead 3D Sculptor & Digital Imaging Artist",
    summary: "A high-fidelity 3D exploration of biomechanical synthesis, combining translucent polycarbonate resins, internal fiber-optic circuitry, and brushed titanium.",
    specs: {
      software: ["Blender 4.2", "ZBrush", "Octane Render", "Substance 3D Painter", "Photoshop CC"],
      resolution: "7680 × 4320 (8K Ultra-HD)",
      polyCount: "14.2M Quads",
      renderTime: "4h 22m on 2x RTX 4090",
      colorProfile: "ACEScg / sRGB Master"
    },
    challenges: "Achieving physical realism in the translucent breastplate while balancing internal caustic refraction and glowing fiber optics without introducing excessive digital noise.",
    process: [
      {
        step: "01. Concept & Sculpting",
        detail: "Base volumetric anatomy blocked in ZBrush, followed by precise hard-surface sub-d topology modeling in Blender."
      },
      {
        step: "02. Material Engineering",
        detail: "Authored multi-layered PBR materials in Substance: brushed titanium with anisotropic scratch maps and dual-lobe specular glass."
      },
      {
        step: "03. Multi-Pass Rendering",
        detail: "Extracted Cryptomatte, Ambient Occlusion, Specular Depth, Emission, and Normal passes using Octane Render."
      },
      {
        step: "04. Post-Production & Color",
        detail: "Final color science, volumetric haze, lens chromatic aberration, and film grain mastered non-destructively in Photoshop."
      }
    ]
  },
  {
    id: "vogue-radiance",
    title: "Velvet Radiance // Vogue Editorial",
    category: "photo",
    categoryBadge: "Photo Retouching & Editing",
    aspect: "3:4",
    featured: true,
    thumbnail: "/assets/portrait_retouched_after.jpg",
    isComparison: true,
    comparison: {
      beforeImage: "/assets/portrait_raw_before.jpg",
      afterImage: "/assets/portrait_retouched_after.jpg",
      beforeLabel: "Unprocessed Studio RAW Capture",
      afterLabel: "Editorial Master Retouch & Grade"
    },
    client: "Vogue Beauty Editorial / Cover Issue",
    year: "2024",
    role: "Senior Retoucher & Colorist",
    summary: "High-end commercial beauty retouching focused on preserving authentic micro-skin pores while sculpting dramatic rim-light contours and velvety editorial tones.",
    specs: {
      software: ["Capture One Pro 16", "Adobe Photoshop CC", "Infinite Color Panel"],
      resolution: "61.0 Megapixels (Sony A7R V RAW)",
      layers: "84 Non-destructive adjustment layers",
      colorProfile: "ProPhoto RGB -> Adobe RGB",
      technique: "Frequency Separation & Global Dodge/Burn"
    },
    challenges: "Completely elevating the flat studio capture into an iconic editorial cover without 'plasticizing' the skin texture or compromising the subject's authentic character.",
    process: [
      {
        step: "01. RAW Conversion",
        detail: "Exposure normalization and highlight recovery in Capture One, retaining highlight roll-off and neutral midtone luminance."
      },
      {
        step: "02. Blemish & Hair Cleanup",
        detail: "Manual cleanup using healing brush and clone stamp on an empty layer, removing distracting stray hairs while keeping organic hairline."
      },
      {
        step: "03. Frequency Separation",
        detail: "Divided image into high-frequency (micro-pores and fine details) and low-frequency (tonal transitions and color blends) layers."
      },
      {
        step: "04. Micro & Macro Dodge & Burn",
        detail: "Utilized 50% gray overlay layers to manually sculpt facial bone structure, deepen iris catchlights, and add three-dimensional contouring."
      },
      {
        step: "05. Color Grading & Typography",
        detail: "Infused warm golden hour highlights and deep emerald shadows, topped with bespoke editorial masthead typography."
      }
    ]
  },
  {
    id: "botanical-biome",
    title: "Aura Botanica // Micro-Cosm",
    category: "3d",
    categoryBadge: "3D Digital Image",
    aspect: "16:9",
    featured: true,
    thumbnail: "/assets/botanical_biome_3d.jpg",
    client: "Terraform Biological Lab / Speculative Design",
    year: "2024",
    role: "3D Environment Designer & Shader Artist",
    summary: "Surreal 3D digital art portraying a floating crystal orb sheltering an extraterrestrial bioluminescent ecosystem surrounded by cosmic nebulae.",
    specs: {
      software: ["Blender 4.2 Cycles", "Houdini (Fluid Droplets)", "Photoshop CC"],
      resolution: "7680 × 4320 (8K)",
      samples: "4096 Samples with OpenImageDenoise",
      shaders: "Procedural glass dispersion with Abbe number 45.2",
      colorProfile: "sRGB Display P3"
    },
    challenges: "Rendering double-refraction caustics through faceted crystal facets onto floating zero-gravity liquid mercury droplets inside the sphere.",
    process: [
      {
        step: "01. Procedural Terrarium",
        detail: "Modeled geodesic crystal shell and sculpted custom micro-topography with moss and fungal structures."
      },
      {
        step: "02. Volumetric Shading",
        detail: "Engineered glowing emission shaders with falloff gradients to create authentic bioluminescent pulse effects."
      },
      {
        step: "03. Zero-G Liquid Sim",
        detail: "Simulated surface tension for floating mercury beads with high metallic reflectivity."
      },
      {
        step: "04. Nebula Compositing",
        detail: "Multi-layered space backdrop composited with chromatic dispersion and optical glow streaks."
      }
    ]
  },
  {
    id: "celestial-gateway",
    title: "Sanctuary of the Monolith",
    category: "2d",
    categoryBadge: "2D Matte Painting & Concept Art",
    aspect: "16:9",
    featured: false,
    thumbnail: "/assets/celestial_gateway_2d.jpg",
    client: "Mythos Studios / Cinematic World-Building",
    year: "2024",
    role: "Senior Matte Painter & Environment Concept Artist",
    summary: "Epic 2D digital matte painting depicting a colossal floating architectural monolith hovering between snow-draped alpine summits at golden sunset.",
    specs: {
      software: ["Adobe Photoshop CC", "Wacom Cintiq Pro 27", "Procreate"],
      resolution: "8000 × 4500 px (300 DPI)",
      brushEngine: "Custom Textured Oil & Charcoal Rakes",
      layers: "62 Layered Atmosphere Passes",
      colorProfile: "Adobe RGB 1998"
    },
    challenges: "Balancing the enormous architectural scale against tiny pilgrim travelers on the foreground ridge while keeping atmospheric fog natural and painterly.",
    process: [
      {
        step: "01. Value Thumbnails",
        detail: "Executed 6 fast grayscale value studies to lock in high-impact silhouette contrast and focal point composition."
      },
      {
        step: "02. Photographic Plate Matte",
        detail: "Blended high-altitude mountain photographic plates with custom rock textures to establish realistic tectonic anatomy."
      },
      {
        step: "03. Digital Overpainting",
        detail: "Hand-painted architectural filigree, glowing runic cyan core, and snow drifts with directional sunlight illumination."
      },
      {
        step: "04. Atmospheric Depth",
        detail: "Separated depth planes with volumetric fog layers, rayleigh scattering, and warm sunset rim lighting."
      }
    ]
  },
  {
    id: "synthesis-form-poster",
    title: "Synthesis // Form Poster Series",
    category: "2d",
    categoryBadge: "2D Graphic Design",
    aspect: "3:4",
    featured: false,
    thumbnail: "/assets/poster_design_2d.jpg",
    client: "Bauhaus Modernist Gallery / Zurich Exhibition",
    year: "2024",
    role: "Lead Graphic Designer & Typographer",
    summary: "Award-winning International Swiss typographic exhibition poster exploring grid deconstruction, geometric symmetry, and high-contrast color theory.",
    specs: {
      software: ["Adobe Illustrator", "InDesign", "Photoshop"],
      printFormat: "B1 Sheet (707 × 1000 mm)",
      typography: "Bespoke Heavy Grotesk & Akzidenz-Grotesk",
      colorPalette: "Pantone 286C (Cobalt) & 021C (Warm Tangerine)",
      production: "2-Color Silk Screen Print on 350gsm Cotton Stock"
    },
    challenges: "Maintaining rigorous Swiss typographic grid alignment while aggressively dissecting and overlapping the letterforms across modular geometry.",
    process: [
      {
        step: "01. Modular Grid Architecture",
        detail: "Constructed a 12-column mathematical grid with golden ratio division lines and 45-degree diagonal guides."
      },
      {
        step: "02. Letterform Dissection",
        detail: "Customized glyph geometry for 'SYNTHESIS' and 'FORM', interlacing negative space with solid geometric fills."
      },
      {
        step: "03. Color Balance & Contrast",
        detail: "Fine-tuned precise pigment densities to prevent chromatic aberration during physical screen printing."
      },
      {
        step: "04. Gallery Proofing",
        detail: "Created photorealistic museum gallery mockup with authentic lighting and cotton rag paper grain."
      }
    ]
  },
  {
    id: "aura-parfum-3d",
    title: "Aura Parfum // Commercial CGI",
    category: "3d",
    categoryBadge: "3D Digital Image & Product Viz",
    aspect: "3:4",
    featured: true,
    thumbnail: "/assets/perfume_product_3d.jpg",
    client: "Aura Luxury Fragrances / Paris",
    year: "2024",
    role: "3D Product Visualization Artist",
    summary: "Photorealistic 3D commercial rendering of a faceted glass perfume flacon levitating above volcanic basalt stone and flowing charcoal silk.",
    specs: {
      software: ["Cinema 4D", "Octane Render 2024", "Marvelous Designer", "Photoshop CC"],
      resolution: "4500 × 6000 px (300 DPI Commercial Print)",
      lighting: "Custom HDR Light Studio Rig + 3 Softbox Emitters",
      materials: "Dielectric glass, gold dispersion, basalt displacement",
      renderPasses: "Beauty, Diffuse, Caustic, Shadow, Z-Depth"
    },
    challenges: "Capturing the complex interaction between ambient caustic light rings onto the wet basalt rock while maintaining crisp brand typography on the gold cap.",
    process: [
      {
        step: "01. CAD to Sub-D Modeling",
        detail: "Re-topologized industrial CAD bottle schematics into clean quad topology for distortion-free glass bevels."
      },
      {
        step: "02. Silk Cloth Simulation",
        detail: "Simulated weight and draping physics of 100% heavyweight silk charmeuse in Marvelous Designer."
      },
      {
        step: "03. Liquid & Caustics Shading",
        detail: "Configured spectral dispersion for liquid amber fragrance with internal micro-air bubble particle field."
      },
      {
        step: "04. High-End Commercial Retouching",
        detail: "Refined gold reflections, removed minor polygon artifacts, and perfected typographic clarity in Photoshop."
      }
    ]
  },
  {
    id: "aura-brand-identity",
    title: "Aura // Brand Identity & Packaging",
    category: "2d",
    categoryBadge: "2D Graphic Design & Branding",
    aspect: "16:9",
    featured: false,
    thumbnail: "/assets/brand_identity_2d.jpg",
    client: "Aura Cosmetics & Botanical Science",
    year: "2024",
    role: "Brand Identity Designer & Art Director",
    summary: "Comprehensive luxury brand identity system featuring custom stationery, foiled cosmetic packaging, and precise technical grid production specifications.",
    specs: {
      software: ["Adobe Illustrator", "InDesign", "Photoshop", "Dimension 3D"],
      colorPalette: "Forest Emerald (PMS 3302C), Champagne Gold Foil, Raw Concrete",
      deliverables: "Brand Guidelines (68 pages), Packaging Dielines, Stationery Kit",
      typography: "Custom Editorial Serif + Neutral Neo-Grotesque",
      finishing: "Embossed Hot Foil Stamping + Soft-touch Matte Lamination"
    },
    challenges: "Crafting a clean visual language that unifies high-end luxury aesthetics with clinical botanical sustainability.",
    process: [
      {
        step: "01. Brand Strategy & Logomark",
        detail: "Developed the minimalist 'A' monogram inspired by architectural arches and botanical leaf venation."
      },
      {
        step: "02. Packaging Dieline Engineering",
        detail: "Designed precise production-ready dielines for frosted dropper bottles, cream jars, and textured cardboard sleeves."
      },
      {
        step: "03. Stationery & Grid System",
        detail: "Standardized DIN A4 letterhead, business cards, and envelopes with subtle hairline grid layout guides."
      },
      {
        step: "04. Art Direction & Mockup Scene",
        detail: "Constructed the physical-style presentation on raw architectural concrete with natural botanical shadows."
      }
    ]
  }
];

export const clientReviews = [
  {
    quote: "Alex delivered visuals that redefined our brand launch. The 3D glass caustics and packaging renders were indistinguishable from reality, saving us weeks of physical studio photography.",
    author: "Elena Rostova",
    role: "Global Creative Director",
    company: "Aura Parfums Paris"
  },
  {
    quote: "The photo retouching work on our cover editorial was masterful. Pure skin texture integrity, flawless color science, and an intuitive eye for high-fashion lighting.",
    author: "Marcus Chen",
    role: "Senior Photo Editor",
    company: "Lumière Magazine"
  },
  {
    quote: "From hard-surface 3D models to Swiss graphic posters, Alex's multidisciplinary breadth across both 2D and 3D digital imaging is virtually unmatched in the industry.",
    author: "Sophia Lindqvist",
    role: "Head of Design",
    company: "Apex Interactive Studios"
  }
];
