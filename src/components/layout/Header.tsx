"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/nav";
import { datos } from "@/data/dataPersonal";

function useSeccionActiva(ids: readonly string[]) {
  const [activa, setActiva] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiva(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return activa;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const activa = useSeccionActiva(nav.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll y cierra con Escape cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [abierto]);

    return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          abierto
            ? "bg-transparent py-3"
            : scrolled
              ? "border-b border-indigo/20 bg-papel/85 py-3 backdrop-blur-md"
              : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo: hanko */}
          <a
            href="#inicio"
            onClick={() => setAbierto(false)}
            className="group flex items-center gap-3"
            aria-label="Ir al inicio"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-sello
              font-pincel text-xl text-papel shadow transition-transform group-hover:-rotate-6">
              T
            </span>
            <span
              className={`hidden font-display text-lg font-bold sm:block ${
                abierto ? "text-papel md:text-indigo" : ""
              }`}
            >
              Tu Nombre
            </span>
          </a>

          {/* Navegación escritorio */}
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activa === item.id ? "true" : undefined}
                    className="group relative flex items-baseline gap-1.5 py-1 text-sm font-medium"
                  >
                    <span className="font-pincel text-xs text-sello">{item.numero}</span>
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full
                        bg-indigo transition-transform duration-300 ${
                          activa === item.id
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón móvil */}
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-0.5 w-6 transition-all ${abierto ? "translate-y-2 rotate-45 bg-papel" : "bg-indigo"}`} />
            <span className={`h-0.5 w-6 transition-opacity ${abierto ? "opacity-0" : "bg-indigo"}`} />
            <span className={`h-0.5 w-6 transition-all ${abierto ? "-translate-y-2 -rotate-45 bg-papel" : "bg-indigo"}`} />
          </button>
        </div>
      </header>

      {/* Menú móvil: hermano del header, no hijo */}
      <div
        id="menu-movil"
        inert={!abierto}
        className={`seigaiha fixed inset-0 z-40 flex flex-col items-center justify-center
          transition-opacity duration-300 md:hidden ${
            abierto ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <div className="absolute inset-0 bg-indigo/70" aria-hidden />
        <ul className="relative space-y-8 text-center">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setAbierto(false)}
                className="block font-display text-4xl font-bold text-papel"
              >
                <span className="mr-3 font-pincel text-xl text-arena">{item.numero}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}