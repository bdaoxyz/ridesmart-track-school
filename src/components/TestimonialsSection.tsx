import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Austin, TX",
      level: "Novice → Intermediate",
      rating: 5,
      text: "I was terrified of track riding before RideSmart. Their instructors made me feel safe and confident from day one. After just three events, I've progressed from novice to intermediate and I'm actually keeping up with riders who've been doing this for years!",
      achievement: "Improved lap times by 8 seconds"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      location: "Houston, TX", 
      level: "Street Rider → Track Enthusiast",
      rating: 5,
      text: "The progression system at RideSmart is incredible. Starting as just a street rider, they taught me everything from proper body position to reading the track. The safety-first approach gave me the confidence to push my limits knowing I was in good hands.",
      achievement: "Completed first track day at COTA"
    },
    {
      id: 3,
      name: "David Chen",
      location: "Dallas, TX",
      level: "Intermediate → Advanced",
      rating: 5,
      text: "What sets RideSmart apart is their data-driven approach. The video analysis and personalized coaching helped me identify exactly where I was losing time. My lap times have improved dramatically, and I finally understand the theory behind fast riding.",
      achievement: "Qualified for amateur racing license"
    },
    {
      id: 4,
      name: "Jennifer Thompson",
      location: "San Antonio, TX",
      level: "Returning After Break",
      rating: 5,
      text: "After a 5-year break from riding, I was nervous about getting back on track. RideSmart's refresher program was perfect - they helped me rebuild my confidence and updated my technique with modern safety practices. Feeling faster and safer than ever!",
      achievement: "Back to intermediate level in 2 events"
    }
  ];

  const stats = [
    { value: "4.9", label: "Average Rating", suffix: "/5" },
    { value: "98", label: "Would Recommend", suffix: "%" },
    { value: "2,400", label: "Success Stories", suffix: "+" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-racing text-4xl lg:text-5xl mb-6">
            Student <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how RideSmart has transformed riders 
            from nervous beginners to confident track enthusiasts.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center border-0 bg-muted/30">
              <CardContent className="p-6">
                <div className="font-racing text-3xl lg:text-4xl text-primary mb-2">
                  {stat.value}<span className="text-lg">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="track-curve hover:shadow-elevation transition-all duration-300">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Progress Badge */}
                <Badge className="mb-4 bg-success/10 text-success border-success/20">
                  {testimonial.level}
                </Badge>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Achievement */}
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="text-sm font-medium text-primary">Key Achievement:</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {testimonial.achievement}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof CTA */}
        <Card className="bg-gradient-to-r from-card to-primary/5 border-primary/10">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="font-racing text-2xl mb-4">
              Join Thousands of Satisfied Riders
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to write your own success story? Our proven curriculum and expert instruction 
              will help you achieve your riding goals safely and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span>4.9/5 stars from 500+ reviews</span>
              </div>
              <div className="text-sm text-muted-foreground">
                • Google Reviews • Facebook • Track Day Forums
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;