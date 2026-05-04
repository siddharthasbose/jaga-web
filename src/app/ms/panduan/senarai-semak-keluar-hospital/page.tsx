import { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Senarai Semak Keluar Hospital — Apa yang Perlu Disediakan di Rumah",
  description:
    "Hanya 66% penjaga berasa bersedia ketika keluar hospital. Senarai semak praktikal untuk keluarga di Malaysia dan Singapura yang membawa ibu bapa pulang selepas strok, pembedahan atau jatuh.",
  alternates: {
    canonical: "https://www.jaga.care/ms/panduan/senarai-semak-keluar-hospital",
    languages: {
      "en-MY": "https://www.jaga.care/guides/hospital-discharge-checklist",
      "en-SG": "https://www.jaga.care/guides/hospital-discharge-checklist",
      "ms-MY": "https://www.jaga.care/ms/panduan/senarai-semak-keluar-hospital",
      "x-default": "https://www.jaga.care/guides/hospital-discharge-checklist",
    },
  },
  keywords: [
    "senarai semak keluar hospital",
    "persediaan rumah selepas hospital",
    "ibu bapa pulang dari hospital",
    "perancangan keluar hospital Malaysia",
    "persediaan rumah pesakit terlantar",
    "apa perlu beli sebelum pesakit balik",
    "persediaan rumah selepas pembedahan",
    "discharge planning Malaysia",
    "hospital discharge checklist Malaysia",
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  inLanguage: "ms-MY",
  headline:
    "Senarai Semak Keluar Hospital — Apa yang Perlu Disediakan di Rumah",
  description:
    "Senarai semak praktikal untuk keluarga di Malaysia dan Singapura yang menyediakan rumah sebelum ibu bapa keluar dari hospital.",
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
      name: "Apa yang perlu saya minta daripada hospital sebelum pesakit dibenarkan pulang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minta lima perkara secara bertulis: senarai ubat lengkap (nama, dos, kekerapan), tarikh temujanji susulan, surat rujukan fisioterapi atau pemulihan, surat ringkasan perubatan, dan penilaian mobiliti daripada OT/fisio (boleh berjalan? naik tangga? ke tandas sendiri?). Jangan andaikan semua ini akan diberikan secara automatik.",
      },
    },
    {
      "@type": "Question",
      name: "Bilik mana yang perlu diutamakan untuk pengubahsuaian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bilik mandi adalah keutamaan tertinggi. 27% kejatuhan warga emas di rumah Malaysia berlaku di bilik mandi. Pasang palang pegangan bersebelahan tandas dan dalam bilik air, alas anti-gelincir, kerusi mandi, dan tempat duduk tandas yang ditinggikan jika perlu.",
      },
    },
    {
      "@type": "Question",
      name: "Adakah saya perlu membeli katil hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Katil hospital boleh disewa setiap bulan di Malaysia dan Singapura. Sewa adalah pilihan yang lebih bijak kerana keperluan ibu bapa anda akan berubah dalam masa 3-6 bulan. Kembalikan katil apabila pemulihan mereka membaik.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah tanda-tanda kecemasan yang saya perlu perhatikan dalam minggu pertama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pergi ke kecemasan segera jika anda perhatikan: kekeliruan tiba-tiba, kelemahan baru di sebelah badan, sakit kepala teruk, demam, atau kesukaran bernafas. Pastikan nombor 999 (Malaysia) atau 995 (Singapura) mudah dilihat.",
      },
    },
  ],
};

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 py-2">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-green/30 mt-0.5 text-xs text-green">
        &nbsp;
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function SenaraiSemakKeluarHospitalPage() {
  return (
    <main id="main-content" className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-green">Panduan</p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              Senarai semak keluar hospital
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              Apa yang perlu disediakan di rumah sebelum ibu bapa anda keluar
              dari hospital. Untuk keluarga di Malaysia dan Singapura.
            </p>
            <p className="mt-4 text-sm text-text-faint">
              Dikemas kini: Mei 2026 &middot; bacaan 6 minit
            </p>
          </AnimateIn>
        </div>
      </section>

      <article className="pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12 text-text-muted leading-relaxed">
          <AnimateIn>
            <section>
              <p>
                Proses keluar hospital di Malaysia biasanya berjalan begini:
                doktor mengesahkan benarkan keluar, bil disediakan, jururawat
                memberi ubat dan kad temujanji susulan, dan anda dihantar
                pulang.{" "}
                <a href="https://pusrawi.com.my/en/hospital-discharge-exit-process/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Hospital Pusrawi)</a>
              </p>
              <p className="mt-4">
                Yang tiada adalah segala-galanya antara &ldquo;dibenarkan
                keluar&rdquo; dan &ldquo;sampai rumah&rdquo;. Tiada senarai
                semak rasmi KKM untuk keluarga. Tiada penilaian keselamatan
                rumah. Tiada senarai peralatan. Penyelidikan menunjukkan hanya
                66% penjaga berasa bersedia ketika ahli keluarga keluar
                hospital — bermakna satu pertiga keluarga pulang tanpa tahu
                apa yang mereka perlukan.{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11521122/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(PMC, 2024)</a>
              </p>
              <p className="mt-4">
                Senarai semak ini mengisi jurang itu. Gunakannya antara hari
                anda mendengar &ldquo;kami akan benarkan ibu bapa anda
                keluar&rdquo; dan hari mereka sampai rumah.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Sebelum keluar hospital</h2>
              <p className="mb-4 text-sm">
                Minta perkara-perkara ini sebelum ibu bapa anda dibenarkan
                keluar. Jangan andaikan ia akan diberi secara automatik.
              </p>
              <ul className="space-y-1">
                <ChecklistItem>
                  <strong className="text-text">Senarai ubat</strong> — nama,
                  dos, kekerapan, dan untuk apa setiap satu. Tanya ahli farmasi,
                  bukan hanya jururawat.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">Temujanji susulan</strong> —
                  tarikh, klinik mana, apa yang perlu dibawa. Dapatkan secara
                  bertulis.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">Rujukan fisioterapi / pemulihan</strong>{" "}
                  — jika ibu bapa anda mengalami strok atau pembedahan, minta
                  rujukan ke pemulihan luar pesakit. Di Malaysia,{" "}
                  <a href="https://www.nasam.org/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">NASAM</a>{" "}
                  menyediakan pemulihan strok mampu milik di 8 lokasi.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">Arahan penjagaan</strong> —
                  penjagaan luka, sekatan diet, had aktiviti, tanda-tanda amaran
                  yang bermaksud &ldquo;balik ke kecemasan segera&rdquo;.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">Penilaian mobiliti</strong> —
                  tanya OT atau fisioterapis: bolehkah ibu bapa anda berjalan?
                  Naik tangga? Ke tandas sendiri? Jawapannya menentukan
                  peralatan yang anda perlu di rumah.
                </ChecklistItem>
                <ChecklistItem>
                  <strong className="text-text">Surat ringkasan perubatan</strong>{" "}
                  — ringkasan bertulis tentang apa yang berlaku, apa yang
                  dilakukan, dan ubat semasa. Anda akan perlukan ini untuk
                  doktor, jururawat rumah, atau penjaga pada masa hadapan.
                </ChecklistItem>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Senarai semak keselamatan rumah</h2>
              <p className="mb-4 text-sm">
                7-14 hari pertama di rumah membawa risiko kemasukan semula
                tertinggi. Perubahan-perubahan ini mengurangkan bahaya yang
                paling biasa.
              </p>

              <h3 className="font-medium text-text mt-6 mb-3">Bilik mandi (keutamaan tertinggi)</h3>
              <ul className="space-y-1">
                <ChecklistItem>
                  Palang pegangan bersebelahan tandas dan dalam bilik air
                  (dipasang ke struktur dinding, bukan cawan vakum)
                </ChecklistItem>
                <ChecklistItem>
                  Alas anti-gelincir atau rawatan lantai anti-gelincir
                  profesional
                </ChecklistItem>
                <ChecklistItem>
                  Kerusi atau bangku mandi jika ibu bapa anda tidak boleh
                  berdiri lama
                </ChecklistItem>
                <ChecklistItem>
                  Tempat duduk tandas yang ditinggikan dengan pemegang lengan
                  jika mereka sukar duduk atau berdiri
                </ChecklistItem>
                <ChecklistItem>
                  Hos pancuran tangan (gantikan pancuran tetap)
                </ChecklistItem>
              </ul>

              <h3 className="font-medium text-text mt-6 mb-3">Bilik tidur</h3>
              <ul className="space-y-1">
                <ChecklistItem>
                  Katil hospital dengan pagar sisi (tersedia untuk sewa bulanan
                  — tidak perlu beli)
                </ChecklistItem>
                <ChecklistItem>Alas anti-gelincir di sekeliling katil</ChecklistItem>
                <ChecklistItem>Telefon atau loceng panggilan dalam jangkauan</ChecklistItem>
                <ChecklistItem>
                  Laluan jelas ke bilik mandi — alihkan perabot, alas, dan kabel
                </ChecklistItem>
                <ChecklistItem>Lampu malam antara katil dan bilik mandi</ChecklistItem>
              </ul>

              <h3 className="font-medium text-text mt-6 mb-3">Seluruh rumah</h3>
              <ul className="space-y-1">
                <ChecklistItem>Buang semua alas longgar, tikar, dan kabel dari laluan</ChecklistItem>
                <ChecklistItem>Pegangan tangan di kedua-dua belah tangga</ChecklistItem>
                <ChecklistItem>Tanjakan di anak tangga pintu masuk jika menggunakan kerusi roda</ChecklistItem>
                <ChecklistItem>
                  Susun semula perabot supaya kerusi roda atau alat berjalan
                  boleh lalu (90cm+ ruang)
                </ChecklistItem>
                <ChecklistItem>Pencahayaan mencukupi di semua koridor, tangga, dan bilik</ChecklistItem>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Peralatan yang mungkin diperlukan</h2>
              <p className="mb-4">
                Apa yang anda perlukan bergantung pada tahap mobiliti ibu bapa
                anda. Jangan beli semua sekaligus — kebanyakan peralatan boleh
                disewa secara bulanan dan dipulangkan apabila tidak diperlukan
                lagi.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Kebanyakannya berdikari, berisiko jatuh</p>
                  <p className="text-sm mt-1">
                    Palang pegangan, alas anti-gelincir, kamera keselamatan,
                    susun atur katil yang mudah diakses.
                  </p>
                  <Link href="/packages/make-it-safe" className="text-sm text-green underline underline-offset-2 mt-2 inline-block">
                    Lihat pakej Jadikan Selamat →
                  </Link>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Mobiliti banyak berkurang</p>
                  <p className="text-sm mt-1">
                    Semua di atas dan tambah katil hospital serta kerusi roda
                    secara sewa bulanan.
                  </p>
                  <Link href="/packages/help-them-move" className="text-sm text-green underline underline-offset-2 mt-2 inline-block">
                    Lihat pakej Bantu Mereka Bergerak →
                  </Link>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Perlukan bantuan harian secara langsung</p>
                  <p className="text-sm mt-1">
                    Semua di atas dan tambah penjaga khusus yang dipadankan
                    dengan keperluan ibu bapa anda.
                  </p>
                  <Link href="/packages/someone-by-their-side" className="text-sm text-green underline underline-offset-2 mt-2 inline-block">
                    Lihat pakej Seseorang Di Sisi Mereka →
                  </Link>
                </div>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Minggu pertama di rumah</h2>
              <ul className="space-y-1">
                <ChecklistItem>Isi semua preskripsi sebelum ibu bapa anda sampai rumah</ChecklistItem>
                <ChecklistItem>Tetapkan jadual ubat (gunakan kotak ubat atau peringatan telefon)</ChecklistItem>
                <ChecklistItem>
                  Sediakan makanan yang mudah disediakan — ibu bapa anda mungkin
                  ada sekatan diet atau kesukaran menelan
                </ChecklistItem>
                <ChecklistItem>
                  Letak nombor kecemasan (999 di Malaysia, 995 di Singapura)
                  di tempat yang mudah dilihat
                </ChecklistItem>
                <ChecklistItem>
                  Simpan surat ringkasan perubatan di tempat yang semua orang
                  dalam rumah boleh cari
                </ChecklistItem>
                <ChecklistItem>
                  Atur lawatan rumah pertama atau pemulihan luar pesakit dalam
                  minggu pertama
                </ChecklistItem>
                <ChecklistItem>
                  Awasi tanda-tanda amaran: kekeliruan tiba-tiba, kelemahan baru
                  di sebelah badan, sakit kepala teruk, demam, kesukaran
                  bernafas — ini bermaksud pergi kecemasan segera
                </ChecklistItem>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Untuk keluarga di Singapura</h2>
              <p>
                Singapura mempunyai sokongan selepas keluar hospital yang lebih
                berstruktur berbanding Malaysia. Manfaatkan ini:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Interim Caregiver Service (ICS)</strong>{" "}
                    — penjaga sementara selama lebih kurang 2 minggu selepas
                    pulang dari hospital.{" "}
                    <a href="https://www.moh.gov.sg/newsroom/interim-caregiver-service/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(MOH Singapura)</a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Caregivers Training Grant</strong>{" "}
                    — subsidi tahunan untuk kursus latihan penjaga, melalui{" "}
                    <a href="https://www.aic.sg/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">AIC</a>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Program HDB EASE</strong> —
                    subsidi 87.5-95% untuk palang pegangan, rawatan anti-gelincir,
                    dan tanjakan di unit HDB.{" "}
                    <a href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(HDB)</a>
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Mengapa tidak beli sendiri sahaja?
              </h2>
              <p>
                Boleh. Tetapi apabila pada hari Selasa anda diberitahu ibu bapa
                anda akan dibenarkan keluar pada hari Jumaat, anda tidak ada
                masa untuk menyelaraskan katil hospital daripada satu syarikat,
                palang pegangan dari kedai perkakasan, alas anti-gelincir
                dari Shopee, dan kontraktor untuk memasang semuanya.
              </p>
              <p className="mt-4">
                Sebab kebanyakan keluarga berasa tidak bersedia ketika keluar
                hospital bukan kerana mereka tidak peduli. Ia kerana tiada satu
                perkhidmatan yang menguruskan semuanya. Itulah yang kami bina
                Jaga.Care untuk lakukan.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section className="p-8 bg-white rounded-2xl border border-warm-gray/50 text-center">
              <h2 className="font-serif text-2xl text-text">
                Perlukan rumah anda siap sebelum hari keluar hospital?
              </h2>
              <p className="mt-2 text-text-muted">
                Hantar gambar rumah anda dan kami akan sediakan cadangan dalam
                masa 48 jam. Pemasangan dalam satu minggu, dijamin.
              </p>
              <div className="mt-6">
                <a
                  href="https://wa.me/6589499681?text=Hai%20Sumira%2C%20saya%20ingin%20berbual%20tentang%20persediaan%20rumah%20untuk%20ibu%20bapa%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-full text-base font-medium transition-all"
                >
                  Bercakap dengan pakar →
                </a>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-xl text-text mb-4">Sumber rujukan</h2>
              <ol className="text-xs text-text-faint space-y-2 list-decimal list-inside">
                <li>Hospital Pusrawi. <a href="https://pusrawi.com.my/en/hospital-discharge-exit-process/" className="underline" target="_blank" rel="noopener noreferrer">pusrawi.com.my</a></li>
                <li>PMC (2024). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11521122/" className="underline" target="_blank" rel="noopener noreferrer">PMC11521122</a></li>
                <li>Frontiers in Neurology (2022). <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.996620/full" className="underline" target="_blank" rel="noopener noreferrer">Frontiers</a></li>
                <li>MOH Singapura. <a href="https://www.moh.gov.sg/newsroom/support-for-caregivers-during-and-post-care/" className="underline" target="_blank" rel="noopener noreferrer">moh.gov.sg</a></li>
                <li>HDB EASE. <a href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease" className="underline" target="_blank" rel="noopener noreferrer">hdb.gov.sg</a></li>
                <li>NASAM. <a href="https://www.nasam.org/" className="underline" target="_blank" rel="noopener noreferrer">nasam.org</a></li>
              </ol>
            </section>
          </AnimateIn>
        </div>
      </article>
    </main>
  );
}
