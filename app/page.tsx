import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import StatsBar from "@/components/StatsBar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <StatsBar />
      <ContactForm />
      <Footer />
    </main>
  );
}
