import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ContactoForm from "./ContactoForm";
import { redes } from "@/lib/nav";

export default function Contacto() {
  return (
    <Section id="contacto" numero="04" titulo="Contacto">
      <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="max-w-sm text-xl leading-relaxed">
            ¿Tienes un proyecto, una idea o simplemente quieres saludar? Escríbeme y
            conversamos.
          </p>

          <p className="mt-6 flex items-center gap-3 text-sm font-medium">
            <span className="h-3 w-3 rounded-full bg-sello" aria-hidden />
            Disponible para nuevos proyectos
          </p>

          <ul className="mt-10 space-y-3 border-t-2 border-indigo pt-6">
            {redes.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 text-lg font-medium"
                >
                  <span className="underline decoration-sello decoration-2 underline-offset-4 group-hover:text-sello">
                    {r.label}
                  </span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <div className="border-2 border-indigo bg-espuma/70 p-1.5">
            <div className="border border-indigo/40 p-6 sm:p-10">
              <ContactoForm />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}