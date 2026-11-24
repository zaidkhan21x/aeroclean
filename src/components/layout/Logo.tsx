import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/brand/aero-clean-logo-360.webp";

/**
 * The supplied AERO CLEAN logo, used unmodified (cropped to its own bounds only).
 * It is always placed on a white surface so its original colours are preserved.
 */
export function Logo({ className = "h-14 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center rounded-sm" aria-label="AERO CLEAN — home">
      <Image src={logo} alt="AERO CLEAN" className={className} priority={priority} sizes="120px" />
    </Link>
  );
}
