import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import AppDisplay from "./components/AppDisplay";
import PlantShowcase from "./components/PlantShowcase";
import Sustainability from "./components/Sustainability";
import Implementations from "./components/Implementations";
import TechnicalSpecs from "./components/TechnicalSpecs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <AppDisplay />
      <PlantShowcase />
      <Sustainability />
      <Implementations />
      <TechnicalSpecs />
      <Footer />
    </main>
  );
}
