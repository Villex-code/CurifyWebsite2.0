import OnboardingHero from "@/components/pages/onboarding/OnboardingHero";
import OnboardingTimeline from "@/components/pages/onboarding/OnboardingTimeline";
import { UseCaseCTA } from "@/components/pages/home/UseCaseCTA";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <OnboardingHero />
      <OnboardingTimeline />
      <UseCaseCTA />
    </main>
  );
}
