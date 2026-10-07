export default function Cartucho({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-block border-2 border-indigo bg-espuma px-3 py-1.5 shadow-[3px_3px_0_0] shadow-indigo/30 ${className}`}
    >
      {children}
    </div>
  );
}