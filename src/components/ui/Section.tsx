type Props = {
  id: string;
  numero: string;
  titulo: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, numero, titulo, children, className = "" }: Props) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-24 ${className}`}>
      <header className="mb-12 flex items-baseline gap-4">
        <span className="font-pincel text-5xl text-sello">{numero}</span>
        <h2 className="text-4xl font-bold md:text-5xl">{titulo}</h2>
      </header>
      {children}
    </section>
  );
}