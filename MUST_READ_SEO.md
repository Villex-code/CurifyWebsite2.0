# CURIFY PROJECT: SEO & ARCHITECTURE RULES (STRICT)

> **CONTEXT FOR AI AGENT:**
> This project is a B2B Healthcare SaaS marketing site (Curify).
> **Primary Target:** Greece (el) + International (en).
> **Framework:** Next.js (App Router).
>
> **CRITICAL PRIORITY:** SEO Ranking, Core Web Vitals (Speed), and Bot Crawlability.
> **DO NOT** prioritize developer convenience over SEO structure.
> **SOURCE MATERIAL:** Refer to "Curify SEO Playbook" (PDF 1) and "Curify Technical USPs" (PDF 2) for content logic.

---

## 1. CORE ARCHITECTURE: Internationalization (i18n)

**Rule:** The file system drives the URL structure. We MUST use separate URLs for languages to satisfy Hreflang requirements.

- **Directory Structure:** All page routes must live inside `app/[lang]/`.
- **Root Layout:** `app/[lang]/layout.tsx` is the **ONLY** place where `<html>` and `<body>` tags exist.
- **Preventing Errors:**
  - **DO NOT** create a `layout.tsx` in the root `app/` folder that returns UI. The root layout should only handle the `[lang]` param generation if necessary, or simply not exist if `[lang]` is the root.
  - **NEVER** nest `<html>` tags. This breaks hydration and hot-reloads.

### Middleware Logic (Prevent Lag)

To avoid the "laggy redirect" issue experienced previously:

1.  Middleware must **explicitly skip** all internal assets (`_next`, `api`, images, favicons, `.json`, `.xml`).
2.  Only execute locale detection on actual page routes.
3.  **Default locale:** `el` (Greek is the primary market).

---

## 2. RENDERING STRATEGY: Server vs. Client

**Rule:** Default to Server Components. Isolate Client Components.

**❌ BAD PATTERN (Do Not Use):**
Putting `"use client"` at the top of `page.tsx` just to run an animation. This kills SEO because bots may see an empty shell.

**✅ GOOD PATTERN (Use This):**
Keep `page.tsx` as a Server Component for metadata and text, and import interactive parts as children.

```tsx
// app/[lang]/page.tsx
import { Metadata } from "next";
import HeroAnimation from "@/components/HeroAnimation"; // Client Component with "use client"

// 1. Metadata generated on Server (Google sees this instantly)
export const metadata: Metadata = {
  title: "Curify | Medical CRM",
  description: "...",
};

export default function Page({ params: { lang } }) {
  return (
    <main>
      {/* 2. Semantic HTML (Google reads this instantly) */}
      <h1>
        {lang === "el" ? "Ολοκληρωμένη Διαχείριση" : "Holistic Management"}
      </h1>
      <p className="seo-text">IoT-enabled pharmacy management and CRM.</p>

      {/* 3. Heavy JS loads only for this specific component */}
      <HeroAnimation />
    </main>
  );
}
```

---

## 3. METADATA & HREFLANG (Crucial for Playbook)

**Rule:** Every page must export dynamic metadata with proper Hreflang tags (PDF 1, Page 10).

**Implementation Template:**

```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const isGreek = params.lang === "el";
  const baseUrl = "https://curifyapp.com";
  // Use path to handle subpages (e.g., /features/crm)
  // Ensure trailing slashes are handled consistently

  return {
    title: isGreek
      ? "Curify | Λογισμικό Ιατρείου & Κλινικής"
      : "Curify | Clinic Management Software",
    description: isGreek
      ? "Το ολιστικό σύστημα διαχείρισης για ιατρεία στην Ελλάδα. CRM, Συνταγογράφηση και IoT."
      : "The holistic healthcare management platform. CRM, E-prescribing, and IoT integration.",
    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        el: `${baseUrl}/el`,
        en: `${baseUrl}/en`,
      },
    },
  };
}
```

---

## 4. SCHEMA MARKUP (JSON-LD)

**Rule:** Implement "SoftwareApplication" and "FAQPage" schemas.

- **Context:** Refer to PDF 1 (Page 9) for the exact JSON structure.
- **Implementation:** Inject JSON-LD via a `<script type="application/ld+json">` tag inside the Server Component.
- **Product:** Define `applicationCategory: "HealthApplication"`.
- **Rating:** Include aggregate ratings (e.g., "4.8/5") to attempt to trigger Rich Snippets (Star ratings) in Search Results.

---

## 5. CONTENT & COPYWRITING (Problem-Solution Architecture)

**Rule:** Do not write generic "Feature" headers. Use the "Problem -> Solution" framework defined in PDF 1 (Page 3).

- **Source Material:** Use technical specs from PDF 2 (Siemens PLC, Multi-clustering, Node.js, React, Neo4J) to establish authority.
- **Formatting Rules:**
  - **H1:** Must be the primary Keyword or Question (e.g., "Why Curify for Small Clinics?").
  - **First Paragraph:** Direct answer (2 sentences max).
  - **Word Count:** 1,500+ words for "Use Case" pages (Deep content).
  - **Structure:** Problem → Context → Curify Solution.

---

## 6. PERFORMANCE (Core Web Vitals)

**Rule:** LCP must be under 2.5s. FID under 100ms.

- **Images:** ALWAYS use `<Image />` from `next/image`.
  - Add `priority` prop to the LCP image (the Hero image).
  - All other images must have `alt` tags containing keywords.
- **Fonts:** Use `next/font/google` (Inter/Roboto). Do not load fonts from external CDNs to avoid layout shifts (CLS).
- **Scripts:** Third-party scripts (Chatbots, Analytics) must use `next/script` with `strategy="lazyOnload"` or `strategy="afterInteractive"`.

---

## 7. BANNED PRACTICES (Strictly Prohibited)

- **NO Client-Side Translation Libraries:** Do not use libraries that change text via JS without changing the URL. The URL must reflect the language (`/el` or `/en`).
- **NO dangerouslySetInnerHTML:** Unless absolutely necessary for Schema or sanitized CMS content.
- **NO Link Farms:** Do not link to low-quality directory sites.
- **NO "Lorem Ipsum":** Never commit placeholder text. Use real text from the PDFs.
