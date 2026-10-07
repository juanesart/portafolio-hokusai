import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Cartucho from "@/components/ui/Cartucho";
import { trabajos } from "@/data/trabajos";

// Anchos y desfases alternados (clases literales para que Tailwind las detecte)
const layout = [
  "md:col-span-7",
  "md:col-span-5 md:mt-16",
  "md:col-span-5",
  "md:col-span-7 md:mt-16",
];

export default function Trabajos() {
  return (
    <Section id="trabajos" numero="02" titulo="Trabajos">
      <p className="mb-12 max-w-xl text-lg text-indigo/80">
        Una selección de proyectos, presentados como un álbum de estampas.
      </p>

      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-12">
        {trabajos.map((t, i) => {
          const enlacePrincipal = t.url ?? t.repo;

          return (
            <li key={t.slug} className={layout[i % layout.length]}>
              <Reveal delay={(i % 2) * 120}>
                <article className="group">
                  {/* Estampa */}
                  <div className="relative border-2 border-indigo bg-espuma p-1.5">
                    <div className="relative aspect-[4/3] overflow-hidden border border-indigo/40">
                      {t.imagen ? (
                        <Image
                          src={t.imagen}
                          alt={`Captura del proyecto ${t.titulo}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                        />
                      ) : (
                        <div className="seigaiha relative h-full w-full">
                          <div className="absolute right-[18%] top-[18%] h-16 w-16 rounded-full bg-sello" />
                        </div>
                      )}

                      {/* Ola que revela */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-[140%]
                          translate-y-[105%] transition-transform duration-700 ease-out
                          group-hover:translate-y-[-12%] group-focus-within:translate-y-[-12%]
                          motion-reduce:transition-none"
                      >
                        <svg
                          viewBox="0 0 400 40"
                          preserveAspectRatio="none"
                          className="block h-10 w-full text-indigo/90"
                        >
                          <path
                            fill="currentColor"
                            d="M0 40V22c33-24 67-24 100 0s67 24 100 0 67-24 100 0 67 24 100 0v18z"
                          />
                        </svg>
                        <div className="-mt-px flex h-full justify-center bg-indigo/90 pt-[14%]">
                          <span className="font-pincel text-2xl text-papel">
                            {enlacePrincipal ? "Ver proyecto →" : "Próximamente"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Número de la estampa, como el sello del editor */}
                    <span
                      aria-hidden
                      className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center
                        rounded-sm bg-sello font-pincel text-papel shadow"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Cartucho y datos */}
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <Cartucho>
                      <h3 className="text-xl font-bold">
                        {enlacePrincipal ? (
                          <a
                            href={enlacePrincipal}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="outline-none after:absolute after:inset-0 focus-visible:underline"
                          >
                            {t.titulo}
                          </a>
                        ) : (
                          t.titulo
                        )}
                      </h3>
                    </Cartucho>
                    <span className="font-pincel text-lg text-ola">{t.anio}</span>
                  </div>

                  <p className="mt-3 max-w-md text-indigo/80">{t.descripcion}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
                    {t.stack.map((tec) => (
                      <li
                        key={tec}
                        className="rounded-sm bg-sello/10 px-2 py-0.5 text-xs font-medium text-sello ring-1 ring-sello/40"
                      >
                        {tec}
                      </li>
                    ))}
                  </ul>

                  {(t.url || t.repo) && (
                    <p className="mt-4 flex gap-5 text-sm font-medium">
                      {t.url && (
                        <a href={t.url} target="_blank" rel="noopener noreferrer" className="relative z-10 underline decoration-sello decoration-2 underline-offset-4 hover:text-sello">
                          Sitio ↗
                        </a>
                      )}
                      {t.repo && (
                        <a href={t.repo} target="_blank" rel="noopener noreferrer" className="relative z-10 underline decoration-sello decoration-2 underline-offset-4 hover:text-sello">
                          Código ↗
                        </a>
                      )}
                    </p>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}