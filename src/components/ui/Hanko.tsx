type Props = React.ComponentProps<"a"> & { texto: string };

export default function Hanko({ texto, className = "", ...props }: Props) {
  return (
    <a
      {...props}
      className={`inline-flex h-20 w-20 items-center justify-center rounded-sm bg-sello
        font-pincel text-center text-lg leading-tight text-papel shadow-md
        transition-transform hover:-rotate-3 hover:scale-105 ${className}`}
    >
      {texto}
    </a>
  );
}