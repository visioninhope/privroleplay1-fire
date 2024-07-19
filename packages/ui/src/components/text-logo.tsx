export default function TextLogo({
  className,
  isPlus,
}: {
  className?: string;
  isPlus?: boolean;
}) {
  return (
    <span
      className={`flex items-center ${className} hover:opacity-50`}
    >
      <img
        src="/LogoSVG-32x32.svg"
        alt="Theta Space Logo"
        className="h-8 w-8 sm:hidden"
      />
      <img
        src="/LogoSVG-250x50.svg"
        alt="Theta Space Logo"
        className="hidden h-8 w-auto sm:block"
      />
      {isPlus && <span className="ml-1 font-medium">+</span>}
    </span>
  );
}
