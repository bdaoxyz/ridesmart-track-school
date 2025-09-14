import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, DollarSign, ArrowRight } from "lucide-react";

const EventsCalendar = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "COTA Track Day - All Levels",
      date: "March 15, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Circuit of The Americas",
      city: "Austin, TX",
      price: "$395",
      spotsLeft: 8,
      level: "All Levels",
      featured: true,
      description: "Experience the world-famous Formula 1 circuit with professional instruction."
    },
    {
      id: 2,
      title: "MSR Houston Novice Focus",
      date: "March 22, 2024", 
      time: "8:00 AM - 4:00 PM",
      location: "MSR Houston",
      city: "Angleton, TX",
      price: "$295",
      spotsLeft: 12,
      level: "Beginner/Novice",
      featured: false,
      description: "Perfect for new track riders with extra classroom time and 1-on-1 instruction."
    },
    {
      id: 3,
      title: "Cresson Advanced Skills",
      date: "March 29, 2024",
      time: "8:00 AM - 5:00 PM", 
      location: "Motorsport Ranch Cresson",
      city: "Cresson, TX",
      price: "$325",
      spotsLeft: 15,
      level: "Intermediate/Advanced",
      featured: false,
      description: "Technical track layout perfect for developing advanced cornering techniques."
    },
    {
      id: 4,
      title: "Eagles Canyon Beginner Special",
      date: "April 5, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Eagles Canyon Raceway", 
      city: "Decatur, TX",
      price: "$275",
      spotsLeft: 20,
      level: "Beginner",
      featured: false,
      description: "Flowing track layout ideal for building confidence and fundamental skills."
    }
  ];

  const getLevelColor = (level: string) => {
    if (level.includes("Beginner")) return "bg-success/10 text-success border-success/20";
    if (level.includes("Intermediate")) return "bg-accent/10 text-accent-foreground border-accent/20";
    if (level.includes("Advanced")) return "bg-primary/10 text-primary border-primary/20";
    return "bg-muted/10 text-muted-foreground border-muted/20";
  };

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-racing text-4xl lg:text-5xl mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to hit the track? Check out our upcoming events and secure your spot. 
            Early registration recommended - our events fill up fast!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <Card 
              key={event.id} 
              className={`track-curve hover:shadow-elevation transition-all duration-300 ${
                event.featured ? 'border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-2">
                    {event.featured && (
                      <Badge className="bg-primary text-white border-0 mb-2">
                        Featured Event
                      </Badge>
                    )}
                    <CardTitle className="text-xl font-racing leading-tight">
                      {event.title}
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="font-racing text-2xl text-primary">
                      {event.price}
                    </div>
                    <Badge 
                      className={`text-xs ${
                        event.spotsLeft <= 10 ? 'bg-primary text-white' : 'bg-success text-white'
                      } border-0`}
                    >
                      {event.spotsLeft} spots left
                    </Badge>
                  </div>
                </div>
                
                <Badge className={`w-fit ${getLevelColor(event.level)}`}>
                  {event.level}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}, {event.city}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    className={`flex-1 ${
                      event.featured ? 'btn-hero' : 'bg-primary hover:bg-primary/90 text-white'
                    }`}
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="default">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendar CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-racing text-2xl mb-4">
                View Full <span className="text-primary">Calendar</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                See all upcoming events, filter by track location, and never miss an opportunity to improve your riding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="group">
                  View Full Calendar
                  <Calendar className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button size="lg" className="btn-hero">
                  Get Event Notifications
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;