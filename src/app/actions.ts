"use server";

import { Resend } from "resend";

export type CampoContacto = "nombre" | "correo" | "mensaje";

export type EstadoContacto = {
  ok: boolean;
  mensaje: string;
  errores?: Partial<Record<CampoContacto, string>>;
  valores?: Record<CampoContacto, string>;
};

export const estadoInicial: EstadoContacto = { ok: false, mensaje: "" };

export async function enviarContacto(
  _previo: EstadoContacto,
  formData: FormData
): Promise<EstadoContacto> {
  // Campo trampa para bots: si viene relleno, fingimos éxito sin enviar nada
  if (formData.get("sitio")) return { ok: true, mensaje: "Mensaje enviado." };

  const valores = {
    nombre: String(formData.get("nombre") ?? "").trim(),
    correo: String(formData.get("correo") ?? "").trim(),
    mensaje: String(formData.get("mensaje") ?? "").trim(),
  };

  const errores: EstadoContacto["errores"] = {};
  if (valores.nombre.length < 2) errores.nombre = "Escribe tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.correo)) errores.correo = "Correo no válido.";
  if (valores.mensaje.length < 10) errores.mensaje = "Cuéntame un poco más (mínimo 10 caracteres).";
  if (valores.mensaje.length > 3000) errores.mensaje = "El mensaje es demasiado largo.";

  if (Object.keys(errores).length > 0) {
    return { ok: false, mensaje: "Revisa los campos marcados.", errores, valores };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destino = process.env.CONTACT_TO;
  if (!apiKey || !destino) {
    console.error("Faltan RESEND_API_KEY o CONTACT_TO");
    return { ok: false, mensaje: "El envío no está configurado todavía.", valores };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>", // usa tu dominio verificado en producción
      to: destino,
      replyTo: valores.correo,
      subject: `Nuevo mensaje de ${valores.nombre}`,
      text: `De: ${valores.nombre} <${valores.correo}>\n\n${valores.mensaje}`,
    });
    if (error) throw error;
    return { ok: true, mensaje: "Mensaje enviado. ¡Gracias!" };
  } catch (e) {
    console.error(e);
    return { ok: false, mensaje: "No se pudo enviar. Inténtalo de nuevo.", valores };
  }
}