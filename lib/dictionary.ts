import "server-only";

interface Dictionary {
  common: any;
  [key: string]: any;
}

// Dictionary loader that gets the right translations based on language
export async function getDictionary(locale: string): Promise<Dictionary> {
  try {
    // Load all translation files for the specified locale
    const common = (await import(`@/config/locales/${locale}/common.json`))
      .default;
    const blog = (await import(`@/config/locales/${locale}/blog.json`)).default;

    // Add additional locale files as needed
    return {
      common,
      blog,

      // Add more translation modules here
    };
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error);

    // Fallback to English if there's an error
    const common = (await import("@/config/locales/en/common.json")).default;
    const blog = (await import("@/config/locales/en/blog.json")).default;

    return {
      common,
      blog,
    };
  }
}
