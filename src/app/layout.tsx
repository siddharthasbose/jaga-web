import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
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
    "Home safety setup for aging parents in Kuala Lumpur and Singapore. Grab bars, hospital beds, post-discharge care — installed in days, not weeks. WhatsApp Sumira to start.",
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
  alternates: {
    canonical: "https://www.jaga.care",
    languages: {
      "en-MY": "https://www.jaga.care",
      "en-SG": "https://www.jaga.care",
      "ms-MY": "https://www.jaga.care/ms",
      "x-default": "https://www.jaga.care",
    },
  },
  verification: {
    google: "4kcQrkkp672Ph2HA09SVfWdMlrZjjmvtv6KplzH3-zQ",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.jaga.care",
    siteName: "Jaga.Care",
    title: "Jaga.Care — Home Ready Before They Are",
    description:
      "Home safety setup for aging parents. Serving Malaysia & Singapore.",
    images: [
      {
        url: "https://www.jaga.care/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jaga.Care — Home Ready Before They Are",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaga.Care — Home Ready Before They Are",
    description: "Home safety setup for aging parents. Serving Malaysia & Singapore.",
    images: ["https://www.jaga.care/images/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.jaga.care/#localbusiness",
  name: "Jaga.Care",
  description:
    "Home safety setup and care coordination for aging parents in Malaysia and Singapore. Grab bars, hospital beds, wheelchairs, and post-discharge home modifications.",
  url: "https://www.jaga.care",
  email: "hello@jaga.care",
  telephone: "+6589499681",
  priceRange: "S$$",
  image: "https://www.jaga.care/images/og-image.png",
  areaServed: [
    {
      "@type": "Country",
      name: "Malaysia",
      sameAs: "https://en.wikipedia.org/wiki/Malaysia",
    },
    {
      "@type": "Country",
      name: "Singapore",
      sameAs: "https://en.wikipedia.org/wiki/Singapore",
    },
    { "@type": "City", name: "Kuala Lumpur" },
    { "@type": "City", name: "Petaling Jaya" },
    { "@type": "City", name: "Singapore" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+6589499681",
      contactType: "customer support",
      areaServed: ["MY", "SG"],
      availableLanguage: ["en", "ms"],
    },
  ],
  serviceType: "Home Healthcare Setup",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Care Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Make it safe",
          description: "Fall prevention and home safety — grab bars, anti-slip mats, cameras, accessible bed setup. For parents who are mostly independent but at risk.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Help them move",
          description: "Full mobility equipment — hospital bed, wheelchair, grab bars, and anti-slip mats. For parents with significantly reduced mobility after stroke or surgery.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Someone by their side",
          description: "Complete care with dedicated caregiver — all safety equipment plus daily hands-on support for parents recovering from major surgery or with cognitive decline.",
        },
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const pathname = hdrs.get("x-pathname") || hdrs.get("x-invoke-path") || "";
  const isMalay = pathname.startsWith("/ms");
  const lang = isMalay ? "ms-MY" : "en";
  return (
    <html
      lang={lang}
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
        <main id="main-content" className="flex-1 pt-[72px] md:pt-[80px]">
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
        {process.env.NEXT_PUBLIC_POSTHOG_KEY && (
          <Script id="posthog" strategy="afterInteractive">
            {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('${process.env.NEXT_PUBLIC_POSTHOG_KEY}',{api_host:'/ingest',ui_host:'https://us.posthog.com',person_profiles:'identified_only'})`}
          </Script>
        )}
      </body>
    </html>
  );
}
