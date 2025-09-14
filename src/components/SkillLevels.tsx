import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Zap, Trophy, Gauge } from "lucide-react";

const SkillLevels = () => {
  const skillLevels = [
    {
      icon: BookOpen,
      level: "Street Rider",
      subtitle: "Beginner",
      progress: 25,
      description: "Perfect for riders new to track environments. Learn the fundamentals of track riding safely.",
      objectives: [
        "Basic track etiquette and safety",
        "Proper body positioning",
        "Smooth throttle and brake control",
        "Understanding racing lines"
      ],
      color: "from-success to-success/80"
    },
    {
      icon: Gauge,
      level: "Track Novice",
      subtitle: "Developing",
      progress: 50,
      description: "Ready to build on street experience with focused track instruction and technique refinement.",
      objectives: [
        "Cornering technique improvement",
        "Confidence building exercises",
        "Basic lean angle progression",
        "Group riding protocols"
      ],
      color: "from-accent to-accent/80"
    },
    {
      icon: Zap,
      level: "Intermediate",
      subtitle: "Advancing",
      progress: 75,
      description: "Develop advanced techniques and push your limits with professional guidance and data analysis.",
      objectives: [
        "Advanced cornering lines",
        "Braking point optimization",
        "Suspension setup basics",
        "Lap time consistency"
      ],
      color: "from-primary to-primary-glow"
    },
    {
      icon: Trophy,
      level: "Advanced/Racer",
      subtitle: "Mastering",
      progress: 100,
      description: "Elite-level instruction focused on race craft, competition preparation, and performance optimization.",
      objectives: [
        "Race strategy and tactics",
        "Advanced data analysis",
        "Mental performance coaching",
        "Competition preparation"
      ],
      color: "from-primary-glow to-primary"
    }
  ];

  return (
    <section id="levels" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-racing text-4xl lg:text-5xl mb-6">
            Find Your <span className="text-primary">Level</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our progressive curriculum ensures safe, effective learning for every rider. 
            Start where you are, advance at your pace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <Card 
                key={level.level} 
                className="group hover:shadow-elevation transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 track-curve"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-full bg-gradient-to-r ${level.color} w-fit`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-racing">
                    {level.level}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {level.subtitle}
                  </CardDescription>
                  
                  {/* Progress Bar */}
                  <div className="skill-progress mt-4" style={{ '--skill-width': `${level.progress}%` } as any}>
                    <div className="skill-progress::after" style={{ width: `${level.progress}%` }}></div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {level.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Learning Objectives:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {level.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    View Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-hero">
            Take Our Skill Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillLevels;