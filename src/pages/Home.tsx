import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import FeaturedAgents from "@/components/home/FeaturedAgents";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactForm from "@/components/home/ContactForm";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <FeaturedAgents />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </main>
  );
};

export default Home;