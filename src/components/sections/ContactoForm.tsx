"use client";

import { useActionState } from "react";
import { enviarContacto, estadoInicial, type CampoContacto } from "@/app/actions";

const campo =
  "w-full border-0 border-b-2 border-indigo/60 bg-transparent px-1 py-2 text-lg outline-none " +
  "transition-colors placeholder:text-indigo/40 focus:border-sello aria-[invalid=true]:border-sello";

export default function ContactoForm() {
  const [estado, accion, enviando] = useActionState(enviarContacto, estadoInicial);

  if (estado.ok) {
    return (
      <div role="status" className="flex flex-col items-center py-10 text-center">
        <div
          className="flex h-32 w-32 animate-estampar items-center justify-center rounded-sm
            bg-sello font-pincel text-3xl leading-tight text-papel shadow-lg"
        >
          送信
          <span className="sr-only">Enviado</span>
        </div>
        <p className="mt-8 text-2xl font-bold">{estado.mensaje}</p>
        <p className="mt-2 text-indigo/80">Te responderé lo antes posible.</p>
      </div>
    );
  }

  const error = (c: CampoContacto) => estado.errores?.[c];

  return (
    <form action={accion} noValidate className="space-y-8">
      {/* Campo trampa anti-bots, oculto para personas */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>
          No rellenar
          <input type="text" name="sitio" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {(["nombre", "correo"] as const).map((c) => (
        <div key={c}>
          <label htmlFor={c} className="font-pincel text-sm tracking-widest text-sello">
            {c === "nombre" ? "NOMBRE" : "CORREO"}
          </label>
          <input
            id={c}
            name={c}
            type={c === "correo" ? "email" : "text"}
            autoComplete={c === "correo" ? "email" : "name"}
            defaultValue={estado.valores?.[c]}
            aria-invalid={!!error(c)}
            aria-describedby={error(c) ? `${c}-error` : undefined}
            className={campo}
            placeholder={c === "nombre" ? "Tu nombre" : "tu@correo.com"}
          />
          {error(c) && (
            <p id={`${c}-error`} className="mt-1 text-sm font-medium text-sello">
              {error(c)}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="mensaje" className="font-pincel text-sm tracking-widest text-sello">
          MENSAJE
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          defaultValue={estado.valores?.mensaje}
          aria-invalid={!!error("mensaje")}
          aria-describedby={error("mensaje") ? "mensaje-error" : undefined}
          className={`${campo} resize-none`}
          placeholder="Cuéntame sobre tu proyecto…"
        />
        {error("mensaje") && (
          <p id="mensaje-error" className="mt-1 text-sm font-medium text-sello">
            {error("mensaje")}
          </p>
        )}
      </div>

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={enviando}
          className="flex h-24 w-24 items-center justify-center rounded-sm bg-sello font-pincel
            text-xl text-papel shadow-md transition-transform hover:-rotate-3 hover:scale-105
            focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo
            active:scale-95 disabled:cursor-wait disabled:opacity-70"
        >
          {enviando ? "…" : "Enviar"}
        </button>

        {estado.mensaje && !estado.errores && (
          <p role="alert" className="text-sm font-medium text-sello">
            {estado.mensaje}
          </p>
        )}
      </div>
    </form>
  );
}