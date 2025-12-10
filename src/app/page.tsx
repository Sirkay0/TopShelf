import TestimonialSection from "@/components/TestimonialSection";
import BuyWeedSection from "../components/BuyWeedSection";
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import NavBar from "../components/NavBar";
import ChooseWeedSection from "@/components/ChooseWeedSection";
import ReferalSection from "@/components/ReferalSection";
import HowToSection from "@/components/HowToSection";

const Home = () => {
  return (
    <main className="overflow-hidden max-w-svw">
      <NavBar />
      <Hero />
      <Manifest />
      <BuyWeedSection />
      <TestimonialSection />
      <ChooseWeedSection />
      <ReferalSection />
      <HowToSection />
    </main>
  );
};

export default Home;
