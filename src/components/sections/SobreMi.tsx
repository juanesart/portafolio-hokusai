import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { firmas, stack } from "@/data/firmas";
import { datos } from "@/data/dataPersonal";

export default function SobreMi() {
  return (
    <Section id="sobre-mi" numero="03" titulo="Sobre mí">
      <div className="grid gap-16 md:grid-cols-[1fr_1.1fr]">
        {/* Columna izquierda */}
        <Reveal>
          {/* Foto dentro del sol rojo */}
          <div className="relative mx-auto h-64 w-64 md:mx-0 md:h-72 md:w-72">
            <div className="absolute inset-0 rounded-full bg-sello" aria-hidden />
            <div className="absolute inset-3 overflow-hidden rounded-full border-2 border-papel">
              <Image
                src="/img/perfil.webp"
                alt="Retrato de Tu Nombre"
                fill
                sizes="288px"
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-10 max-w-md text-lg leading-relaxed">
            {datos.descripcion}
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-indigo/80">
            Escribe aquí un par de frases sobre ti: dónde vives, qué te mueve y qué tipo de
            proyectos buscas.
          </p>

          {/* Stack como colofón */}
          <dl className="mt-10 max-w-md space-y-4 border-t-2 border-indigo pt-6">
            {stack.map((g) => (
              <div key={g.grupo} className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="font-pincel text-sm tracking-widest text-sello">
                  {g.grupo.toUpperCase()}
                </dt>
                <dd className="text-sm">{g.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Columna derecha: línea de tiempo */}
        <div>
          <Reveal>
            <p className="mb-10 max-w-md text-indigo/80">
              Hokusai cambió de nombre más de treinta veces, y cada firma marcaba una etapa
              nueva. Esta es la historia de mis firmas.
            </p>
          </Reveal>

          <ol className="relative ml-3 border-l-2 border-indigo/70 pl-10">
            {firmas.map((f, i) => (
              <li key={f.nombre} className="relative pb-12 last:pb-0">
                <Reveal delay={i * 100}>
                  {/* Sello de la etapa */}
                  <span
                    aria-hidden
                    className="absolute left-[-3.15rem] top-1 flex h-6 w-6 items-center justify-center
                      rounded-sm bg-sello font-pincel text-xs text-papel"
                  >
                    {i + 1}
                  </span>

                  <p className="font-pincel text-lg text-ola">{f.periodo}</p>
                  <h3 className="mt-1 text-2xl font-bold">{f.nombre}</h3>
                  <p className="mt-2 max-w-sm text-indigo/80">{f.descripcion}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}