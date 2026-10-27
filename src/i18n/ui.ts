export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

// Ruta de la home en cada idioma
export const homePath: Record<Lang, string> = {
  es: '/',
  en: '/en',
};

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : defaultLang;
}

export const ui = {
  es: {
    'meta.title': 'Juan Cruz Martínez - Software Engineer | Porfolio',
    'meta.description': 'Construyo sistemas web que se usan en producción. Software Engineer con +6 años en ASP.NET Core, Angular, Node.js y React.',
    'meta.keywords': 'Juan Cruz Martinez, jotadev, desarrollador full stack, programador Argentina, desarrollador ASP.NET Core, Angular developer, Node.js developer, React developer, desarrollador web Corrientes, trabajo remoto Argentina, portfolio desarrollador',
    'meta.ogAlt': 'Juan Cruz Martínez - Software Engineer. Construyo sistemas web que se usan en producción.',

    'nav.label': 'Navegación principal',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Bio',
    'nav.contact': 'Contacto',
    'nav.home': 'JOTADEV - Inicio',
    'nav.switch': 'Ver en inglés',

    'hero.available': 'DISPONIBLE',
    'hero.headline': 'Construyo sistemas web que se usan en producción.',
    'hero.subtitle': 'Software Engineer con +6 años creando apps full stack con ASP.NET Core, Angular, Node.js y React, desde la idea hasta el deploy.',
    'hero.location': 'Corrientes, Argentina · Trabajo remoto con equipos de todo el mundo.',
    'hero.cta': 'Hablemos',
    'hero.projects': 'Ver proyectos',
    'hero.links': 'Contacto y redes',
    'hero.email': 'Enviar email a juancruzmart93@gmail.com',
    'hero.cv': 'Ver CV',
    'hero.cvLabel': 'Previsualizar curriculum vitae de Juan Cruz Martínez',

    'section.experience': 'Experiencia Laboral',
    'section.projects': 'Proyectos',
    'section.projectsNote': 'Estado de cada proyecto verificado en octubre 2026.',
    'section.about': 'Sobre mí',

    'experience.current': 'Actual',
    'experience.docs': 'Ir a documentación de',

    'projects.visit': 'Visitar sitio',
    'projects.code': 'Código',
    'projects.imageAlt': 'Portfolio Juan Cruz Martínez | Desarrollador Full Stack',

    'work.question': '¿Tenés un Proyecto?',
    'work.together': 'Trabajemos juntos.',
    'work.cta': 'Contactame',

    'footer.built': 'Desarrollado por Juan Cruz Martinez & basado en Porfolio de',
    'footer.about': 'Sobre mí',
    'footer.coffee': '☕ Invitame un café',

    'modal.contact': 'Contactame',
    'modal.cv': 'Ver CV',
    'modal.cvTitle': 'Curriculum Vitae',
    'modal.download': 'Descargar CV',

    'chat.open': 'Abrir chat de WhatsApp',
    'chat.close': 'Cerrar chat',
    'chat.photo': 'Foto de perfil - Juan Cruz Martínez',
    'chat.status': 'Típicamente responde en minutos',
    'chat.greeting': 'Hola 👋 ¿Cómo estás?',
    'chat.help': '¿En qué puedo ayudarte?',
    'chat.placeholder': 'Escribe tu mensaje...',
    'chat.send': 'Enviar mensaje por WhatsApp',

    'top.label': 'Volver arriba',
  },
  en: {
    'meta.title': 'Juan Cruz Martínez - Software Engineer | Portfolio',
    'meta.description': 'I build web systems that run in production. Software Engineer with 6+ years in ASP.NET Core, Angular, Node.js and React.',
    'meta.keywords': 'Juan Cruz Martinez, jotadev, full stack developer, software engineer Argentina, ASP.NET Core developer, Angular developer, Node.js developer, React developer, remote developer, LATAM developer, portfolio',
    'meta.ogAlt': 'Juan Cruz Martínez - Software Engineer. I build web systems that run in production.',

    'nav.label': 'Main navigation',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.home': 'JOTADEV - Home',
    'nav.switch': 'Ver en español',

    'hero.available': 'AVAILABLE',
    'hero.headline': 'I build web systems that run in production.',
    'hero.subtitle': 'Software Engineer with 6+ years building full stack apps with ASP.NET Core, Angular, Node.js and React, from idea to deployment.',
    'hero.location': 'Corrientes, Argentina · Working remotely with teams worldwide.',
    'hero.cta': "Let's talk",
    'hero.projects': 'See projects',
    'hero.links': 'Contact and social links',
    'hero.email': 'Send an email to juancruzmart93@gmail.com',
    'hero.cv': 'View resume',
    'hero.cvLabel': "Preview Juan Cruz Martínez's resume",

    'section.experience': 'Work Experience',
    'section.projects': 'Projects',
    'section.projectsNote': 'Status of each project verified in October 2026.',
    'section.about': 'About me',

    'experience.current': 'Current',
    'experience.docs': 'Go to the documentation of',

    'projects.visit': 'Visit site',
    'projects.code': 'Code',
    'projects.imageAlt': 'Juan Cruz Martínez Portfolio | Full Stack Developer',

    'work.question': 'Got a project?',
    'work.together': "Let's work together.",
    'work.cta': 'Contact me',

    'footer.built': 'Built by Juan Cruz Martinez & based on the portfolio by',
    'footer.about': 'About me',
    'footer.coffee': '☕ Buy me a coffee',

    'modal.contact': 'Contact me',
    'modal.cv': 'View resume',
    'modal.cvTitle': 'Resume',
    'modal.download': 'Download resume',

    'chat.open': 'Open WhatsApp chat',
    'chat.close': 'Close chat',
    'chat.photo': 'Profile photo - Juan Cruz Martínez',
    'chat.status': 'Usually replies within minutes',
    'chat.greeting': 'Hi 👋 How are you?',
    'chat.help': 'How can I help you?',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send message via WhatsApp',

    'top.label': 'Back to top',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
