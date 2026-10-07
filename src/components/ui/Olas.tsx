export default function Olas({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={className} aria-hidden>
      <path fill="#2F5D8A" opacity=".5"
        d="M0 200c120-60 240-60 360 0s240 60 360 0 240-60 360 0 240 60 360 0v120H0z" />
      <path fill="#0B2A4A"
        d="M0 250c160-50 280-50 440 0s280 50 440 0 280-50 560 0v70H0z" />
    </svg>
  );
}