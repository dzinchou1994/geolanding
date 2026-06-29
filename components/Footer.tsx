import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { MAIN_SITE_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="border-t border-zinc-800 bg-zinc-950 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-zinc-400">
          © 2026 GeoEskort.com — Powered by{" "}
          <Link
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300"
          >
            kama.biz
          </Link>
        </p>
        <p className="mt-4 text-xs leading-relaxed text-zinc-500">
          ესკორტი, escort georgia, эскорт грузия, escort tbilisi, escort batumi,
          escort kutaisi, ესკორტ გოგოები, эскорт тбилиси, эскорт батуми
        </p>
      </div>
    </footer>
  );
}

export function CTABanner() {
  return (
    <section
      aria-label="Call to action"
      className="bg-zinc-900 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-georgian text-2xl font-bold text-amber-400 sm:text-3xl md:text-4xl">
          კამა.ჯი — საქართველოს #1 ესკორტ პლატფორმა
        </h2>
        <p className="mt-4 text-lg text-zinc-300">
          #1 эскорт-платформа Грузии — проверенные анкеты
        </p>
        <p className="mt-2 text-zinc-400">
          Georgia&apos;s #1 escort platform — verified profiles
        </p>
        <div className="mt-8">
          <CTAButton className="px-10 py-4 text-lg">
            გადადით kama.biz-ზე / Перейти на kama.biz / Visit kama.biz
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
