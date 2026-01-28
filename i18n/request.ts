import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      HomePage: (await import(`../messages/${locale}/HomePage.json`)).default,
      Metadata: (await import(`../messages/${locale}/Metadata.json`)).default,
      blog: (await import(`../messages/${locale}/blog.json`)).default,
      NotFoundPage: (await import(`../messages/${locale}/NotFoundPage.json`))
        .default,
      FooterContact: (await import(`../messages/${locale}/FooterContact.json`))
        .default,
      DeviceScroll: (await import(`../messages/${locale}/DeviceScroll.json`))
        .default,
      faq: (await import(`../messages/${locale}/FAQ.json`)).default,
      Hero: (await import(`../messages/${locale}/Hero.json`)).default,
      home: (await import(`../messages/${locale}/home.json`)).default,
      about: (await import(`../messages/${locale}/about.json`)).default,
      footer: (await import(`../messages/${locale}/footer.json`)).default,
      nav: (await import(`../messages/${locale}/nav.json`)).default,
      products: (await import(`../messages/${locale}/products.json`)).default,
      features: (await import(`../messages/${locale}/features.json`)).default,
      contact: (await import(`../messages/${locale}/contact.json`)).default,
      ui: (await import(`../messages/${locale}/ui.json`)).default,
      useCases: (await import(`../messages/${locale}/useCases.json`)).default,
      HomeFeatures: (await import(`../messages/${locale}/HomeFeatures.json`))
        .default,
    },
  };
});
