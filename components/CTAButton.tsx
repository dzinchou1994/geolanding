import Link from "next/link";
import { MAIN_SITE_URL } from "@/lib/site";

type CTAButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "pink";
};

export default function CTAButton({
  children,
  className = "",
  variant = "primary",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all duration-200 sm:text-base";

  const variantStyles = {
    primary:
      "bg-amber-400 text-zinc-950 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20",
    secondary:
      "border border-amber-400/60 text-amber-400 hover:bg-amber-400/10",
    pink: "bg-rose-400/90 text-white hover:bg-rose-300 hover:shadow-lg hover:shadow-rose-400/20",
  }[variant];

  return (
    <Link
      href={MAIN_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </Link>
  );
}
