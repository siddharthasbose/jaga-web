import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jaga.Care — Home Ready Before They Are",
    template: "%s | Jaga.Care",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  description:
    "We set up grab bars, hospital beds, and safety equipment so your parent's home is ready before hospital discharge. Serving Malaysia and Singapore.",
  keywords: [
    // English - Malaysia
    "home safety setup Malaysia",
    "elderly care Malaysia",
    "post-stroke home setup Malaysia",
    "grab bars installation Malaysia",
    "hospital bed rental Malaysia",
    "home modification elderly Malaysia",
    "fall prevention elderly Malaysia",
    "elderly home care KL",
    "elderly home care Kuala Lumpur",
    "elderly home care Penang",
    "elderly home care Johor Bahru",
    "home hospital bed Malaysia",
    "wheelchair rental Malaysia",
    "bathroom safety elderly Malaysia",
    "anti-slip bathroom Malaysia",
    "home care after stroke Malaysia",
    "home care after surgery Malaysia",
    "home care after hip replacement",
    "discharge planning Malaysia",
    "hospital discharge home setup",
    "parent coming home from hospital",
    "elderly parent care Malaysia",
    "aging parent home safety",
    "caregiver Malaysia",
    "home nursing Malaysia",
    "penjagaan warga emas",
    "penjagaan orang tua",
    "peralatan keselamatan rumah warga emas",
    "katil hospital sewa Malaysia",
    "palang bilik mandi warga emas",
    // English - Singapore
    "elderly care Singapore",
    "home safety setup Singapore",
    "grab bars installation Singapore",
    "hospital bed rental Singapore",
    "post-stroke home care Singapore",
    "elderly home modification Singapore",
    "fall prevention Singapore",
    "caregiver Singapore",
    "home care after stroke Singapore",
    "home care after surgery Singapore",
    "discharge planning Singapore",
    "elderly parent care Singapore",
    "bathroom safety elderly Singapore",
    // Chinese
    "老人居家护理",
    "中风后家庭护理",
    "老人家居安全",
    "医院病床出租",
    // HIGH PRIORITY - Low competition, high intent (from keyword research)
    "post stroke care at home",
    "after stroke home preparation",
    "prepare home after stroke",
    "stroke recovery malaysia",
    "stroke rehabilitation KL",
    "stroke caregiver support malaysia",
    "pemulihan strok di rumah",
    "home setup for bedridden patient",
    "bringing patient home from hospital",
    "hospital discharge checklist malaysia",
    "what to buy before hospital discharge",
    "home safety modification service",
    "elderly home safety assessment",
    "grab bar installation malaysia",
    "bathroom safety elderly malaysia",
    "anti-slip floor treatment malaysia",
    "fall prevention home elderly",
    "home modification elderly singapore",
    "jaga orang tua",
    "sewa katil hospital",
    "medical equipment rental malaysia",
    // General
    "home care setup",
    "elderly home equipment",
    "make home safe for elderly",
    "home recovery after hospital",
    "prepare home for elderly parent",
  ],
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Jaga Care",
    title: "Jaga Care — Home Ready Before They Are",
    description:
      "Home safety setup for aging parents. Serving Malaysia & Singapore.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jaga Care",
  description: "Home safety setup and care coordination for aging parents",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jagacare.com",
  areaServed: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Singapore" },
  ],
  serviceType: "Home Healthcare Setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:bg-green focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main id="main-content" className="flex-1 pt-[80px]">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
