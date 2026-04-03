/**
 * Configuración SEO para el Portfolio
 * Optimizaciones implementadas para mejorar visibilidad en motores de búsqueda
 */

export const SEO_CONFIG = {
  site: {
    name: "Juan Cruz Martínez - Software Engineer",
    description: "Software Engineer con +6 años de experiencia especializado en desarrollo full stack",
    url: "https://juanchodev.com",
    logo: "https://juanchodev.com/photo.webp",
    ogLocale: "es_AR",
    twitter: "@_juancruzmartinez",
  },

  author: {
    name: "Juan Cruz Martínez",
    email: "juancruzmart93@gmail.com",
    location: "Corrientes, Argentina",
    bio: "Full Stack Developer con especialización en .NET, Node.js, CodeIgniter y tecnologías modernas",
  },

  keywords: {
    main: [
      "developer full stack Argentina",
      "software engineer Corrientes",
      ".NET developer",
      "Node.js developer",
      "React developer",
      "CodeIgniter developer",
      "desarrollador web Argentina",
      "trabajo remoto",
    ],
    technologies: [
      ".NET",
      "Node.js",
      "React",
      "Vue.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "NestJS",
    ],
  },

  social: {
    linkedin: "https://www.linkedin.com/in/martinezjc93/",
    github: "https://github.com/Juanchobostero",
    twitter: "https://twitter.com/_juancruzmartinez",
  },

  performance: {
    // Estrategia de carga de imágenes
    imageOptimization: {
      format: "webp",
      loading: "lazy", // Lazy load para mejor Core Web Vitals
      decoding: "async",
    },
    // Compresión HTML
    compressHTML: true,
    // Minificación
    minify: "terser",
  },

  sitemap: {
    // Prioridades de pagerank
    priorities: {
      index: 1.0,
      experience: 0.8,
      projects: 0.9,
      about: 0.7,
    },
    // Frecuencia de cambios
    changefreq: "weekly",
  },

  openGraph: {
    defaultImage: "/photo.webp",
    defaultImageWidth: 1200,
    defaultImageHeight: 630,
    type: "website",
  },

  structuredData: {
    // Breadcrumbs automáticos
    breadcrumbs: true,
    // Datos organizacionales
    organization: true,
    // Datos de proyectos
    projects: true,
    // Datos personales
    person: true,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: true,
    bingBot: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  lang: "es-AR",
  alternateLanguages: ["es", "es-AR"],
};

/**
 * Optimizaciones SEO Aplicadas:
 * ============================================
 *
 * 1. META TAGS:
 *    - Titles y descriptions optimizados
 *    - Keywords relevantes
 *    - Robots meta tags
 *    - Language tags
 *
 * 2. OPEN GRAPH:
 *    - og:image con dimensiones correctas
 *    - og:type, og:locale
 *    - Twitter card optimization
 *
 * 3. STRUCTURED DATA (JSON-LD):
 *    - Person schema
 *    - BreadcrumbList
 *    - CreativeWork para proyectos
 *    - Organization schema
 *
 * 4. SITEMAP:
 *    - Automatic sitemap generation
 *    - Prioridades y changefreq
 *    - Filtrado de páginas no indexables
 *
 * 5. ROBOTS.TXT:
 *    - Configuración para Googlebot y Bingbot
 *    - Crawl-delay optimizado
 *    - Referencia a sitemap
 *
 * 6. ACCESIBILIDAD & SEMÁNTICA:
 *    - Aria labels en navegación
 *    - Headings correctamente estructurados
 *    - Alt text en imágenes
 *    - Atributos loading="lazy" y decoding="async"
 *
 * 7. PERFORMANCE:
 *    - Compresión HTML
 *    - Minificación CSS/JS
 *    - Lazy loading de imágenes
 *    - Webp para imágenes optimizadas
 *
 * 8. HUMANS.TXT:
 *    - Información del desarrollador
 *    - Tecnologías utilizadas
 *    - Metadata del sitio
 */
