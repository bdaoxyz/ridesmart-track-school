import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Shield, BookOpen, Users, Trophy, Clock } from "lucide-react";
import instructorImage from "@/assets/instructors.jpg";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Professional Instructors",
      description: "Certified, experienced racers with proven teaching methods",
      stats: "15+ years average experience",
      details: [
        "Licensed racing instructors",
        "Active competition experience", 
        "Advanced coaching certifications",
        "Continuous education program"
      ]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Structured learning combining classroom theory with track practice",
      stats: "4-phase progression system",
      details: [
        "Pre-track classroom sessions",
        "On-track guided practice",
        "Video analysis sessions",
        "Personalized feedback reports"
      ]
    },
    {
      icon: Shield,
      title: "Safety First Approach",
      description: "Industry-leading safety protocols and emergency response",
      stats: "Zero serious incidents in 2023",
      details: [
        "Professional track marshals",
        "On-site medical support",
        "Comprehensive insurance coverage",
        "Equipment safety inspections"
      ]
    }
  ];

  const achievements = [
    { label: "Riders Trained", value: "10,000+", icon: Users },
    { label: "Years Experience", value: "15+", icon: Clock },
    { label: "Premier Tracks", value: "6", icon: Trophy },
    { label: "Instructor Certifications", value: "25+", icon: GraduationCap }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-racing text-4xl lg:text-5xl mb-6">
            Why Choose <span className="text-primary">RideSmart</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another track day provider. We're a professional motorcycle school 
            dedicated to making you a safer, faster, and more confident rider.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={achievement.label} className="text-center border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-racing text-3xl text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={benefit.title} className="track-curve hover:shadow-elevation transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-speed w-fit">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-racing mb-2">
                    {benefit.title}
                  </CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {benefit.stats}
                  </Badge>
                </CardHeader>

                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="space-y-2 pt-4 border-t border-border">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-left">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Instructor Spotlight */}
        <div className="bg-card rounded-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-racing text-3xl mb-6">
                Meet Our <span className="text-primary">Expert Instructors</span>
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our instructors aren't just teachers—they're active competitors and racing professionals 
                who bring real-world experience to every session. Each instructor undergoes rigorous 
                certification and continues their education to ensure they're teaching the latest 
                techniques and safety protocols.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-gradient-speed rounded-full"></div>
                  <span className="font-medium">Average 15+ years racing experience</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-gradient-speed rounded-full"></div>
                  <span className="font-medium">Certified by national racing organizations</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-gradient-speed rounded-full"></div>
                  <span className="font-medium">Personalized coaching approach</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={instructorImage} 
                  alt="Professional motorcycle instructors"
                  className="w-full rounded-lg shadow-elevation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;