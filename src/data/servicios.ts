import type { Servicio } from "@/lib/types";

export const servicios: Servicio[] = [
  {
    numero: "01",
    titulo: "Desarrollo Frontend",
    descripcion: "Interfaces rápidas, accesibles y mantenibles con React y Next.js.",
    icono: "codigo",
    tecnologias: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    numero: "02",
    titulo: "Backend y APIs",
    descripcion: "Servicios, bases de datos e integraciones que escalan sin sorpresas.",
    icono: "servidor",
    tecnologias: ["JAVA", "SpringBoot", "PostgreSQL", "REST", "Prisma"],
  },
  {
    numero: "03",
    titulo: "Diseño de interfaces",
    descripcion: "Sistemas de diseño coherentes, del boceto al componente final.",
    icono: "pincel",
    tecnologias: ["Figma", "UI/UX", "Accesibilidad"],
  },
  {
    numero: "04",
    titulo: "Optimización",
    descripcion: "Rendimiento, SEO y Core Web Vitals medidos y mejorados.",
    icono: "rayo",
    tecnologias: ["Lighthouse", "SEO", "Caché"],
  },
];