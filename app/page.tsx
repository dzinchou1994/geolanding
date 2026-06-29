import About from "@/components/About";
import Cities from "@/components/Cities";
import Footer, { CTABanner } from "@/components/Footer";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Cities />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
