import { Metadata } from "next";
import { AnimateIn } from "@/components/animate-in";
import { RelatedGuides } from "@/components/related-guides";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menyediakan Rumah Selepas Strok — Panduan Malaysia & Singapura",
  description:
    "73% mangsa strok jatuh dalam tahun pertama — kebanyakannya di rumah. Panduan praktikal pengubahsuaian rumah, peralatan, dan persediaan keselamatan untuk pemulihan strok di Malaysia dan Singapura.",
  alternates: {
    canonical: "https://www.jaga.care/ms/panduan/persediaan-rumah-selepas-strok",
    languages: {
      "en-MY": "https://www.jaga.care/guides/prepare-home-after-stroke",
      "en-SG": "https://www.jaga.care/guides/prepare-home-after-stroke",
      "ms-MY": "https://www.jaga.care/ms/panduan/persediaan-rumah-selepas-strok",
      "x-default": "https://www.jaga.care/guides/prepare-home-after-stroke",
    },
  },
  keywords: [
    "persediaan rumah selepas strok",
    "pemulihan strok di rumah",
    "penjagaan strok di rumah",
    "rehabilitasi strok KL",
    "pengubahsuaian rumah pesakit strok",
    "pencegahan jatuh strok",
    "stroke recovery Malaysia",
    "post stroke care home",
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  inLanguage: "ms-MY",
  headline: "Menyediakan Rumah Selepas Strok",
  description:
    "Panduan praktikal pengubahsuaian rumah, peralatan, dan persediaan keselamatan untuk pemulihan strok di Malaysia dan Singapura.",
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
      name: "Berapa lama pemulihan strok di rumah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3 bulan pertama adalah tempoh paling kritikal untuk pemulihan, dengan otak dalam keadaan neuroplastisiti yang tinggi. Tetingkap puncak untuk pemulihan motor adalah 60-90 hari selepas strok. Selepas 6 bulan, peningkatan masih berlaku tetapi lebih perlahan. Kajian terkini NIH menentang anggapan lama bahawa pemulihan terhenti pada 6 bulan.",
      },
    },
    {
      "@type": "Question",
      name: "Pengubahsuaian rumah apa yang diperlukan selepas strok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bilik mandi adalah keutamaan tertinggi — 71% pesakit strok membuat pengubahsuaian bilik mandi. Perubahan utama termasuk palang pegangan berhampiran tandas dan pancuran, alas anti-gelincir, tempat duduk tandas yang ditinggikan, kerusi mandi, dan hos pancuran tangan. Bilik tidur memerlukan pagar katil, ketinggian katil yang dikurangkan, dan laluan jelas. Di seluruh rumah, buang alas longgar, baiki pencahayaan, dan pasang pegangan tangan di tangga.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa peratus mangsa strok jatuh di rumah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "73% mangsa strok mengalami kejatuhan dalam tempoh setahun, dan 59% kejatuhan tersebut berlaku di rumah. Walau bagaimanapun, kajian dari ujian FAST menunjukkan bahawa program gabungan pengubahsuaian rumah dan senaman dapat mengurangkan kejatuhan sebanyak 33%.",
      },
    },
  ],
};

export default function PersediaanRumahSelepasStrokPage() {
  return (
    <main id="main-content" className="bg-cream">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-green">Panduan</p>
            <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl text-text leading-tight">
              Menyediakan rumah selepas strok
            </h1>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              Panduan praktikal untuk keluarga di Malaysia dan Singapura. Apa
              yang perlu diubah, apa yang perlu disewa, dan apa yang perlu
              dilakukan sebelum ibu bapa anda pulang.
            </p>
            <p className="mt-4 text-sm text-text-faint">Dikemas kini: Mei 2026 &middot; bacaan 8 minit</p>
          </AnimateIn>
        </div>
      </section>

      <article className="pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto space-y-12 text-text-muted leading-relaxed">
          <AnimateIn>
            <section>
              <p>
                Setiap tahun, kira-kira 48,000 orang di Malaysia dan 9,700 di
                Singapura mengalami strok.{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9149343/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Venketasubramanian et al., 2022)</a>{" "}
                Sekitar 83% pulang ke rumah, bukan ke pusat penjagaan.{" "}
                <a href="https://www.ahajournals.org/doi/10.1161/STROKEAHA.119.026618" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Paley et al., 2020)</a>{" "}
                Masalahnya adalah kebanyakan rumah tidak bersedia untuk mereka.
              </p>
              <p className="mt-4">
                Tiada siapa yang mengubah suai bilik mandi mereka untuk
                bersedia menghadapi strok. Jadi apabila hospital memberitahu
                ibu bapa anda akan keluar dalam 3 hari, anda tinggal mencari
                jalan untuk palang pegangan, katil hospital, dan akses kerusi
                roda — sambil juga memproses diagnosis itu sendiri.
              </p>
              <p className="mt-4">
                Panduan ini meliputi apa yang perlu diubah, apa yang perlu
                disediakan, dan bagaimana membuat keutamaan — berdasarkan
                kajian perubatan yang diterbitkan dan keadaan sebenar rumah
                Malaysia dan Singapura.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Mengapa persediaan rumah penting</h2>
              <p>
                <strong className="text-text">73% mangsa strok jatuh dalam tahun pertama.</strong>{" "}
                59% kejatuhan itu berlaku di rumah — hampir dua kali ganda
                kadar warga emas tanpa strok.{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3084849/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Mackintosh et al., 2011)</a>
              </p>
              <p className="mt-4">
                Di Malaysia, 11-13% pesakit strok dimasukkan semula dalam masa
                28 hari. Punca utama adalah strok berulang (32%), diikuti oleh
                pneumonia (13%) dan sepsis.{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7815148/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Mhd Noor et al., 2021)</a>{" "}
                Di Singapura, 24% dimasukkan semula dalam tahun pertama, dengan
                kejatuhan antara punca paling biasa.{" "}
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8814857/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Koh et al., 2022)</a>
              </p>
              <p className="mt-4">
                Berita baiknya: program gabungan pengubahsuaian rumah dan
                senaman mengurangkan kejatuhan sebanyak 33% dalam ujian FAST —
                ujian rawak terbesar mengenai kejatuhan selepas strok.{" "}
                <a href="https://www.news-medical.net/news/20260324/Home-based-program-reduces-falls-among-stroke-survivors-by-one-third.aspx" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Ujian FAST)</a>
              </p>
              <p className="mt-4">
                Kajian Universiti Washington pula menunjukkan: mangsa strok
                yang rumahnya diubah suai secara profesional mempunyai{" "}
                <strong className="text-text">sifar kematian dalam kumpulan intervensi</strong>{" "}
                berbanding 10 dalam kumpulan kawalan sepanjang tempoh kajian.{" "}
                <a href="https://medicine.washu.edu/modifying-homes-for-stroke-survivors-saves-lives-extends-independence/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Stark et al., Universiti Washington)</a>
              </p>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Memahami garis masa pemulihan</h2>
              <p>
                Keperluan ibu bapa anda akan berubah mengikut masa. Persediaan
                rumah yang anda perlukan pada minggu pertama berbeza daripada
                bulan keenam.
              </p>
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">3 bulan pertama — tetingkap kritikal</p>
                  <p className="mt-1 text-sm">
                    Otak berada dalam keadaan neuroplastisiti yang tinggi.
                    Tetingkap puncak untuk pemulihan motor adalah 60-90 hari
                    selepas strok. Inilah masa rehabilitasi intensif memberi
                    perbezaan terbesar.{" "}
                    <a href="https://www.nih.gov/news-events/nih-research-matters/critical-time-window-rehabilitation-after-stroke" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(NIH, 2019)</a>{" "}
                    Rumah anda perlu menyokong senaman fisioterapi harian dan
                    pergerakan selamat antara bilik.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Bulan 3-6 — membina keberdikarian</p>
                  <p className="mt-1 text-sm">
                    Ramai pesakit memperolehi semula sedikit mobiliti dalam
                    tempoh ini. Anda mungkin beralih dari katil hospital ke
                    katil biasa, atau dari kerusi roda ke alat berjalan.
                    Pengubahsuaian keselamatan (palang pegangan, alas
                    anti-gelincir) tetap penting.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">6 bulan dan ke atas — jangka panjang</p>
                  <p className="mt-1 text-sm">
                    Peningkatan berterusan selepas 6 bulan, bertentangan dengan
                    apa yang dipercayai dahulu.{" "}
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6689791/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Dromerick et al., 2019)</a>{" "}
                    Pengubahsuaian keselamatan menjadi ciri kekal rumah.
                    Sewaan peralatan boleh dipulangkan apabila mobiliti membaik.
                  </p>
                </div>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Mulakan dengan bilik mandi</h2>
              <p>
                71% pesakit strok yang mengubah suai rumah mulakan dengan
                bilik mandi.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19260250/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(de Jonge et al., 2009)</a>{" "}
                Di rumah Malaysia, bilik mandi adalah lokasi #1 kejatuhan —
                menyumbang 27% daripada semua kejatuhan rumah dalam kalangan
                warga emas.
              </p>
              <p className="mt-4 font-medium text-text">Apa yang perlu dipasang:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Palang pegangan</strong>{" "}
                    bersebelahan tandas, dalam pancuran, dan di sepanjang dinding
                    dari pintu ke tandas. Pasang ke struktur dinding — bukan
                    papan plaster. Keluli tahan karat, dinilai 113kg+ minimum.
                    Ketinggian: 800-900mm dari lantai.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Rawatan anti-gelincir</strong>{" "}
                    pada jubin lantai. Bukan alas tampal yang berkecai di
                    pinggir — rawatan profesional yang dipakai terus pada jubin
                    sedia ada.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Kerusi atau bangku mandi</strong>{" "}
                    supaya ibu bapa anda boleh duduk semasa mandi. Penting jika
                    mereka mengalami kelemahan satu sisi (hemiplegia).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Tempat duduk tandas yang ditinggikan</strong>{" "}
                    dengan pemegang lengan. Mengurangkan usaha untuk duduk dan
                    bangun — penting bagi pesakit dengan kaki yang lemah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Hos pancuran tangan</strong>{" "}
                    untuk menggantikan pancuran tetap. Membolehkan mandi sambil
                    duduk.
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Persediaan bilik tidur</h2>
              <p>
                Jika ibu bapa anda tidak boleh bangun dari katil sendiri, katil
                hospital dengan pelarasan kepala/kaki elektrik menjadikan
                penjagaan harian jauh lebih mudah — untuk mereka dan untuk
                penjaga.
              </p>
              <p className="mt-4 font-medium text-text">Perubahan utama:</p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Katil hospital</strong> dengan
                    pagar sisi dan tilam pelepas tekanan. Tersedia untuk sewa
                    bulanan di Malaysia dan Singapura — tidak perlu beli.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Pagar katil</strong> pada
                    mana-mana katil yang ibu bapa anda tidur. Punca kejatuhan
                    paling biasa di rumah adalah bangun dari katil pada waktu
                    malam.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Alas anti-gelincir</strong> di
                    sekeliling katil. Ibu bapa anda mungkin tidak stabil ketika
                    mula-mula berdiri.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Laluan jelas ke bilik mandi</strong>{" "}
                    — alihkan perabot, alas, dan kabel antara katil dan tandas.
                    Pertimbangkan kerusi commode di sebelah katil untuk kegunaan
                    waktu malam.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Telefon atau loceng panggilan</strong>{" "}
                    dalam jangkauan setiap masa.
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Seluruh rumah</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span><strong className="text-text">Buang semua alas dan tikar longgar</strong> — bahaya tersandung paling biasa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Baiki pencahayaan</strong> di koridor, tangga, dan laluan antara bilik tidur dan bilik mandi. Lampu malam dengan sensor pergerakan adalah murah dan berkesan.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Pegangan tangan di semua tangga</strong> — kedua-dua belah jika boleh. Jika tangga tidak dapat dielakkan, pertimbangkan pindahkan bilik tidur ibu bapa anda ke tingkat bawah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Tanjakan di pintu masuk</strong> jika ibu bapa anda menggunakan kerusi roda. Pintu standard di rumah Malaysia biasanya cukup luas (75cm+), tetapi bendul dan anak tangga perlukan tanjakan.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-0.5">&#x2713;</span>
                  <span>
                    <strong className="text-text">Kebolehcapaian kerusi roda</strong> — ukur semua pintu dan koridor. Alihkan perabot untuk membuat laluan jelas sekurang-kurangnya 90cm lebar.
                  </span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">
                Apa yang hospital mungkin tidak beritahu anda
              </h2>
              <p>
                Penyelidikan terhadap penjaga strok di Malaysia mendapati
                keluarga secara konsisten menyatakan ia akan &ldquo;sangat
                membantu jika perkhidmatan dengan latihan dan sokongan yang
                sesuai dapat membimbing mereka dari hari pertama&rdquo;.{" "}
                <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.996620/full" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">(Frontiers in Neurology, 2022)</a>
              </p>
              <p className="mt-4">
                Hanya 66% penjaga berasa bersedia ketika keluar hospital. Apa
                yang biasanya tidak diberitahu kepada keluarga:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>Tiada penilaian keselamatan rumah dilakukan sebelum keluar hospital</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>Tiada senarai peralatan — anda tidak diberitahu mungkin perlukan palang pegangan, kerusi mandi atau katil hospital</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>Tiada latihan penjaga berstruktur sebelum anda membawa pulang ibu bapa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>
                    Tiada maklumat tentang perkhidmatan rehabilitasi komuniti seperti{" "}
                    <a href="https://www.nasam.org/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">NASAM</a>{" "}
                    (Malaysia) atau{" "}
                    <a href="https://www.aic.sg/caregiving/caring-for-loved-one-with-stroke/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">AIC</a>{" "}
                    (Singapura)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#x2717;</span>
                  <span>Kad perubatan anda kemungkinan besar tidak meliputi pengubahsuaian rumah, sewa peralatan, atau jururawat di rumah</span>
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-2xl text-text mb-4">Sumber dan sokongan</h2>
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Malaysia</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>
                      <a href="https://www.nasam.org/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">NASAM</a>{" "}
                      — Rehabilitasi strok di 8 pusat (PJ, Ampang, Pulau Pinang,
                      Sabah, Melaka, Perak, Johor, Kuantan). Hubungi 03-7956 1976.
                    </li>
                    <li>
                      <a href="https://www.moh.gov.my/moh/resources/Penerbitan/CPG/CARDIOVASCULAR/CPG_Management_of_Ischaemic_Stroke_3rd_Edition_2020_28.02_.2021_.pdf" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">Garis Panduan Klinikal KKM Malaysia tentang Strok (2020)</a>
                    </li>
                    <li>
                      <a href="https://play.google.com/store/apps/details?id=com.caknastrok.app" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">Aplikasi CaknaStrok</a>{" "}
                      — Aplikasi pendidikan penjaga trilingual untuk keluarga Malaysia
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-warm-gray/50">
                  <p className="font-medium text-text">Singapura</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li><a href="https://www.aic.sg/caregiving/caring-for-loved-one-with-stroke/" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">AIC — Caring for a Loved One with Stroke</a></li>
                    <li><a href="https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/for-our-seniors/ease" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">Program HDB EASE</a> — Subsidi palang pegangan dan rawatan anti-gelincir</li>
                    <li><a href="https://www.moh.gov.sg/caregiver-support" className="text-green underline underline-offset-2" target="_blank" rel="noopener noreferrer">MOH Singapura - Sokongan Penjaga</a> — Interim Caregiver Service, geran latihan</li>
                  </ul>
                </div>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <section className="p-8 bg-white rounded-2xl border border-warm-gray/50 text-center">
              <h2 className="font-serif text-2xl text-text">Perlukan rumah anda siap sebelum keluar hospital?</h2>
              <p className="mt-2 text-text-muted">
                Jaga.Care memasang palang pegangan, katil hospital, rawatan
                anti-gelincir, dan kamera pemantauan — dipasang secara
                profesional di rumah anda dalam masa satu minggu. Melayani
                Malaysia dan Singapura.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/6589499681?text=Hai%20Sumira%2C%20saya%20ingin%20berbual%20tentang%20persediaan%20rumah%20untuk%20ibu%20bapa%20saya."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green hover:bg-green-dark text-white px-8 py-3.5 rounded-full text-base font-medium transition-all"
                >
                  Bercakap dengan pakar →
                </a>
                <Link href="/packages" className="inline-block border border-green text-green px-8 py-3.5 rounded-full text-base font-medium transition-all hover:bg-green/5">
                  Lihat pakej kami
                </Link>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn>
            <RelatedGuides currentSlugEn="prepare-home-after-stroke" lang="ms" />
          </AnimateIn>

          <AnimateIn>
            <section>
              <h2 className="font-serif text-xl text-text mb-4">Sumber rujukan</h2>
              <ol className="text-xs text-text-faint space-y-2 list-decimal list-inside">
                <li>Venketasubramanian et al. (2022). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9149343/" className="underline" target="_blank" rel="noopener noreferrer">PMC9149343</a></li>
                <li>Paley et al. (2020). <a href="https://www.ahajournals.org/doi/10.1161/STROKEAHA.119.026618" className="underline" target="_blank" rel="noopener noreferrer">AHA Journals</a></li>
                <li>Mackintosh et al. (2011). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3084849/" className="underline" target="_blank" rel="noopener noreferrer">PMC3084849</a></li>
                <li>Mhd Noor et al. (2021). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7815148/" className="underline" target="_blank" rel="noopener noreferrer">PMC7815148</a></li>
                <li>Koh et al. (2022). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8814857/" className="underline" target="_blank" rel="noopener noreferrer">PMC8814857</a></li>
                <li>Dromerick et al. (2019). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6689791/" className="underline" target="_blank" rel="noopener noreferrer">PMC6689791</a></li>
                <li>de Jonge et al. (2009). <a href="https://pubmed.ncbi.nlm.nih.gov/19260250/" className="underline" target="_blank" rel="noopener noreferrer">PubMed 19260250</a></li>
                <li>NIH (2019). <a href="https://www.nih.gov/news-events/nih-research-matters/critical-time-window-rehabilitation-after-stroke" className="underline" target="_blank" rel="noopener noreferrer">NIH Research Matters</a></li>
                <li>Universiti Washington. <a href="https://medicine.washu.edu/modifying-homes-for-stroke-survivors-saves-lives-extends-independence/" className="underline" target="_blank" rel="noopener noreferrer">WashU Medicine</a></li>
                <li>Frontiers in Neurology (2022). <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2022.996620/full" className="underline" target="_blank" rel="noopener noreferrer">Frontiers</a></li>
              </ol>
            </section>
          </AnimateIn>
        </div>
      </article>
    </main>
  );
}
