export type Firma = {
  nombre: string;
  periodo: string;
  descripcion: string;
};

// Cambia nombres, años y textos por tu trayectoria real
export const firmas: Firma[] = [
  {
    nombre: "Aprendiz",
    periodo: "2020 – 2022",
    descripcion: "Primeras líneas de HTML, CSS y JavaScript. Aprender a mirar el código de otros.",
  },
  {
    nombre: "Artesano",
    periodo: "2022 – 2024",
    descripcion: "Proyectos reales con React y Node.js. Del «funciona» al «funciona bien».",
  },
  {
    nombre: "Constructor",
    periodo: "2024 – 2026",
    descripcion: "Aplicaciones completas con Next.js y TypeScript, con foco en rendimiento y accesibilidad.",
  },
  {
    nombre: "El viejo loco por el código",
    periodo: "Siempre",
    descripcion: "Hokusai firmó así hacia el final de su vida: «el viejo loco por la pintura». Sigo aprendiendo.",
  },
];

export const stack = [
  { grupo: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { grupo: "Backend", items: ["Java", "SpringBoot", "PostgreSQL", "Prisma", "REST"] },
  { grupo: "Tools", items: ["Git", "Figma", "Vercel", "Docker"] },
];