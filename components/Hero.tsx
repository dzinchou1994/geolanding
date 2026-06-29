import CTAButton from "@/components/CTAButton";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-[85vh] items-center justify-center bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="font-georgian text-4xl font-bold leading-tight text-amber-400 sm:text-5xl md:text-6xl lg:text-7xl">
          ესკორტი საქართველოში
        </h1>
        <p className="mt-6 text-xl text-zinc-300 sm:text-2xl">
          Эскорт в Грузии — Тбилиси, Батуми, Кутаиси
        </p>
        <p className="mt-3 text-lg text-zinc-400 sm:text-xl">
          Premium Escort Georgia — Tbilisi | Batumi | Kutaisi
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <CTAButton className="px-8 py-4 text-base sm:text-lg">
            იხილეთ განცხადებები / Смотреть анкеты / View Profiles
          </CTAButton>
          <CTAButton
            variant="pink"
            className="px-8 py-3 text-base sm:text-lg"
          >
            საიტზე შესვლა | To the site
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
