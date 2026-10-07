import { nav, redes } from "@/lib/nav";
import { datos } from "@/data/dataPersonal";
import AnioActual from "./AnioActual";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-indigo text-papel">
      {/* Ola de transición */}
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute inset-x-0 top-0 h-20 w-full translate-y-[-99%] text-indigo md:h-32"
      >
        <path
          fill="currentColor"
          d="M0 140V80c80-40 160-40 240 0s160 40 240 0 160-40 240 0 160 40 240 0 160-40 240 0 160 40 240 0v60z"
        />
        <path
          fill="currentColor"
          opacity=".45"
          d="M0 90c120-60 240-60 360 0s240 60 360 0 240-60 360 0 240 60 360 0V0H0z"
          transform="translate(0 -10)"
        />
      </svg>

      {/* Patrón seigaiha sutil */}
      <div className="seigaiha pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <p className="font-display text-4xl font-extrabold md:text-5xl">{datos.nombre}</p>
            <p className="mt-3 max-w-xs text-papel/70">
              {datos.trabajo}. {datos.baner}
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Pie de página">
            <h2 className="font-pincel text-sm tracking-widest text-arena">MAPA</h2>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="transition-colors hover:text-arena">
                    <span className="mr-2 font-pincel text-xs text-sello">{item.numero}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div>
            <h2 className="font-pincel text-sm tracking-widest text-arena">ENLACES</h2>
            <ul className="mt-4 space-y-2">
              {redes.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-arena"
                  >
                    {r.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-papel/15 pt-6 sm:flex-row">
          <p className="text-sm text-papel/60">
            © <AnioActual /> {datos.nombre}. Inspirado en Katsushika Hokusai (1760–1849).
          </p>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="flex h-12 w-12 items-center justify-center rounded-sm bg-sello font-pincel
              text-papel shadow transition-transform hover:-translate-y-1 hover:rotate-3"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}