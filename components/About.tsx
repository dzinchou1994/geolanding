import Link from "next/link";
import { MAIN_SITE_URL } from "@/lib/site";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="bg-zinc-900/30 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-georgian text-3xl font-bold text-amber-400 sm:text-4xl">
          ესკორტ სერვისი საქართველოში — Escort Service Georgia — Эскорт
          услуги Грузия
        </h2>
        <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
          <p>
            <span className="font-georgian text-white">
              გეოესქორტი
            </span>{" "}
            არის საქართველოს ესკორტ სერვისის საინფორმაციო პორტალი. ჩვენ გთავაზობთ
            ქართული ესკორტის პროფილებს თბილისში, ბათუმსა და ქუთაისში — ინტიმ
            გაცნობა (intim gacnoba) პრემიუმ ხარისხით. Escort service Georgia
            with verified listings for locals and visitors alike.
          </p>
          <p>
            ყველა განცხადება და პროფილი განთავსებულია{" "}
            <Link
              href={MAIN_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 underline decoration-amber-400/50 underline-offset-4 hover:text-amber-300"
            >
              kama.biz
            </Link>{" "}
            პლატფორმაზე — საქართველოს #1 ესკორტ პლატფორმაზე. Эскорт услуги
            Грузия с проверенные анкеты: escort Tbilisi, escort Batumi, escort
            Kutaisi — все в одном месте.
          </p>
          <p>
            Whether you search for ესკორტ გოგოები, эскорт Тбилиси, or premium
            escort Georgia companions,{" "}
            <Link
              href={MAIN_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 underline decoration-amber-400/50 underline-offset-4 hover:text-amber-300"
            >
              kama.biz
            </Link>{" "}
            delivers the most complete and up-to-date selection of profiles
            across the country.
          </p>
        </div>
      </div>
    </section>
  );
}
