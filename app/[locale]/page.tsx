import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";
import Footer from "@/components/layout/footer";
import Hero from "@/components/pages/home/Hero/Hero";
import BrandRecognition from "@/components/pages/home/BrandRecognition";
import ProblemSolution from "@/components/pages/home/ProblemSolution/ProblemSolution";
import CoreCapabilities from "@/components/pages/home/CoreCapabilities/CoreCapabilities";
import TrophyRoom from "@/components/pages/home/TrophyRoom/TrophyRoom";
import UserSegments from "@/components/pages/home/UserSegments/UserSegments";
import Faq from "@/components/pages/home/FAQ";
import UseCaseCTA from "@/components/pages/home/UseCaseCTA";
import BlogShowcase from "@/components/pages/home/BlogShowcase";
import { client } from "@/sanity/lib/client";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="">
      <Hero />
      <BrandRecognition />
      <ProblemSolution />
      <CoreCapabilities />
      <TrophyRoom />
      <UserSegments />
      <Faq />
      <UseCaseCTA />
    </div>
  );
}
