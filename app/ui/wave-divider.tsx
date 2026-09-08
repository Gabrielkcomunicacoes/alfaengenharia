type Tone = "paper" | "white" | "ink";

// One full cycle, rendered on the server. Decorative geometry needs no client JS.
// Sampling at 120 intervals keeps the curve smooth across large viewports.
export function WaveDivider({
  from,
  to,
  reverse = false,
}: {
  from: Tone;
  to: Tone;
  reverse?: boolean;
}) {
  const curve = Array.from({ length: 121 }, (_, index) => {
    const x = index / 120;
    const y = 50 + (reverse ? 1 : -1) * 43 * Math.sin(x * Math.PI * 2);
    return `${(x * 100).toFixed(3)}% ${y.toFixed(3)}%`;
  }).join(",");

  return (
    <div
      className="wave-divider"
      aria-hidden="true"
      data-wave
      data-wave-from={from}
      data-wave-to={to}
      style={{ backgroundColor: `var(--${to})` }}
    >
      <div className="wave-layer">
        <div
          className="wave-surface"
          style={{
            backgroundColor: `var(--${from})`,
            clipPath: `polygon(0% 0%,100% 0%,${curve.split(",").reverse().join(",")})`,
          }}
        />
      </div>
    </div>
  );
}
