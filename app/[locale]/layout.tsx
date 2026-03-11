import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.curifyapp.com"),
    title: {
      default: t("title"),
      template: `%s | Curify`,
    },
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale === "el" ? "el_GR" : "en_US",
      url: `https://www.curifyapp.com/${locale}`,
      siteName: "Curify",
    },
    alternates: {
      canonical: `https://www.curifyapp.com/${locale}`,
      languages: {
        en: "https://www.curifyapp.com/en",
        el: "https://www.curifyapp.com/el",
        "x-default": "https://www.curifyapp.com/el",
      },
    },
  };
}

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
        url: "https://www.curifyapp.com/",
        logo: "https://www.curifyapp.com/logo.png",
        sameAs: [
          "https://www.instagram.com/appcurify/",
          "https://www.linkedin.com/company/curify-app/",
          "https://www.youtube.com/@CurifyApp",
          "https://www.google.com/maps/place/Curify/@38.0366064,19.0375288,6z/data=!3m1!4b1!4m6!3m5!1s0x88658e8460622bd:0x8087b4160bd5d7d3!8m2!3d38.1465253!4d24.3244339!16s%2Fg%2F11ww_lc7xf?entry=ttu&g_ep=EgoyMDI2MDMwOS4wIKXMDSoASAFQAw%3D%3D",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+30 698 754 3041",
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
          "Ολοκληρωμένο ιατρικό λογισμικό για τη διαχείριση ιατρείων, κλινικών και νοσοκομείων. Περιλαμβάνει ηλεκτρονικό φάκελο ασθενή (EHR), συνταγογράφηση και CRM.",
        featureList: [
          "Ηλεκτρονικός Φάκελος Ασθενή (EHR)",
          "Ηλεκτρονική Συνταγογράφηση",
          "Διαχείριση Ραντεβού & CRM",
          "Smart Inventory",
          "IoT Integration",
        ],
        // aggregateRating: {
        //   "@type": "AggregateRating",
        //   ratingValue: "5.0",
        //   reviewCount: "4",
        // },
      },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3PLR5J4');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${facultyGlyphic.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3PLR5J4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="pt-8 md:pt-16 w-full h-full">{children}</div>
          <FooterInfo />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
