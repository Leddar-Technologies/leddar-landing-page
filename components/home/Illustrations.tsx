type SvgProps = {
  className?: string;
};

export function CalendarIllustration({ className }: SvgProps) {
  const cells = Array.from({ length: 7 * 4 }, (_, idx) => {
    const c = idx % 7;
    const r = Math.floor(idx / 7);
    const fill = (idx + c + r) % 2 === 0 ? "#E8A85A" : "#F5D8A0";
    return (
      <rect
        key={`cell-${idx}`}
        x={68 + c * 26}
        y={96 + r * 30}
        width="18"
        height="18"
        rx="4"
        fill={fill}
        opacity="0.8"
      />
    );
  });

  return (
    <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="40" y="50" width="220" height="200" rx="20" fill="#E8B87A" opacity="0.9" />
      <rect x="52" y="80" width="196" height="156" rx="12" fill="#F2C98A" />
      <rect x="40" y="50" width="220" height="44" rx="20" fill="#C9922A" />
      <rect x="52" y="50" width="220" height="24" fill="#C9922A" />
      <circle cx="80" cy="72" r="8" fill="#FFE08A" />
      <circle cx="220" cy="72" r="8" fill="#FFE08A" />
      {cells}
      <circle cx="220" cy="160" r="40" fill="#FF6B6B" opacity="0.85" />
      <text x="220" y="167" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
        X
      </text>
      <circle cx="280" cy="80" r="14" fill="#4ECDC4" opacity="0.9" />
      <rect x="20" y="200" width="28" height="28" rx="6" fill="#FFE66D" opacity="0.9" transform="rotate(15 34 214)" />
      <circle cx="50" cy="120" r="10" fill="#F5A623" opacity="0.8" />
      <rect x="270" y="220" width="24" height="24" rx="5" fill="#A8E6CF" opacity="0.9" transform="rotate(-10 282 232)" />
    </svg>
  );
}

export function LockIllustration({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="60" y="160" width="220" height="160" rx="20" fill="url(#lockGrad)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={`top-${i}`} x={90 + i * 46} y={200} width="32" height="32" rx="8" fill="white" opacity="0.9" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={`bot-${i}`} x={90 + i * 46} y={248} width="32" height="32" rx="8" fill="white" opacity="0.9" />
      ))}
      <path d="M110 160 C110 100 230 100 230 160" stroke="#FFD700" strokeWidth="28" fill="none" strokeLinecap="round" />
      <rect x="97" y="130" width="26" height="50" rx="6" fill="#FFB800" />
      <rect x="217" y="130" width="26" height="50" rx="6" fill="#FFB800" />
      <circle cx="290" cy="120" r="16" fill="#4ECDC4" opacity="0.9" />
      <rect x="20" y="180" width="26" height="26" rx="6" fill="#FFE66D" opacity="0.9" transform="rotate(-12 33 193)" />
      <circle cx="60" cy="260" r="10" fill="#FF6B6B" opacity="0.8" />
      <rect x="280" y="260" width="22" height="22" rx="5" fill="#A8E6CF" opacity="0.9" transform="rotate(10 291 271)" />
      <circle cx="300" cy="200" r="8" fill="#F5A623" opacity="0.9" />
      <defs>
        <linearGradient id="lockGrad" x1="60" y1="160" x2="280" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DrillIllustration({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="60" y="100" width="120" height="70" rx="14" fill="#2D2D2D" />
      <rect x="160" y="115" width="60" height="12" rx="6" fill="#555" />
      <rect x="180" y="112" width="40" height="18" rx="5" fill="#888" />
      <rect x="75" y="170" width="90" height="50" rx="10" fill="#222" />
      <circle cx="120" cy="135" r="22" fill="#444" />
      <circle cx="120" cy="135" r="14" fill="#333" />
      <circle cx="120" cy="135" r="6" fill="#666" />
      <rect x="90" y="195" width="60" height="8" rx="4" fill="#F5A623" />
      <rect x="95" y="208" width="50" height="6" rx="3" fill="#C9922A" />
    </svg>
  );
}

export function RollerIllustration({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="30" y="60" width="140" height="60" rx="30" fill="#D4D4D4" />
      <rect x="40" y="68" width="120" height="44" rx="22" fill="#BFBFBF" />
      <line x1="100" y1="120" x2="100" y2="240" stroke="#888" strokeWidth="8" strokeLinecap="round" />
      <line x1="100" y1="240" x2="40" y2="280" stroke="#888" strokeWidth="8" strokeLinecap="round" />
      <rect x="30" y="62" width="140" height="8" rx="4" fill="#F5A623" opacity="0.4" />
      <rect x="30" y="74" width="140" height="8" rx="4" fill="#F5A623" opacity="0.3" />
      <rect x="30" y="86" width="140" height="8" rx="4" fill="#F5A623" opacity="0.4" />
      <rect x="30" y="98" width="140" height="8" rx="4" fill="#F5A623" opacity="0.3" />
      <rect x="30" y="108" width="140" height="8" rx="4" fill="#F5A623" opacity="0.4" />
    </svg>
  );
}
