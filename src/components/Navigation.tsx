import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/ridesmart-logo-final.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Track Locations', href: '#locations' },
    { name: 'Skill Levels', href: '#levels' },
    { name: 'Events', href: '#events' },
    { name: 'Safety', href: '#safety' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary/95 backdrop-blur-md shadow-elevation' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="RideSmart Motorcycle School" 
              className="h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary transition-colors duration-200 font-medium text-shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+1-555-TRACK-DAY" 
              className="flex items-center gap-2 text-white hover:text-primary transition-colors text-shadow-sm"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call Now</span>
            </a>
            <Button className="btn-hero">
              Register Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-secondary/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a 
                  href="tel:+1-555-TRACK-DAY" 
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">Call Now</span>
                </a>
                <Button className="btn-hero w-full">
                  Register Today
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;