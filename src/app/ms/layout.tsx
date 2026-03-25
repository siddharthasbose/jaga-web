import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jaga.Care — Rumah Siap Sebelum Mereka Pulang",
    template: "%s | Jaga.Care",
  },
  description:
    "Kami memasang palang pegangan, katil hospital, dan peralatan keselamatan supaya rumah ibu bapa anda siap sebelum keluar hospital. Melayani Malaysia dan Singapura.",
  keywords: [
    "penjagaan warga emas",
    "pemulihan strok di rumah",
    "katil hospital sewa Malaysia",
    "palang bilik mandi warga emas",
    "penjagaan orang tua",
    "keselamatan rumah warga emas",
    "jaga orang tua",
    "peralatan keselamatan rumah warga emas",
    "sewa katil hospital",
    "kerusi roda sewa Malaysia",
    "penjaga warga emas Malaysia",
    "penjagaan selepas strok",
    "persediaan rumah selepas hospital",
    "pengubahsuaian rumah warga emas",
    "pencegahan jatuh warga emas",
    "alas anti-gelincir bilik mandi",
    "elderly care Malaysia",
    "home safety setup Malaysia",
    "grab bars installation Malaysia",
    "hospital bed rental Malaysia",
  ],
  alternates: {
    canonical: "https://jaga.care/ms",
    languages: {
      en: "https://jaga.care",
      ms: "https://jaga.care/ms",
    },
  },
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: "https://jaga.care/ms",
    siteName: "Jaga.Care",
    title: "Jaga.Care — Rumah Siap Sebelum Mereka Pulang",
    description:
      "Persediaan keselamatan rumah untuk ibu bapa yang semakin tua. Melayani Malaysia & Singapura.",
    images: [
      {
        url: "https://jaga.care/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaga.Care — Rumah Siap Sebelum Mereka Pulang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaga.Care — Rumah Siap Sebelum Mereka Pulang",
    description:
      "Persediaan keselamatan rumah untuk ibu bapa yang semakin tua. Melayani Malaysia & Singapura.",
    images: ["https://jaga.care/images/og-image.png"],
  },
};

export default function MsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="ms">{children}</div>;
}
