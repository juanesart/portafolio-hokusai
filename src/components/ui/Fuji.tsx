export default function Fuji({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" aria-hidden className={className}>
      {/* Cuerpo */}
      <path
        className="fill-ola"
        d="M0 300C150 270 250 170 330 100C355 82 362 70 372 66L428 66C438 70 445 82 470 100C550 170 650 270 800 300Z"
      />
      {/* Barrancos */}
      <path className="fill-none stroke-indigo/30" strokeWidth="3" strokeLinecap="round"
        d="M395 130C390 190 375 245 350 300M432 135C445 200 475 252 510 300M355 170C335 220 300 265 250 300" />
      {/* Casquete de nieve con bordes irregulares */}
      <path
        className="fill-espuma"
        d="M330 100C355 82 362 70 372 66L428 66C438 70 445 82 470 100L455 118L440 104L425 130L408 106L392 126L376 104L360 120L345 104Z"
      />
    </svg>
  );
}