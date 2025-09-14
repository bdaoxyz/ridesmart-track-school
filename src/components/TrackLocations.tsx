import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Calendar, ArrowRight } from "lucide-react";
import trackImage from "@/assets/track-aerial.jpg";

const TrackLocations = () => {
  const tracks = [
    {
      name: "Circuit of The Americas (COTA)",
      location: "Austin, TX",
      premium: true,
      features: ["Formula 1 Track", "3.426 miles", "20 turns", "World-class facility"],
      nextEvent: "March 15, 2024",
      spotsLeft: 8,
      image: trackImage
    },
    {
      name: "MSR Houston",
      location: "Angleton, TX", 
      premium: false,
      features: ["2.38-mile road course", "17 turns", "Counter-clockwise", "High-speed straights"],
      nextEvent: "March 22, 2024",
      spotsLeft: 12,
      image: trackImage
    },
    {
      name: "Motorsport Ranch Cresson",
      location: "Cresson, TX",
      premium: false,
      features: ["2.9-mile course", "17 turns", "Elevation changes", "Technical layout"],
      nextEvent: "March 29, 2024",
      spotsLeft: 15,
      image: trackImage
    },
    {
      name: "Eagles Canyon Raceway",
      location: "Decatur, TX",
      premium: false,
      features: ["2.7-mile road course", "14 turns", "Flowing layout", "Great for beginners"],
      nextEvent: "April 5, 2024",
      spotsLeft: 20,
      image: trackImage
    },
    {
      name: "G2 Motorsports Park",
      location: "Hockley, TX",
      premium: false,
      features: ["1.7-mile technical course", "Multiple configurations", "Excellent safety record"],
      nextEvent: "April 12, 2024",
      spotsLeft: 18,
      image: trackImage
    },
    {
      name: "Hallett Motor Racing Circuit",
      location: "Hallett, OK",
      premium: false,
      features: ["1.8-mile road course", "10 turns", "Elevation changes", "Historic track"],
      nextEvent: "April 19, 2024",
      spotsLeft: 14,
      image: trackImage
    }
  ];

  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-racing text-4xl lg:text-5xl mb-6">
            Premier <span className="text-primary">Track Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Train at Texas's most prestigious racing circuits. From the world-famous COTA 
            to technical hidden gems, we bring professional instruction to the best tracks in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <Card key={track.name} className="track-card group overflow-hidden border-0 shadow-elevation">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={track.image} 
                  alt={track.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-track"></div>
                
                {/* Premium badge */}
                {track.premium && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white border-0 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Premium Location
                    </Badge>
                  </div>
                )}

                {/* Spots remaining */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`border-0 ${track.spotsLeft <= 10 ? 'bg-primary text-white' : 'bg-success text-white'}`}
                  >
                    {track.spotsLeft} spots left
                  </Badge>
                </div>

                {/* Track name overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-racing text-xl mb-1">{track.name}</h3>
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <MapPin className="h-4 w-4" />
                    {track.location}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Track features */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Track Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {track.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Next event */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Next Event</div>
                    <div className="flex items-center gap-2 font-medium">
                      <Calendar className="h-4 w-4 text-primary" />
                      {track.nextEvent}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full group hover:bg-primary hover:text-white transition-colors">
                  View Events
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Map CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-lg p-8 max-w-2xl mx-auto border">
            <h3 className="font-racing text-2xl mb-4">
              Explore All Locations
            </h3>
            <p className="text-muted-foreground mb-6">
              Use our interactive map to find the perfect track for your next training session.
            </p>
            <Button size="lg" variant="outline" className="group">
              View Interactive Map
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackLocations;