export const PROJECT_CATEGORIES = [
  'ia',
  'web',
  'movil',
  'testing',
  'herramientas',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface ProjectCaseStudy {
  problema: string;
  solucion: string;
  resultado: string;
}

export interface ProjectData {
  slug: string;
  titulo: string;
  resumen: string;
  stack: string[];
  categoria: ProjectCategory;
  destacado: boolean;
  repoUrl?: string;
  caseStudy?: ProjectCaseStudy;
}

const GITHUB_BASE = 'https://github.com/hectorrdez';

export const PROJECTS_DATA: ProjectData[] = [
  // ---------- Públicos (con enlace a GitHub) ----------
  {
    slug: 'portfolio',
    titulo: 'Portfolio',
    resumen:
      'Portfolio personal construido con el dev harness: cada sección se desarrolla como feature inmutable y se verifica con pruebas end-to-end.',
    stack: ['React 19', 'Vite', 'Tailwind 4', 'Playwright'],
    categoria: 'web',
    destacado: false,
    repoUrl: `${GITHUB_BASE}/portfolio`,
  },
  {
    slug: 'scouttech-ui',
    titulo: 'ScoutTech UI',
    resumen:
      'Librería de componentes React con tokens de diseño ui-* y soporte de tema claro y oscuro.',
    stack: ['React 19', 'Tailwind 4', 'Vitest', 'Playwright'],
    categoria: 'web',
    destacado: false,
    repoUrl: `${GITHUB_BASE}/scouttech-ui`,
  },
  {
    slug: 'sonarqube_checker',
    titulo: 'SonarQube Checker',
    resumen:
      'Dashboard que muestra el estado de los Quality Gates de SonarQube a partir de los artifacts generados en Jenkins.',
    stack: ['SonarQube', 'Jenkins'],
    categoria: 'herramientas',
    destacado: false,
    repoUrl: `${GITHUB_BASE}/sonarqube_checker`,
  },
  {
    slug: 'edugreen',
    titulo: 'EduGreen',
    resumen:
      'Web de educación ambiental orientada a los ODS 4 (Educación de calidad) y 13 (Acción por el clima), con frontend React, API Express y pruebas.',
    stack: ['React', 'Express', 'Testing'],
    categoria: 'web',
    destacado: false,
    repoUrl: `${GITHUB_BASE}/edugreen`,
  },
  {
    slug: 'my-local-ai-implementation',
    titulo: 'Implementación local de IA',
    resumen:
      'Implementación de un entorno de inteligencia artificial que se ejecuta en local, con scripts de arranque en Batchfile.',
    stack: ['Batchfile'],
    categoria: 'ia',
    destacado: false,
    repoUrl: `${GITHUB_BASE}/my-local-ai-implementation`,
  },

  // ---------- Privados (caso de estudio, sin enlace) ----------
  {
    slug: 'dev-harness-skills',
    titulo: 'Dev harness y skills',
    resumen:
      'Conjunto de 16 skills portables para Claude Code, Codex y Antigravity que organiza el desarrollo por features inmutables y verificaciones automáticas.',
    stack: ['Claude Code', 'Codex', 'Antigravity', 'Playwright'],
    categoria: 'ia',
    destacado: true,
    caseStudy: {
      problema:
        'Trabajar con asistentes de código sin un flujo fijo hace que el progreso sea difícil de seguir y que los cambios se den por buenos sin verificación suficiente.',
      solucion:
        'Un harness con features inmutables, un gate que combina typecheck, lint, build y pruebas Playwright, y un relé que permite continuar una feature entre distintos CLI y modelos locales.',
      resultado:
        'Un flujo portable entre herramientas en el que cada feature se cierra solo cuando el gate completo pasa y queda registrada en el historial.',
    },
  },
  {
    slug: 'claude-code-mods',
    titulo: 'Mods para Claude Code',
    resumen:
      'Siete mods para la interfaz de Claude Code: panel de agentes, medidores de uso, barra de contexto, auto-clear y mejora de prompts.',
    stack: ['Claude Code'],
    categoria: 'ia',
    destacado: true,
    caseStudy: {
      problema:
        'Durante las sesiones de trabajo era difícil saber el estado de los agentes, cuánto uso quedaba o cuánto contexto se había consumido.',
      solucion:
        'Un conjunto de mods que muestran en pantalla el panel de agentes, el medidor de uso en ventanas de 5 horas y 7 días, la barra de contexto y un auto-clear, además de una ayuda para mejorar prompts.',
      resultado:
        'Visibilidad continua del estado de la sesión, con menos interrupciones para revisar límites y contexto.',
    },
  },
  {
    slug: 'scouttech-ecosistema',
    titulo: 'Ecosistema ScoutTech',
    resumen:
      'Ecosistema completo de ScoutTech con cuenta central, varios frontends, API Express en TypeScript, librería de UI y despliegue propio.',
    stack: ['React', 'Express', 'TypeScript', 'Dokploy'],
    categoria: 'web',
    destacado: true,
    caseStudy: {
      problema:
        'Varias aplicaciones relacionadas necesitaban compartir identidad, componentes de interfaz y un punto de acceso común sin duplicar código.',
      solucion:
        'Una cuenta central, frontends que consumen una API Express en TypeScript, una librería de UI compartida y un despliegue propio gestionado con Dokploy.',
      resultado:
        'Un ecosistema de aplicaciones coherente que comparte piezas comunes y se despliega desde infraestructura propia.',
    },
  },
  {
    slug: 'scoutconnect-mobile',
    titulo: 'ScoutConnect Mobile',
    resumen:
      'Aplicación móvil Android desarrollada en Kotlin como parte del ecosistema ScoutTech.',
    stack: ['Kotlin', 'Android'],
    categoria: 'movil',
    destacado: false,
    caseStudy: {
      problema:
        'El ecosistema ScoutTech necesitaba una experiencia nativa en Android que complementara sus aplicaciones web.',
      solucion:
        'Una aplicación Android nativa escrita en Kotlin, pensada para integrarse con los servicios del ecosistema.',
      resultado:
        'Un cliente móvil nativo que amplía el alcance de ScoutTech a dispositivos Android.',
    },
  },
  {
    slug: 'scouttech-testing-fw',
    titulo: 'Framework de testing ScoutTech',
    resumen:
      'Framework BDD con escenarios en Gherkin en español que cubre web con Playwright y Android con Appium y Cucumber.',
    stack: ['Gherkin', 'Playwright', 'Appium', 'Cucumber'],
    categoria: 'testing',
    destacado: true,
    caseStudy: {
      problema:
        'Los escenarios de prueba para web y móvil se escribían por separado, con lenguajes y herramientas distintas, lo que dificultaba mantenerlos alineados.',
      solucion:
        'Un framework BDD único con escenarios en Gherkin en español, ejecutados sobre Playwright para la web y sobre Appium con Cucumber para Android.',
      resultado:
        'Una misma forma de describir el comportamiento esperado para web y móvil, legible también para perfiles no técnicos.',
    },
  },
  {
    slug: 'scouttech-api-testing',
    titulo: 'Pruebas de API ScoutTech',
    resumen:
      'Colecciones de Bruno para probar las APIs del ecosistema ScoutTech.',
    stack: ['Bruno'],
    categoria: 'testing',
    destacado: false,
    caseStudy: {
      problema:
        'Las APIs del ecosistema necesitaban comprobaciones repetibles de sus contratos y flujos antes de cada cambio.',
      solucion:
        'Colecciones de Bruno que organizan las peticiones por recurso y flujo, con aserciones sobre las respuestas esperadas.',
      resultado:
        'Un conjunto de pruebas de API versionable y fácil de ejecutar desde el repositorio.',
    },
  },
  {
    slug: 'keyflow',
    titulo: 'Keyflow',
    resumen:
      'Ecosistema de scaffold con frontend, backend, gateway y pruebas para arrancar aplicaciones completas.',
    stack: ['Frontend', 'Backend', 'Gateway', 'Testing'],
    categoria: 'web',
    destacado: false,
    caseStudy: {
      problema:
        'Cada nueva aplicación repetía la misma estructura de frontend, backend y acceso a servicios, con el coste de montarla desde cero.',
      solucion:
        'Un scaffold que separa frontend y backend, añade un gateway común y deja las pruebas preparadas desde el inicio.',
      resultado:
        'Un punto de partida reutilizable para nuevos proyectos con la misma arquitectura base.',
    },
  },
  {
    slug: 'home-control',
    titulo: 'Control del hogar',
    resumen:
      'Aplicación para controlar el hogar con frontend, backend y pruebas automatizadas.',
    stack: ['Frontend', 'Backend', 'Testing'],
    categoria: 'herramientas',
    destacado: false,
    caseStudy: {
      problema:
        'Gestionar los dispositivos del hogar desde varias aplicaciones dispersas resultaba incómodo y poco fiable.',
      solucion:
        'Una aplicación web con frontend y backend propios para centralizar el control de los dispositivos, con pruebas automatizadas que protegen su comportamiento.',
      resultado:
        'Un panel único para el control del hogar, mantenible gracias a sus pruebas.',
    },
  },
  {
    slug: 'auraestates',
    titulo: 'Auraestates',
    resumen:
      'Aplicación web inmobiliaria con frontend, API y pruebas automatizadas.',
    stack: ['Frontend', 'API', 'Testing'],
    categoria: 'web',
    destacado: false,
    caseStudy: {
      problema:
        'Un proyecto inmobiliario necesitaba una web pública y una API propia que sirvieran la información de los inmuebles de forma fiable.',
      solucion:
        'Un frontend web conectado a una API propia, respaldado por pruebas automatizadas sobre sus flujos principales.',
      resultado:
        'Una base web y de API mantenible, con cobertura de pruebas sobre los flujos clave.',
    },
  },
  {
    slug: 'mambo-bot-v2',
    titulo: 'Mambo Bot v2',
    resumen:
      'Bot de música para Discord desarrollado en TypeScript con discord.js.',
    stack: ['TypeScript', 'discord.js'],
    categoria: 'herramientas',
    destacado: false,
    caseStudy: {
      problema:
        'Los servidores de Discord necesitaban reproducir música de forma sencilla desde comandos del propio chat.',
      solucion:
        'Un bot escrito en TypeScript sobre discord.js que gestiona los comandos de reproducción musical.',
      resultado:
        'Una herramienta de música para servidores de Discord, con código tipado y mantenible.',
    },
  },
];
