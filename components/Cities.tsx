import CTAButton from "@/components/CTAButton";
import { CITIES } from "@/lib/site";

export default function Cities() {
  return (
    <section
      id="cities"
      aria-label="Cities"
      className="bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-georgian text-3xl font-bold text-amber-400 sm:text-4xl">
          ესკორტი ქალაქებში / Escort Cities / Эскорт по городам
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => (
            <article
              key={city.id}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-amber-400/30"
            >
              <h3 className="font-georgian text-2xl font-bold text-amber-400">
                {city.nameKa} / {city.nameRu} / {city.nameEn}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {city.descriptionKa} {city.descriptionRu} {city.descriptionEn}
              </p>
              <div className="mt-6">
                <CTAButton variant="secondary" className="w-full">
                  ნახეთ პროფილები / View Profiles
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
