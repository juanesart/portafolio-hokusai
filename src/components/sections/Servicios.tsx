import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icono from "@/components/ui/Iconos";
import { servicios } from "@/data/servicios";

export default function Servicios() {
  return (
    <Section id="servicios" numero="一" titulo="Servicios">
      <p className="mb-12 max-w-xl text-lg text-indigo/80">
        Cuatro vistas de mi trabajo: de la interfaz que ves al servidor que no ves.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2">
        {servicios.map((s, i) => (
          <li key={s.numero}>
            <Reveal delay={i * 100}>
              <article
                tabIndex={0}
                className="group relative overflow-hidden border-2 border-indigo bg-espuma/70
                  p-1.5 outline-none focus-visible:ring-4 focus-visible:ring-sello/50"
              >
                {/* Marco interior */}
                <div className="relative h-full overflow-hidden border border-indigo/40 p-7">
                  {/* Ola que sube */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[140%] translate-y-[105%]
                      transition-transform duration-700 ease-out
                      group-hover:translate-y-[-12%] group-focus-visible:translate-y-[-12%]
                      motion-reduce:transition-none"
                  >
                    <svg
                      viewBox="0 0 400 40"
                      preserveAspectRatio="none"
                      className="block h-8 w-full text-indigo"
                    >
                      <path
                        fill="currentColor"
                        d="M0 40V22c33-24 67-24 100 0s67 24 100 0 67-24 100 0 67 24 100 0v18z"
                      />
                    </svg>
                    <div className="seigaiha -mt-px h-full" />
                  </div>

                  {/* Contenido */}
                  <div className="relative transition-colors duration-500 group-hover:text-papel group-focus-visible:text-papel">
                    <div className="flex items-start justify-between">
                      <Icono nombre={s.icono} />
                      <span className="font-pincel text-4xl text-sello transition-colors group-hover:text-arena group-focus-visible:text-arena">
                        {s.numero}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold">{s.titulo}</h3>
                    <p className="mt-2 opacity-85">{s.descripcion}</p>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
                      {s.tecnologias.map((t) => (
                        <li
                          key={t}
                          className="border border-current px-2 py-0.5 text-xs font-medium opacity-80"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}