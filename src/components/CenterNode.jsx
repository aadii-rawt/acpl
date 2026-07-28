
export default function CenterNode() {
  return (
    <div className="relative flex items-center justify-center w-36 h-36">

      {/* Ripple 1 */}
      <span className="absolute w-28 h-28 rounded-full bg-red-600/30 animate-ripple animation-delay-0"></span>

      {/* Ripple 2 */}
      <span className="absolute w-28 h-28 rounded-full bg-red-600/25 animate-ripple animation-delay-700"></span>

      {/* Ripple 3 */}
      <span className="absolute w-28 h-28 rounded-full bg-red-600/20 animate-ripple animation-delay-1400"></span>

      {/* Ripple 4 */}
      <span className="absolute w-28 h-28 rounded-full bg-red-600/15 animate-ripple animation-delay-2100"></span>

      {/* Logo */}
      <img
        src="/acpllogo2.png"
        alt=""
        className="relative z-9999 "
      />

    </div>
  );
}