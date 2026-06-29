export const SITE_URL = "https://geoeskort.com";
export const MAIN_SITE_URL =
  process.env.NEXT_PUBLIC_MAIN_SITE_URL || "https://kama.biz";

export const SITE_TITLE =
  "გეოესქორტი | ესკორტი საქართველოში | Escort Georgia | Эскорт Грузия | geoeskort.com";

export const SITE_DESCRIPTION =
  "ესკორტი საქართველოში — ესკორტ გოგოები თბილისში, ბათუმსა და ქუთაისში. Escort Georgia, escort Tbilisi, escort Batumi, escort Kutaisi. Эскорт Грузия, эскорт Тбилиси, эскорт Батуми, эскорт Кутаиси. Premium escort service Georgia — verified profiles on kama.biz.";

export const SITE_KEYWORDS = [
  "ესკორტი",
  "ესკორტ გოგოები",
  "ესკორტი საქართველოში",
  "ქართული ესკორტი",
  "ესკორტ სერვისი",
  "ინტიმ გაცნობა",
  "escort georgia",
  "escort tbilisi",
  "escort batumi",
  "escort kutaisi",
  "escort service georgia",
  "escort girls georgia",
  "эскорт грузия",
  "эскорт тбилиси",
  "эскорт батуми",
  "эскорт кутаиси",
  "эскорт услуги грузия",
  "geoeskort",
  "geoeskort.com",
  "kama.biz",
].join(", ");

export const CITIES = [
  {
    id: "tbilisi",
    nameKa: "თბილისი",
    nameRu: "Тбилиси",
    nameEn: "Tbilisi",
    descriptionKa:
      "თბილისი — საქართველოს დედაქალაქი და უდიდესი არჩევანი ესკორტ გოგოების პროფილებით. ესკორტი თბილისში — ყველაზე ფართო კატალოგი.",
    descriptionRu:
      "Тбилиси — столица Грузии с самым большим выбором анкет эскортниц. Эскорт Тбилиси — проверенные профили для гостей и жителей города.",
    descriptionEn:
      "Tbilisi is Georgia's capital with the largest selection of escort profiles. Escort Tbilisi offers premium companions across the city.",
    address: "Tbilisi, Georgia",
    lat: 41.6938,
    lng: 44.8015,
  },
  {
    id: "batumi",
    nameKa: "ბათუმი",
    nameRu: "Батуми",
    nameEn: "Batumi",
    descriptionKa:
      "ბათუმი — საზღვაო კურორტი, სადაც პოპულარულია ესკორტი ბათუმში ტურისტებისთვის. ზფზუნის ქალაქი პრემიუმ ესკორტ სერვისით.",
    descriptionRu:
      "Батуми — приморский курорт, популярный для эскорт Батуми среди туристов. Морской город с премиальным эскорт-сервисом.",
    descriptionEn:
      "Batumi is a seaside resort city popular for escort Batumi services. A vibrant coastal destination with premium escort profiles.",
    address: "Batumi, Georgia",
    lat: 41.6168,
    lng: 41.6367,
  },
  {
    id: "kutaisi",
    nameKa: "ქუთაისი",
    nameRu: "Кутаиси",
    nameEn: "Kutaisi",
    descriptionKa:
      "ქუთაისი — საქართველოს მეორე უდიდესი ქალაქი, სადაც მზარდია ესკორტი ქუთაისში. ყოველდღე ახალი განცხადებები და პროფილები.",
    descriptionRu:
      "Кутаиси — второй по величине город Грузии с растущим выбором эскорт Кутаиси. Новые анкеты и проверенные профили каждый день.",
    descriptionEn:
      "Kutaisi is Georgia's second largest city with a growing escort Kutaisi selection. Fresh profiles and verified listings daily.",
    address: "Kutaisi, Georgia",
    lat: 42.2679,
    lng: 42.7181,
  },
] as const;
