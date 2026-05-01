import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  /** Size variant: 'nav' for header (compact), 'hero' for homepage hero */
  variant?: "nav" | "hero";
  /** Show brand name text next to logo */
  showName?: boolean;
};

export function BrandLogo({ variant = "nav", showName = true }: BrandLogoProps) {
  const isNav = variant === "nav";

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${isNav ? "flex-shrink-0" : ""}`}
      aria-label="InkFusionLabs home"
    >
      <span className={`relative flex-shrink-0 ${isNav ? "h-8 w-8 md:h-10 md:w-10" : "h-24 w-24 md:h-32 md:w-32"}`}>
        <Image
          src="/assets/brand/inkfusionlabs-logo-dark.png"
          alt="InkFusionLabs logo"
          fill
          className="object-contain"
          priority={!isNav}
          sizes={isNav ? "40px" : "(max-width: 768px) 96px, 128px"}
        />
      </span>
      {showName && (
        <span className="text-xl font-bold text-white">InkFusionLabs</span>
      )}
    </Link>
  );
}
