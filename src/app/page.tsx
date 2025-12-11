import TestimonialSection from "@/components/TestimonialSection";
import BuyWeedSection from "../components/BuyWeedSection";
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import NavBar from "../components/NavBar";
import ChooseWeedSection from "@/components/ChooseWeedSection";
import ReferalSection from "@/components/ReferalSection";
import HowToSection from "@/components/HowToSection";
import Services from "@/components/Services";
import RecentlyAdded from "@/components/RecentlyAdded";
import StrainTypes from "@/components/StrainTypes";
import WeedEducation from "@/components/WeedEducation";
import ReavelCoupon from "@/components/ReavelCoupon";
import Footer from "@/components/Footer";

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
      <Services />
      <RecentlyAdded />
      <StrainTypes />
      <WeedEducation />
      <ReavelCoupon />
      <Footer />
    </main>
  );
};

export default Home;
