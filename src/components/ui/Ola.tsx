// Onda periódica: 8 tramos de 180 unidades (periodo 360). El SVG mide 200% del
// contenedor y se desplaza -50%, que equivale justo a dos periodos: el bucle
// no tiene salto visible.
const ONDA = "M0 120q90-80 180 0t180 0t180 0t180 0t180 0t180 0t180 0t180 0";

type Props = {
  /** Clase de color literal, p. ej. "text-ola/40" */
  color: string;
  /** Segundos que tarda en dar la vuelta */
  duracion: number;
  inverso?: boolean;
  /** Línea de espuma en la cresta */
  cresta?: boolean;
};

export default function Ola({ color, duracion, inverso = false, cresta = false }: Props) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden
      className={`h-full w-[200%] animate-deriva ${color}`}
      style={{
        animationDuration: `${duracion}s`,
        animationDirection: inverso ? "reverse" : "normal",
      }}
    >
      <path className="fill-current" d={`${ONDA}V320H0Z`} />
      {cresta && (
        <path
          d={ONDA}
          className="fill-none stroke-espuma"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity=".7"
        />
      )}
    </svg>
  );
}