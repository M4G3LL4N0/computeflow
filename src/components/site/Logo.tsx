export default function Logo({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="cf-logo-core" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#cdd9ff" />
          <stop offset="55%" stopColor="#5b8cff" />
          <stop offset="100%" stopColor="#0d1a4a" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="14" fill="url(#cf-logo-core)" />
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#4fd1ff"
        strokeOpacity="0.55"
        strokeWidth="1.4"
      />
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke="#a78bfa"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <circle cx="54" cy="32" r="2.4" fill="#f3c969" />
      <circle cx="10" cy="32" r="2.4" fill="#5af0c0" />
      <circle cx="32" cy="10" r="2.4" fill="#a78bfa" />
      <circle cx="32" cy="54" r="2.4" fill="#4fd1ff" />
    </svg>
  );
}
