type Props = {
  /** px de desplazamiento horizontal por mouse (negativo = sentido contrario) */
  x?: number;
  /** px de desplazamiento por cada px de scroll */
  y?: number;
  className?: string;
  children?: React.ReactNode;
};

export default function Capa({ x = 0, y = 0, className = "", children }: Props) {
  return (
    <div
      className={`absolute will-change-transform ${className}`}
      style={{
        transform: `translate3d(calc(var(--mx) * ${x}px), calc(var(--sy) * ${y}px), 0)`,
      }}
    >
      {children}
    </div>
  );
}