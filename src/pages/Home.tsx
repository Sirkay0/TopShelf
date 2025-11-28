import Hero from "../components/Hero";
import Manifest from "../components/Manifest";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main className="overflow-hidden max-w-svw">
      <NavBar />
      <Hero />
      <Manifest />  
    </main>
  );
};

export default Home;
