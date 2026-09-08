type LogoVariant = "horizontal" | "vertical" | "symbol";

const logos = {
  horizontal: {
    src: "/brand/alfa-logo-horizontal.png",
    width: 688,
    height: 166,
  },
  vertical: {
    src: "/brand/alfa-logo-vertical.png",
    width: 717,
    height: 665,
  },
  symbol: {
    src: "/brand/alfa-symbol.png",
    width: 562,
    height: 357,
  },
} as const;

export function OfficialLogo({
  variant = "horizontal",
  className = "",
  decorative = false,
}: {
  variant?: LogoVariant;
  className?: string;
  decorative?: boolean;
}) {
  const logo = logos[variant];
  return (
    // The supplied official artwork is local, optimized and dimensioned explicitly.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`official-logo official-logo-${variant} ${className}`.trim()}
      src={logo.src}
      width={logo.width}
      height={logo.height}
      alt={decorative ? "" : "Alfa Engenharia"}
      decoding="async"
    />
  );
}
