import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillLevels from "@/components/SkillLevels";
import TrackLocations from "@/components/TrackLocations";
import WhyChooseUs from "@/components/WhyChooseUs";
import EventsCalendar from "@/components/EventsCalendar";
import SafetyCommitment from "@/components/SafetyCommitment";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrackLocations />
        <SkillLevels />
        <WhyChooseUs />
        <EventsCalendar />
        <SafetyCommitment />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
