import Image from "next/image";

export function JagaLogo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Image
      src="/images/jaga-logo-transparent.png"
      alt="Jaga.Care"
      width={906}
      height={586}
      className={`h-14 md:h-[72px] w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
      priority
    />
  );
}
