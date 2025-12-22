import TestimonialSection from "@/components/TestimonialSection";
import BuyWeedSection from "../components/BuyWeedSection";
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";

import ChooseWeedSection from "@/components/ChooseWeedSection";
import ReferalSection from "@/components/ReferalSection";
import HowToSection from "@/components/HowToSection";
import Services from "@/components/Services";
import RecentlyAdded from "@/components/RecentlyAdded";
import StrainTypes from "@/components/StrainTypes";
import WeedEducation from "@/components/WeedEducation";


const Home = () => {
  return (
    <main className="overflow-hidden max-w-svw">
      <Hero />
      <Manifest />
      <BuyWeedSection />
      <TestimonialSection />
      <ChooseWeedSection />
      <ReferalSection />
      <HowToSection />
      <Services />
      <RecentlyAdded />
      <StrainTypes />
      <WeedEducation />
      
    </main>
  );
};

export default Home;
