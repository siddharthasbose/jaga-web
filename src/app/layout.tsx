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
    default: "Jaga Care — Home Ready Before They Are",
    template: "%s | Jaga Care",
  },
  description:
    "We set up grab bars, hospital beds, and safety equipment so your parent's home is ready before hospital discharge. Serving Malaysia and Singapore.",
  keywords: [
    "home safety setup Malaysia",
    "elderly care Singapore",
    "post-stroke home setup",
    "grab bars installation",
    "hospital bed rental Malaysia",
    "home modification elderly",
    "fall prevention elderly Malaysia",
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
        <main id="main-content" className="flex-1 pt-[72px]">
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
