import HajjSection from "@/components/sections/HajjSection";
import KnowAllSection from "@/components/sections/knowAllSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import StepsSection from "@/components/sections/StepsSection";
import AccompanimentSection from "@/components/sections/AccompanimentSection";
import PricingSection from "@/components/sections/PricingSection";

export default function Home() {
  return (
    <div className="min-w-full">
      <main className="min-h-screen flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-gray-50">
        <HajjSection />
        <ProblemSolutionSection />
        <StepsSection />
        <KnowAllSection />
        <AccompanimentSection />
        <PricingSection />
      </main>
    </div>
  );
}
