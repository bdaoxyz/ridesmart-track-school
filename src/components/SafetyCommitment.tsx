import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

const SafetyCommitment = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "Track Marshals",
      description: "Professional marshals at every corner with direct communication to control tower"
    },
    {
      icon: Heart,
      title: "Medical Support",
      description: "On-site medical personnel and ambulance service at every event"
    },
    {
      icon: Users,
      title: "Insurance Coverage",
      description: "Comprehensive track day insurance included for all registered participants"
    },
    {
      icon: Award,
      title: "Equipment Inspection",
      description: "Thorough safety inspection of all motorcycles and protective gear"
    }
  ];

  const requirements = [
    "DOT approved helmet (Snell recommended)",
    "Full leather suit or separate jacket and pants",
    "Protective boots covering ankles",
    "Motorcycle gloves",
    "Back protector (recommended)",
    "Motorcycle in good mechanical condition"
  ];

  return (
    <section id="safety" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-racing text-4xl lg:text-5xl mb-6">
            Safety <span className="text-primary">First</span> Always
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your safety is our top priority. We maintain the highest safety standards 
            in the industry while ensuring you have the confidence to push your limits.
          </p>
        </div>

        {/* Safety Statistics */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 bg-success/10 text-success border border-success/20 rounded-full px-8 py-4">
            <CheckCircle className="h-6 w-6" />
            <span className="font-racing text-lg">Zero Serious Incidents in 2023</span>
            <CheckCircle className="h-6 w-6" />
          </div>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {safetyFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="text-center border-0 bg-card/50 hover:bg-card transition-colors">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-success/10 w-fit">
                    <IconComponent className="h-8 w-8 text-success" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Roadracing World Action Fund Partnership */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Proud Partner
            </Badge>
            <h3 className="font-racing text-3xl mb-6">
              Roadracing World Action Fund Partnership
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're proud partners of the Roadracing World Action Fund, supporting their mission 
              to improve track safety through the Air Fence Initiative. Every RideSmart event 
              contributes to making racing safer for everyone.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Air fence installations at partner tracks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Safety equipment research and development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Rider safety education programs</span>
              </div>
            </div>
            <Button className="btn-hero">
              Support the Cause
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <Card className="track-curve">
            <CardContent className="p-8">
              <h4 className="font-racing text-xl mb-4 text-center">
                Safety Equipment Requirements
              </h4>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Note:</strong> All equipment is subject to inspection. 
                  Rental gear is available for beginners. Contact us for details.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Protocols */}
        <Card className="bg-gradient-to-r from-card to-muted/20 border-0">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="font-racing text-2xl mb-6">
              Comprehensive Emergency Protocols
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-racing text-primary mb-2">30sec</div>
                <div className="text-sm text-muted-foreground">Average response time to incidents</div>
              </div>
              <div>
                <div className="text-3xl font-racing text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Medical support during events</div>
              </div>
              <div>
                <div className="text-3xl font-racing text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Insurance coverage included</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SafetyCommitment;