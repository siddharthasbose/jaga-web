export interface Guide {
  slug_en: string;
  slug_ms: string;
  title_en: string;
  title_ms: string;
  summary_en: string;
  summary_ms: string;
  read_time_min: number;
  image_alt_en: string;
  image_alt_ms: string;
  /** A primary stat hook used in the page — for the hub card. */
  hook_en: string;
  hook_ms: string;
  /** Topic tag, used for "related" matching. */
  topic: "discharge" | "bathroom-safety" | "stroke";
}

export const guides: Guide[] = [
  {
    slug_en: "hospital-discharge-checklist",
    slug_ms: "senarai-semak-keluar-hospital",
    title_en: "Hospital discharge checklist",
    title_ms: "Senarai semak keluar hospital",
    summary_en:
      "What to prepare at home before your parent leaves hospital — medication lists, mobility assessments, equipment, and Singapore-specific resources.",
    summary_ms:
      "Apa yang perlu disediakan di rumah sebelum ibu bapa anda keluar dari hospital — senarai ubat, penilaian mobiliti, peralatan, dan sumber khusus Singapura.",
    read_time_min: 6,
    image_alt_en: "Caregiver helping elderly parent at hospital",
    image_alt_ms: "Penjaga membantu ibu bapa warga emas di hospital",
    hook_en: "Only 66% of caregivers feel prepared at discharge.",
    hook_ms: "Hanya 66% penjaga berasa bersedia ketika keluar hospital.",
    topic: "discharge",
  },
  {
    slug_en: "grab-bar-installation-malaysia",
    slug_ms: "pemasangan-palang-pegangan-malaysia",
    title_en: "Grab bar installation in Malaysia",
    title_ms: "Pemasangan palang pegangan di Malaysia",
    summary_en:
      "Where to put grab bars, what materials to use, and why professional installation matters. ADA + Singapore BCA standards explained for Malaysian homes.",
    summary_ms:
      "Di mana hendak pasang palang pegangan, bahan apa yang sesuai, dan kenapa pemasangan profesional penting. Piawaian ADA + BCA Singapura untuk rumah Malaysia.",
    read_time_min: 7,
    image_alt_en: "Grab bar installed in accessible bathroom",
    image_alt_ms: "Palang pegangan dipasang di bilik mandi mudah akses",
    hook_en: "27% of elderly home falls in Malaysia happen in the bathroom.",
    hook_ms: "27% kejatuhan warga emas di rumah Malaysia berlaku di bilik mandi.",
    topic: "bathroom-safety",
  },
  {
    slug_en: "prepare-home-after-stroke",
    slug_ms: "persediaan-rumah-selepas-strok",
    title_en: "Preparing your home after a stroke",
    title_ms: "Menyediakan rumah selepas strok",
    summary_en:
      "Practical guide to home modifications, equipment, and safety setup for stroke recovery. Recovery timeline, FAST trial findings, and NASAM resources for Malaysian families.",
    summary_ms:
      "Panduan praktikal pengubahsuaian rumah, peralatan, dan persediaan keselamatan untuk pemulihan strok. Garis masa pemulihan, ujian FAST, dan sumber NASAM untuk keluarga Malaysia.",
    read_time_min: 8,
    image_alt_en: "Home prepared for stroke recovery with hospital bed",
    image_alt_ms: "Rumah disediakan untuk pemulihan strok dengan katil hospital",
    hook_en: "73% of stroke survivors fall within the first year — most at home.",
    hook_ms: "73% mangsa strok jatuh dalam tahun pertama — kebanyakannya di rumah.",
    topic: "stroke",
  },
];

export function getGuideBySlugEn(slug: string): Guide | undefined {
  return guides.find((g) => g.slug_en === slug);
}

export function getGuideBySlugMs(slug: string): Guide | undefined {
  return guides.find((g) => g.slug_ms === slug);
}

export function getRelatedGuides(currentSlugEn: string, limit = 2): Guide[] {
  return guides.filter((g) => g.slug_en !== currentSlugEn).slice(0, limit);
}
