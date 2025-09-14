import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Track Locations", href: "#locations" },
    { name: "Skill Levels", href: "#levels" },
    { name: "Upcoming Events", href: "#events" },
    { name: "Safety Protocols", href: "#safety" },
    { name: "About RideSmart", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  const trackLocations = [
    "Circuit of The Americas (COTA)",
    "MSR Houston",
    "Motorsport Ranch Cresson", 
    "Eagles Canyon Raceway",
    "G2 Motorsports Park",
    "Hallett Motor Racing Circuit"
  ];

  const supportLinks = [
    { name: "Registration Help", href: "#" },
    { name: "Equipment Guide", href: "#" },
    { name: "FAQ", href: "#faq" },
    { name: "Cancellation Policy", href: "#" },
    { name: "Safety Requirements", href: "#safety" },
    { name: "Group Rates", href: "#" },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="font-racing text-3xl mb-4">
                Ride<span className="text-primary-glow">Smart</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Texas's premier motorcycle track day school. Professional instruction 
                for every skill level at the state's best racing circuits.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span className="text-sm">(555) TRACK-DAY</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span className="text-sm">info@ridesmart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span className="text-sm">Austin, Texas</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-racing text-lg mb-6 text-primary-glow">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-primary-glow transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Track Locations */}
          <div>
            <h3 className="font-racing text-lg mb-6 text-primary-glow">Track Locations</h3>
            <ul className="space-y-3">
              {trackLocations.map((track) => (
                <li key={track}>
                  <span className="text-white/80 text-sm">{track}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-racing text-lg mb-6 text-primary-glow">Support</h3>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-primary-glow transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Quick Subscribe</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm h-9"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 px-3">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/60">
            <span>© 2024 RideSmart. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-glow transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-glow transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-glow transition-colors">Waiver</a>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/60">Proud partner of:</span>
            <div className="text-sm text-white/80 font-medium">
              Roadracing World Action Fund
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;