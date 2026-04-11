/**
 * Schema.org JSON-LD para proyectos
 * Mejora significativa de SEO y visibilidad en motores de búsqueda
 */

export interface ProjectSchema {
  title: string;
  description: string;
  link: string;
  image: string;
  technologies: string[];
}

export function generateProjectSchema(projects: ProjectSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Proyectos de Juan Cruz Martínez",
    "description": "Portafolio de proyectos desarrollados por Juan Cruz Martínez, Software Engineer Full Stack",
    "url": "https://jotadev.com.ar",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "@context": "https://schema.org",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "url": project.link,
      "image": `https://jotadev.com.ar${project.image}`,
      "author": {
        "@type": "Person",
        "name": "Juan Cruz Martínez",
        "url": "https://jotadev.com.ar"
      },
      "inLanguage": "es-AR",
      "datePublished": new Date().toISOString().split("T")[0],
      "keywords": project.technologies?.join(", ") || ""
    }))
  };
}

export function generateBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://jotadev.com.ar"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Experiencia",
        "item": "https://jotadev.com.ar/#experiencia"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Proyectos",
        "item": "https://jotadev.com.ar/#proyectos"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Sobre mi",
        "item": "https://jotadev.com.ar/#sobre-mi"
      }
    ]
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Juan Cruz Martínez Portfolio",
    "url": "https://jotadev.com.ar",
    "logo": "https://jotadev.com.ar/photo.webp",
    "sameAs": [
      "https://www.linkedin.com/in/martinezjc93/",
      "https://github.com/Juanchobostero",
      "https://twitter.com/_juancruzmartinez"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "juancruzmart93@gmail.com",
      "availableLanguage": ["es", "en"]
    }
  };
}
