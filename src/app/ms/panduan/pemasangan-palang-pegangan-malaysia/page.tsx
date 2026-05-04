import { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pemasangan Palang Pegangan di Malaysia — Di Mana, Bagaimana, Apa yang Sesuai",
  description:
    "27% kejatuhan warga emas di rumah Malaysia berlaku di bilik mandi. Panduan kedudukan, bahan, piawaian, dan pemasangan palang pegangan profesional untuk rumah Malaysia dan Singapura.",
  alternates: {
    canonical: "https://www.jaga.care/ms/panduan/pemasangan-palang-pegangan-malaysia",
    languages: {
      "en-MY": "https://www.jaga.care/guides/grab-bar-installation-malaysia",
      "en-SG": "https://www.jaga.care/guides/grab-bar-installation-malaysia",
      "ms-MY": "https://www.jaga.care/ms/panduan/pemasangan-palang-pegangan-malaysia",
      "x-default": "https://www.jaga.care/guides/grab-bar-installation-malaysia",
    },
  },
  keywords: [
    "pemasangan palang pegangan Malaysia",
    "palang bilik mandi warga emas",
    "keselamatan bilik mandi warga emas",
    "rawatan lantai anti-gelincir Malaysia",
    "pencegahan jatuh rumah warga emas",
    "pengubahsuaian bilik mandi warga emas",
    "palang pegangan KL",
    "grab bar installation Malaysia",
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  inLanguage: "ms-MY",
  headline: "Pemasangan Palang Pegangan di Malaysia",
  description:
    "Panduan kedudukan, bahan, piawaian, dan pemasangan palang pegangan profesional untuk keselamatan bilik mandi warga emas di Malaysia dan Singapura.",
  author: { "@type": "Organization", name: "Jaga.Care", url: "https://www.jaga.care" },
  publisher: { "@type": "Organization", name: "Jaga.Care", url: "https://www.jaga.care" },
  datePublished: "2026-03-25",
  dateModified: "2026-05-04",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ms-MY",
  mainEntity: [
    {
      "@type": "Question",
      name: "Di mana palang pegangan perlu dipasang dalam bilik mandi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pasang palang pegangan di tiga tempat utama: bersebelahan tandas (palang mendatar 800-900mm dari lantai), dalam bilik air (palang mendatar di sepanjang dinding terpanjang ditambah palang menegak di pintu masuk), dan di sepanjang dinding antara pintu bilik mandi ke tandas. Semua palang mesti dipasang ke struktur dinding atau bata, bukan papan plaster atau jubin sahaja.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa berat yang boleh ditahan oleh palang pegangan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Palang yang mengikut piawaian ADA mesti menahan sekurang-kurangnya 113kg (250 paun). Palang gred perubatan untuk rumah biasanya dinilai 150-225kg (500 paun+). Palang itu sendiri jarang gagal — pemasangan yang tidak betul adalah punca kegagalan. Palang yang dipasang ke papan plaster sahaja, bukan ke struktur dinding, akan tertanggal.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa kos pemasangan palang pegangan di Malaysia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Palang pegangan individu di kedai perkakasan kos RM30-150 sebatang. Pemasangan profesional dengan penilaian dan pemasangan struktur yang betul menambah kos tetapi memastikan keselamatan. Jaga.Care menyertakan palang pegangan dalam semua pakej penjagaan — bersama alas anti-gelincir, kamera, dan peralatan keselamatan lain — dengan penilaian rumah percuma.",
      },
    },
    {
      "@type": "Question",
      name: "Bolehkah palang pegangan dipasang di kondominium atau apartment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Di Malaysia, palang pegangan boleh dipasang di kondominium, apartment, dan rumah teres. Pemasang profesional tahu cara bekerja mengikut garis panduan pengurusan bangunan. Untuk unit HDB di Singapura, program EASE memberi subsidi 87.5-95% kos.",
      },
    },
  ],
};

export default function PemasanganPalangPeganganPage() {
  return (
    <main id="main-content" className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-green">Panduan</p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              Pemasangan palang pegangan di Malaysia
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              Di mana perlu dipasang, bahan apa yang sesuai, dan kenapa
              pemasangan profesional penting. Untuk rumah di Malaysia dan
              Singapura.
            </p>
            <p className="mt-4 text-sm text-text-faint">Dikemas kini: Mei 2026 &middot; bacaan 7 minit</p>
          </AnimateIn>
        </div>
      </section>

      <article className="pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12 text-text-muted leading-relaxed">
          <AnimateIn>
            <section>
              <p>
                Dalam satu kajian terhadap warga emas yang menghadiri klinik
                penjagaan primer di Kuala Lumpur, 47% pernah jatuh dalam tempoh
                12 bulan sebelum kajian. 61% kejatuhan itu berlaku di rumah,
                dan bilik mandi adalah lokasi paling biasa — menyumbang 27%
                daripada semua kejatuhan di rumah.{" "}
                <a href="https://www.researchgate.net/publication/228475842" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Sazlina et al.)</a>
              </p>
              <p className="mt-4">
                Sebabnya mudah: jubin basah, ruang sempit, dan pergerakan yang
                memerlukan keseimbangan — duduk di tandas, melangkah ke dalam
                pancuran, bangun dari kedudukan rendah. Palang pegangan
                memberi ibu bapa anda sesuatu yang kukuh untuk dipegang pada
                detik-detik kritikal ini.
              </p>
              <p className="mt-4">
                Di Singapura, kejatuhan menyumbang 40% kematian akibat
                kecederaan dalam kalangan warga emas, dan 1 daripada 3 warga
                emas berusia 65+ jatuh dalam masa setahun.{" "}
                <a href="https://www.hpb.gov.sg/docs/default-source/pdf/cpg_falls_preventionb274.pdf" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(HPB-MOH Garis Panduan Klinikal)</a>
              </p>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Di mana hendak pasang palang pegangan</h2>
              <p className="mb-6">
                Kedudukan lebih penting daripada palang itu sendiri. Palang di
                tempat yang salah tidak akan digunakan. Berikut adalah cadangan
                ahli terapi pekerjaan dan kod bangunan:
              </p>

              <h3 className="font-medium text-text mb-3">Bersebelahan tandas</h3>
              <div className="p-4 bg-white rounded-xl border border-warm-gray/50 mb-6">
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong className="text-text">Dinding sisi:</strong> Palang
                    mendatar pada 800-900mm dari lantai. Bermula ~300mm di
                    hadapan mangkuk tandas, panjang minimum 1,050mm. Inilah yang
                    dipegang ibu bapa anda semasa duduk dan bangun.
                  </li>
                  <li>
                    <strong className="text-text">Dinding belakang:</strong>{" "}
                    Palang mendatar pada 800-900mm, panjang sekurang-kurangnya
                    900mm. Memberi kestabilan ketika duduk. Elakkan injap flush.
                  </li>
                  <li>
                    <strong className="text-text">Jarak dinding ke palang:</strong>{" "}
                    Minimum 38mm supaya tangan boleh menggenggam dengan baik.
                  </li>
                </ul>
                <p className="text-xs text-text-faint mt-3">
                  Ketinggian mengikut Kod BCA Singapura tentang Kebolehcapaian
                  2025.
                </p>
              </div>

              <h3 className="font-medium text-text mb-3">Dalam pancuran</h3>
              <div className="p-4 bg-white rounded-xl border border-warm-gray/50 mb-6">
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong className="text-text">Palang menegak</strong> di
                    pintu masuk pancuran — untuk sokongan masuk/keluar.
                  </li>
                  <li>
                    <strong className="text-text">Palang mendatar</strong> di
                    sepanjang dinding terpanjang — untuk sokongan berterusan
                    semasa berdiri atau bergerak ke kerusi mandi.
                  </li>
                  <li>
                    <strong className="text-text">Palang menegak kecil (~300mm)</strong>{" "}
                    berhampiran injap paip — supaya tidak perlu mencapai dan
                    hilang keseimbangan.
                  </li>
                </ul>
              </div>

              <h3 className="font-medium text-text mb-3">Di sepanjang laluan dinding</h3>
              <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                <p className="text-sm">
                  Jika ada jarak antara pintu bilik mandi dan tandas, pasang
                  palang mendatar di sepanjang dinding itu. Ini sangat penting
                  bagi pesakit strok yang mengalami kelemahan satu sisi —
                  mereka memerlukan sokongan berterusan untuk seluruh laluan,
                  bukan hanya di destinasi.
                </p>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Bahan dan piawaian</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Bahan</p>
                  <p className="text-sm mt-1">
                    Keluli tahan karat Type 304 adalah piawaian industri —
                    tahan kakisan dalam persekitaran bilik mandi yang lembap di
                    Malaysia/Singapura. Kemasan berus untuk cengkaman. Elakkan
                    plastik bersalut krom kerana akan retak dengan masa.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Diameter</p>
                  <p className="text-sm mt-1">
                    32-50mm (keratan rentas bulat). Julat ini sesuai untuk
                    kebanyakan tangan dewasa dan memenuhi piawaian ADA Seksyen
                    609 dan Kod BCA Singapura 2025.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Penilaian berat</p>
                  <p className="text-sm mt-1">
                    Minimum 113kg (250 paun) mengikut piawaian ADA. Palang gred
                    perubatan untuk kediaman biasanya dinilai 150-225kg (500
                    paun+). Palang itu sendiri hampir tidak pernah gagal —
                    pemasangan yang tidak betul adalah punca palang tertanggal
                    daripada dinding.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Piawaian di Malaysia</p>
                  <p className="text-sm mt-1">
                    MS 1184:2014 (Reka Bentuk Sejagat dan Kebolehcapaian dalam
                    Persekitaran Binaan) meliputi kebolehcapaian di bangunan
                    awam tetapi tiada piawaian khusus untuk palang pegangan
                    kediaman warga emas. Ini adalah jurang peraturan. Pemasang
                    profesional merujuk kepada piawaian ADA dan kod BCA
                    Singapura sebagai penanda aras.
                  </p>
                </div>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Kenapa cara pemasangan lebih penting daripada palang
              </h2>
              <p>
                Palang pegangan RM50 yang dipasang ke struktur dinding akan
                menahan orang seberat 100kg. Palang RM200 yang dipasang ke
                jubin dan papan plaster akan tertanggal pada kali pertama
                seseorang meletakkan berat penuh padanya.
              </p>
              <p className="mt-4 font-medium text-text">Apa yang diperlukan untuk pemasangan yang betul:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Pencari struktur</strong> —
                    untuk mencari rangka kayu atau logam di belakang dinding.
                    Bilik mandi rumah Malaysia biasanya mempunyai dinding
                    konkrit atau bata, yang sebenarnya memberikan pengikatan
                    lebih baik daripada papan plaster.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Sauh batu atau bolt pengembang</strong>{" "}
                    untuk dinding konkrit/bata (biasa di rumah Malaysia). Toggle
                    bolt untuk bahagian papan plaster. Jangan sekali-kali guna
                    palam plastik sahaja.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Pelapik kalis air</strong> di
                    sekeliling lubang pemasangan untuk mengelakkan air masuk ke
                    belakang jubin.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Ujian beban</strong> selepas
                    pemasangan — pemasang profesional akan menguji setiap palang
                    sebelum pergi.
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Tentang palang pegangan cawan vakum</h2>
              <p>
                Palang pegangan cawan vakum dijual di Shopee dan Lazada pada
                harga RM15-50. Ia popular kerana tidak memerlukan penggerudian.
                Ia juga berbahaya.
              </p>
              <p className="mt-4">
                Cawan vakum hilang cengkaman pada jubin yang basah, bertekstur
                atau tidak rata — kesemuanya menggambarkan kebanyakan dinding
                bilik mandi Malaysia. Ia gagal tanpa amaran. Jika ibu bapa
                anda menggunakannya untuk bangun dari tandas dan ia terlepas,
                mereka akan jatuh ke lantai yang keras dan basah.
              </p>
              <p className="mt-4">
                Jika anda menyewa dan tidak boleh menggerudi, bercakap dengan
                tuan rumah. Kebanyakan akan benarkan pemasangan palang
                pegangan apabila mereka faham ini adalah isu keselamatan.
                Lubang adalah kecil dan boleh ditampal apabila anda berpindah.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Singapura: subsidi EASE</h2>
              <p>
                Jika ibu bapa anda tinggal di unit HDB,{" "}
                <a href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">program EASE</a>{" "}
                meliputi palang pegangan pada subsidi 87.5-95%.
              </p>
              <div className="mt-4 p-4 bg-white rounded-xl border border-warm-gray/50">
                <ul className="text-sm space-y-2">
                  <li><strong className="text-text">Set pertama:</strong> 8-10 palang untuk tandas pertama dan dalam unit. Kos selepas subsidi: $26-$65 bergantung jenis unit.</li>
                  <li><strong className="text-text">Set kedua:</strong> 6 palang untuk tandas kedua. Kos selepas subsidi: $15-$38.</li>
                  <li><strong className="text-text">Tambahan:</strong> Rawatan lantai anti-gelincir (sehingga 2 bilik mandi) dan sehingga 5 tanjakan.</li>
                  <li><strong className="text-text">Kelayakan:</strong> Isi rumah Singapura dengan ahli keluarga berusia 65+ (atau 60-64 dengan keperluan ADL).</li>
                </ul>
              </div>
              <p className="mt-4">
                EASE adalah nilai yang bagus untuk palang pegangan asas.
                Kekangannya adalah masa — proses mengambil masa beberapa
                minggu hingga bulan. Jika ibu bapa anda akan keluar hospital
                minggu ini, perkhidmatan pemasangan persendirian adalah lebih
                cepat.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section className="p-8 bg-white rounded-2xl border border-warm-gray/50 text-center">
              <h2 className="font-serif text-2xl text-text">Perlukan palang pegangan dipasang secara profesional?</h2>
              <p className="mt-2 text-text-muted">
                Jaga.Care menilai bilik mandi anda, memasang palang pegangan
                ke titik pengikatan yang betul, dan menambah rawatan
                anti-gelincir — semua dalam satu lawatan. Melayani Lembah
                Klang, Pulau Pinang, JB, dan seluruh Singapura.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/6589499681?text=Hai%20Sumira%2C%20saya%20berminat%20dengan%20pakej%20Jadikan%20selamat."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-full text-base font-medium transition-all"
                >
                  Bercakap dengan pakar →
                </a>
                <Link href="/packages/make-it-safe" className="inline-block border border-green text-green px-8 py-3.5 rounded-full text-base font-medium transition-all hover:bg-green/5">
                  Lihat pakej Jadikan Selamat
                </Link>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-xl text-text mb-4">Sumber rujukan</h2>
              <ol className="text-xs text-text-faint space-y-2 list-decimal list-inside">
                <li>Sazlina et al. <a href="https://www.researchgate.net/publication/228475842" className="underline" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
                <li>HPB-MOH (2015). <a href="https://www.hpb.gov.sg/docs/default-source/pdf/cpg_falls_preventionb274.pdf" className="underline" target="_blank" rel="noopener noreferrer">HPB PDF</a></li>
                <li>BCA Code on Accessibility (2025). <a href="https://file.go.gov.sg/bca-coa2025.pdf" className="underline" target="_blank" rel="noopener noreferrer">BCA</a></li>
                <li>ADA Section 609. <a href="https://www.ada-compliance.com/ada-compliance/609-grab-bars" className="underline" target="_blank" rel="noopener noreferrer">ada-compliance.com</a></li>
                <li>HDB EASE. <a href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease" className="underline" target="_blank" rel="noopener noreferrer">hdb.gov.sg</a></li>
                <li>MS 1184:2014. <a href="https://www.academia.edu/34868018" className="underline" target="_blank" rel="noopener noreferrer">Academia.edu</a></li>
              </ol>
            </section>
          </AnimateIn>
        </div>
      </article>
    </main>
  );
}
