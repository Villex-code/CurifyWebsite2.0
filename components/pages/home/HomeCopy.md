🏠 HOME PAGE IMPLEMENTATION GUIDE
Target File: app/[lang]/page.tsx
Source Content: content/HomeCopy.md
Strategy: Balance "High-End Tech" visuals with "Clinical Trust" signals.
This document outlines the strict architectural and design requirements for the 7 core components of the Curify Homepage.

1. 🔑 Keyword & SEO Logic (Do Not Alter)
   The content hierarchy is engineered for high-intent B2B search terms.
   Element English Keyword Focus Greek Keyword Focus Logic
   H1 Tag Modern Healthcare Infrastructure Σύγχρονο Λογισμικό Ιατρείου High Volume Hook
   H2 Tag Practice Management Ecosystem Ολοκληρωμένη Διαχείριση Definition
   Trust Bar ISO Certified / Security Πιστοποιημένο / Ασφάλεια Trust Signal
   Features Interoperability / API Ηλεκτρονική Συνταγογράφηση Functional Intent
   ⚠️ Dev Rule: DO NOT change the heading hierarchy (H1 -> H2 -> H3). These are fixed for Google Bots.
2. 🧩 The 7 Core Components
   Component 1: The Hero (<HeroSection />)
   Source: HomeCopy.md Section 1
   Visual Strategy: 10% Copy, 90% Visual Impact.
   Layout:
   Left: H1, Subtext, Dual CTA buttons.
   Right: Abstract UI Animation (Data flowing between Phone & Desktop).
   Performance: The Hero image/animation MUST use the priority prop in Next.js Image.
   Interaction: "Start Free Trial" = Primary (Solid Color). "How it works" = Secondary (Outline/Text).
   Component 2: The Trust Bar (<TrustTicker />)
   Source: HomeCopy.md Section 2
   Visual Strategy: Monochrome (Greyscale) logos. Opacity 70%.
   Behavior: Infinite auto-scroll (Marquee) or static centered grid depending on viewport width.
   Assets Required:
   Forbes 30 Under 30 Badge
   Eurobank Logo
   Egg Incubator Logo
   NBG Business Seeds Logo
   Component 3: The "New Reality" (<ProblemSolutionSplit />)
   Source: HomeCopy.md Section 3
   Visual Strategy: High Contrast Split Screen.
   Graphic: "Old Way" (Messy papers/wires) vs "Curify Way" (Clean Dashboard).
   Key Tech: Use a subtle parallax effect on the image if possible, but keep text static for readability.
   Component 4: The Bento Grid (<FeatureGrid />)
   Source: HomeCopy.md Section 4
   Visual Strategy: 2x2 Grid or "Bento" Box Layout. Glassmorphism styling (frosted glass background).
   The 4 Pillars:
   Workflows (AI): Icon = Sparkles/Brain.
   Analytics (Data): Icon = Graph/Chart.
   Patient App (Mobile): Icon = Smartphone.
   Security (Trust): Icon = Shield/Lock.
   SEO Note: Ensure the text inside these boxes is rendered as <p>, not part of an image/SVG, so Google can index terms like "GDPR" and "AI Diagnostics."
   Component 5: The Trophy Room (<AwardsSection />)
   Source: HomeCopy.md Section 5
   Visual Strategy: Dark Mode / Premium Feel. Gold and Silver accents.
   Content: This expands on the Trust Bar logos.
   Layout:
   Block A: Forbes Badge + Text.
   Block B: Banking/Incubator Badges + Text.
   Goal: Prove financial stability to risk-averse B2B buyers.
   Component 6: User Segments (<PersonaCards />)
   Source: HomeCopy.md Section 6
   Layout: 3 Columns (Clinics | Doctors | Patients).
   Interaction: Hover state highlights the specific column.
   Iconography: Minimalist line icons.
   Component 7: Final CTA (<FooterCallout />)
   Source: HomeCopy.md Section 7
   Design: Large typography, plenty of whitespace.
   Restriction: Do not include navigation links in this specific block. The only exit route should be the "Book Discovery Call" button.
3. 🎨 Asset Checklist for Designers
   Before coding, ensure public/assets/home/ contains:

hero-dashboard-mockup.png (High Res)

trust-logos-sprite.svg (Greyscale)

old-vs-new-graphic.png

icon-ai-workflow.svg

icon-analytics.svg

icon-mobile-app.svg

icon-security-shield.svg

forbes-badge-gold.png 4. 🛠 Technical Implementation (Next.js)
Directory: app/[lang]/page.tsx
code
Tsx
import { HeroSection } from "@/components/home/Hero";
import { TrustTicker } from "@/components/home/TrustTicker";
import { BentoGrid } from "@/components/home/BentoGrid";
// ... other imports

export default function HomePage({ params: { lang } }) {
// 1. Fetch content based on Lang (Mock function)
const content = getDictionary(lang).home;

return (

<main className="flex flex-col gap-24">
{/_ 2. Pass text as props to Client Components _/}
<HeroSection 
        title={content.hero.h1} 
        subtitle={content.hero.sub} 
        cta={content.hero.cta} 
      />

      <TrustTicker logos={['forbes', 'eurobank', 'nbg']} />

      <ProblemSolutionSplit text={content.problem} />

      {/* 3. The Feature Grid (Critical for SEO) */}
      <BentoGrid features={content.features} />

      <AwardsSection />

      <PersonaCards />

      <FooterCallout />
    </main>

);
}
