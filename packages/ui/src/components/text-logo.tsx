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
        width={64}
        height={64}
        className="h-8 w-8 sm:hidden"
      />
      <Image
        src="/LogoSVG-250x50.svg"
        alt="Theta Space Logo"
        width={500}
        height={100}
        className="hidden h-8 w-auto sm:block"
      />
      {isPlus && <span className="ml-1 font-medium">+</span>}
    </span>
  );
}