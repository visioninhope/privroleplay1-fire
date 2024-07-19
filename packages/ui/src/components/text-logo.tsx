import Image from 'next/image';

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
      <Image
        src="/LogoSVG-32x32.svg"
        alt="Theta Space Logo"
        width={32}
        height={32}
        className="h-8 w-8 sm:hidden"
      />
      <Image
        src="/LogoSVG-250x50.svg"
        alt="Theta Space Logo"
        width={250}
        height={50}
        className="hidden h-8 w-auto sm:block"
      />
      {isPlus && <span className="ml-1 font-medium">+</span>}
    </span>
  );
}