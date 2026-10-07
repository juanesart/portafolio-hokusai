export type IconoServicio = "codigo" | "servidor" | "pincel" | "rayo";

export type Servicio = {
  numero: string;
  titulo: string;
  descripcion: string;
  icono: IconoServicio;
  tecnologias: string[];
};

export type Trabajo = {
  slug: string;
  titulo: string;
  descripcion: string;
  stack: string[];
  imagen?: string; // opcional: sin imagen se muestra el patrón seigaiha
  url?: string;
  repo?: string;
  anio: string;
};