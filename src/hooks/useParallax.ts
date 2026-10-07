"use client";

import { useEffect, type RefObject } from "react";

/**
 * Escribe dos variables CSS en el elemento:
 *  --mx: posición horizontal del mouse, de -1 a 1 (suavizada)
 *  --sy: scroll vertical en px (limitado a la altura de la ventana)
 */
export function useParallax(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let objetivo = 0;
    let actual = 0;
    let raf = 0;

    const animar = () => {
      actual += (objetivo - actual) * 0.08;
      el.style.setProperty("--mx", actual.toFixed(3));
      // Se detiene solo cuando alcanza el objetivo (no hay bucle permanente)
      raf = Math.abs(objetivo - actual) > 0.001 ? requestAnimationFrame(animar) : 0;
    };

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      objetivo = (e.clientX / window.innerWidth - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(animar);
    };

    const onScroll = () => {
      el.style.setProperty("--sy", String(Math.min(window.scrollY, window.innerHeight)));
    };

    onScroll();
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ref]);
}