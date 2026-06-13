import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Branches from "./components/Branches";
import MenuShowcase from "./components/MenuShowcase";
import FullMenu from "./components/FullMenu";
import Catering from "./components/Catering";
import Reviews from "./components/Reviews";
import Careers from "./components/Careers";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FlexEffects from "./components/FlexEffects";
import MarqueeStrip from "./components/MarqueeStrip";

export default function Home() {
  return (
    <div className="relative">
      <FlexEffects />
      <Navbar />
      <main className="pb-[72px] lg:pb-0">
        <Hero />
        <OurStory />
        <MarqueeStrip variant="dark" />
        <Branches />
        <MarqueeStrip variant="light" />
        <MenuShowcase />
        <MarqueeStrip variant="dark" />
        <FullMenu />
        <MarqueeStrip variant="light" />
        <Catering />
        <Reviews />
        <MarqueeStrip variant="dark" />
        <Careers />
        <MarqueeStrip variant="light" />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
