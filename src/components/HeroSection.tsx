import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-track.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-track"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm font-medium opacity-90">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>6 Premier Tracks</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>10,000+ Riders Trained</span>
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="font-racing text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
            Master Your Ride.
            <br />
            <span className="text-primary-glow">Own The Track.</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Professional motorcycle instruction for every skill level - from street riders to racers
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-hero group">
              Book Your Track Day
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="btn-hero-outline text-primary">
              View Upcoming Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;