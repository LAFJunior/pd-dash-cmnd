interface AIIconProps {
  className?: string;
  size?: number;
}

export const AIIcon = ({ className = "", size = 32 }: AIIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="250" cy="250" r="240" fill="#1a1a1a" />
      <path
        d="M250 100C166.67 100 100 166.67 100 250C100 333.33 166.67 400 250 400C333.33 400 400 333.33 400 250C400 166.67 333.33 100 250 100Z"
        fill="url(#gradient1)"
      />
      <circle cx="200" cy="220" r="15" fill="white" />
      <circle cx="300" cy="220" r="15" fill="white" />
      <path
        d="M180 280C180 280 200 310 250 310C300 310 320 280 320 280"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="gradient1" x1="100" y1="100" x2="400" y2="400">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
};
