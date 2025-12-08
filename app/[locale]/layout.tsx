import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import FooterInfo from "@/components/layout/FooterInfo";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const facultyGlyphic = localFont({
  src: "../../public/fonts/FacultyGlyphic-Regular.ttf",
  variable: "--font-faculty",
  weight: "400",
});
const playfairDisplay = localFont({
  src: "../../public/fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
  weight: "400 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curifyapp.com"),
  title: {
    default: "Curify - Healthcare Operating System",
    template: "%s | Curify",
  },
  description:
    "Unified healthcare management system for clinics, offices, and hospitals. Features EMR, billing, inventory, and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://curifyapp.com",
    siteName: "Curify",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Structured Data for Organization & Software Application
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Curify",
        url: "https://www.curify.app",
        logo: "https://www.curify.app/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/curify",
          "https://twitter.com/curify",
          "https://www.facebook.com/curify",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+30-210-XXXXXXX", // Add your phone number
          contactType: "customer service",
          areaServed: ["GR", "US", "GB"],
          availableLanguage: ["Greek", "English"],
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Curify",
        applicationCategory: "MedicalApplication",
        operatingSystem: "Web, iOS, Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        description:
          "Integrated healthcare management system for clinics and hospitals.",
      },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SJC41HFXN6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJC41HFXN6');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${facultyGlyphic.variable} ${playfairDisplay.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="pt-8 md:pt-16 w-full h-full">{children}</div>
          <FooterInfo />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
