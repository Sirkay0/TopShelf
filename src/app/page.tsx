import BuyWeedSection from "../components/BuyWeedSection";
import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main className="overflow-hidden max-w-svw">
      <NavBar />
      <Hero />
      <Manifest />
      <BuyWeedSection />
    </main>
  );
};

export default Home;
