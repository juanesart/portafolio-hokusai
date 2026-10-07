import type { Trabajo } from "@/lib/types";

export const trabajos: Trabajo[] = [
  {
    slug: "proyecto-uno",
    titulo: "Nombre del proyecto uno",
    descripcion: "Qué problema resuelve y cuál fue tu papel en una o dos frases.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    imagen: "/img/proyecto-uno.jpg",
    url: "https://ejemplo.com",
    repo: "https://github.com/tu-usuario/proyecto-uno",
    anio: "2026",
  },
  {
    slug: "proyecto-dos",
    titulo: "Nombre del proyecto dos",
    descripcion: "Descripción breve centrada en el resultado.",
    stack: ["React", "Node.js", "PostgreSQL"],
    repo: "https://github.com/tu-usuario/proyecto-dos",
    anio: "2025",
  },
  {
    slug: "proyecto-tres",
    titulo: "Nombre del proyecto tres",
    descripcion: "Descripción breve centrada en el resultado.",
    stack: ["Next.js", "Prisma", "Stripe"],
    url: "https://ejemplo.com",
    anio: "2025",
  },
  {
    slug: "proyecto-cuatro",
    titulo: "Nombre del proyecto cuatro",
    descripcion: "Descripción breve centrada en el resultado.",
    stack: ["Astro", "MDX", "Tailwind"],
    anio: "2024",
  },
];