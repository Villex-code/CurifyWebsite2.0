# Language Internalization Guide (next-intl)

This project uses **`next-intl`** for internationalization (i18n) with the Next.js App Router.
**Do NOT use `react-i18next` or standard `i18next` libraries.**

## 1. Project Structure for Translations

We use a **multi-file** JSON structure to keep translations organized.

### Directory Layout

```
/messages
  /en
    HomePage.json
    blog.json
    FooterContact.json
    ...
  /el
    HomePage.json
    blog.json
    FooterContact.json
    ...
/i18n
  request.ts   (Configures how messages are loaded)
  routing.ts   (Defines locales and navigation wrappers)
/app
  /[locale]    (Localized routes)
```

### Supported Locales

- `en` (English) - Default
- `el` (Greek)

## 2. How to Add New Translations

1.  **Create JSON Files**:
    Create a new JSON file in **both** `messages/en/` and `messages/el/` with the same filename (e.g., `AboutPage.json`).

    _messages/en/AboutPage.json_

    ```json
    {
      "title": "About Us",
      "description": "We are a great team."
    }
    ```

    _messages/el/AboutPage.json_

    ```json
    {
      "title": "Σχετικά με εμάς",
      "description": "Είμαστε μια υπέροχη ομάδα."
    }
    ```

2.  **Register in `i18n/request.ts`**:
    You **MUST** manually import and add the new file to the `messages` object in `i18n/request.ts`.

    ```typescript
    // i18n/request.ts
    export default getRequestConfig(async ({ requestLocale }) => {
      // ...
      return {
        messages: {
          // ... existing files
          AboutPage: (await import(`../messages/${locale}/AboutPage.json`))
            .default,
        },
      };
    });
    ```

    _Note: We use explicit keys (e.g., `AboutPage`) to namespace the translations._

## 3. Using Translations in Components

### Client Components (`"use client"`)

```typescript
"use client";
import { useTranslations } from "next-intl";

export default function MyComponent() {
  // "AboutPage" matches the key used in i18n/request.ts
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

### Server Components

```typescript
import { getTranslations } from "next-intl/server";

export default async function MyServerComponent() {
  const t = await getTranslations("AboutPage");

  return <h1>{t("title")}</h1>;
}
```

### Navigation (Links & Router)

Always use the `Link` and `useRouter` exported from our routing configuration, **not** from `next/link` or `next/navigation` directly (unless you know what you are doing regarding locale prefixes).

```typescript
import { Link, useRouter, usePathname } from "@/i18n/routing";

// ...
<Link href="/about">About Us</Link>; // Automatically handles /en/about or /el/about
```

## 4. Migration Checklist (Legacy `react-i18next` -> `next-intl`)

If you see code using `react-i18next`, refactor it:

- **REMOVE**: `import { useTranslation } from "react-i18next";`
- **ADD**: `import { useTranslations } from "next-intl";`
- **CHANGE**: `const { t } = useTranslation();` -> `const t = useTranslations("Namespace");`
- **REMOVE**: usage of `i18n` object (e.g. `i18n.language`). Use `useLocale()` from `next-intl` to get current language code.

## 5. Common Errors

- `MISSING_MESSAGE: Could not resolve...`:
  - Check if the JSON file exists in `messages/{locale}/`.
  - Check if the file is imported in `i18n/request.ts` with the correct key.
  - Check if you are using the correct namespace in `useTranslations("Namespace")`.
- **Hydration Mismatch**:
  - Ensure you don't have nested `<html>` or `<body>` tags. Only `app/[locale]/layout.tsx` should contain them.
