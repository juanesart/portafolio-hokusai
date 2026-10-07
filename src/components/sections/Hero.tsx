"use client";

import { useRef } from "react";
import Capa from "@/components/ui/Capa";
import Fuji from "@/components/ui/Fuji";
import Ola from "@/components/ui/Ola";
import Hanko from "@/components/ui/Hanko";
import { datos } from "@/data/dataPersonal";
import { useParallax } from "@/hooks/useParallax";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  useParallax(ref);

  return (
    <section
      ref={ref}
      id="inicio"
      style={{ "--mx": 0, "--sy": 0 } as React.CSSProperties}
      className="relative min-h-svh overflow-hidden bg-linear-to-b from-papel from-55% to-arena/70"
    >
      {/* ESCENA (decorativa) */}
      <div aria-hidden className="absolute inset-0">
        {/* Sol */}
        <Capa x={-4} y={0.04} className="right-[16%] top-[14%]">
          <div className="h-24 w-24 rounded-full bg-sello md:h-40 md:w-40" />
        </Capa>

        {/* Fuji */}
        <Capa x={-8} y={0.08} className="inset-x-0 bottom-[26svh] flex justify-center md:justify-end md:pr-[8%]">
          <Fuji className="w-[min(125vw,820px)]" />
        </Capa>

        {/* Bandas de neblina */}
        <Capa x={-14} y={0.12} className="inset-x-0 bottom-[34svh] h-24">
          <div className="animate-nube">
            <div className="absolute left-[8%] top-2 h-3 w-[34%] rounded-full bg-espuma/70" />
            <div className="absolute left-[46%] top-9 h-3 w-[40%] rounded-full bg-espuma/60" />
            <div className="absolute left-[18%] top-16 h-2.5 w-[26%] rounded-full bg-espuma/50" />
          </div>
        </Capa>

        {/* Olas */}
        <div className="absolute inset-x-0 bottom-0 h-[46svh]">
          <Capa x={-10} y={0.16} className="-inset-x-10 bottom-[34%] h-[60%]">
            <Ola color="text-ola/40" duracion={70} />
          </Capa>
          <Capa x={-18} y={0.24} className="-inset-x-10 bottom-[22%] h-[60%]">
            <Ola color="text-ola/70" duracion={52} inverso />
          </Capa>
          <Capa x={-28} y={0.34} className="-inset-x-10 bottom-[10%] h-[60%]">
            <Ola color="text-indigo/85" duracion={40} cresta />
          </Capa>
          <Capa x={-40} y={0.46} className="-inset-x-10 bottom-[-2%] h-[60%]">
            <Ola color="text-indigo" duracion={30} inverso cresta />
          </Capa>
          {/* Ola de papel: enlaza con la sección siguiente */}
          <Capa className="-inset-x-10 -bottom-px h-[22%]">
            <Ola color="text-papel" duracion={24} />
          </Capa>
        </div>
      </div>

      {/* CONTENIDO */}
      <div
        className="relative z-10 mx-auto flex min-h-svh max-w-6xl items-center px-6 pb-[34svh] pt-28 md:pb-[26svh]"
        style={{
          transform: "translate3d(0, calc(var(--sy) * -0.2px), 0)",
          opacity: "calc(1 - var(--sy) / 650)",
        }}
      >
        <div>
          <p className="font-pincel text-xl text-ola">{datos.trabajo}</p>
          <h1 className="mt-2 text-6xl font-extrabold leading-tight md:text-8xl">
            {datos.nombre}
          </h1>
          <p className="mt-6 max-w-md text-lg">
            {datos.baner}
          </p>
          <Hanko href="#trabajos" texto="Ver trabajos" className="mt-10" />
        </div>
      </div>

      {/* Texto vertical al estilo japonés */}
      <span
        aria-hidden
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 font-pincel text-sm
          tracking-[0.4em] [writing-mode:vertical-rl] md:block"
      >
        FRONTEND · BACKEND · DISEÑO
      </span>
    </section>
  );
}