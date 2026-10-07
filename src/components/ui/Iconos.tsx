import type { IconoServicio } from "@/lib/types";

const props = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "h-12 w-12",
} as const;

export default function Icono({ nombre }: { nombre: IconoServicio }) {
  switch (nombre) {
    case "codigo":
      return (
        <svg {...props}>
          <path d="M16 14 6 24l10 10M32 14l10 10-10 10M28 9 20 39" />
        </svg>
      );
    case "servidor":
      return (
        <svg {...props}>
          <rect x="7" y="9" width="34" height="12" rx="2" />
          <rect x="7" y="27" width="34" height="12" rx="2" />
          <path d="M13 15h.01M13 33h.01M21 15h14M21 33h14" />
        </svg>
      );
    case "pincel":
      return (
        <svg {...props}>
          <path d="M40 6 22 24M18 26c-5 0-8 3-8 8 0 3-2 5-4 6 6 2 14 1 17-5 1-3 0-6-5-9z" />
          <path d="m24 22 4 4" />
        </svg>
      );
    case "rayo":
      return (
        <svg {...props}>
          <path d="M27 5 10 27h12l-3 16 19-23H26z" />
        </svg>
      );
  }
}