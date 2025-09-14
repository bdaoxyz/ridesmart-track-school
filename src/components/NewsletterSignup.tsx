import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Gift, Bell } from "lucide-react";

const NewsletterSignup = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-secondary/80 text-white border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-track"></div>
          
          <CardContent className="relative z-10 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-white border-0">
                  <Gift className="h-3 w-3 mr-1" />
                  Exclusive Access
                </Badge>
                
                <h2 className="font-racing text-3xl lg:text-4xl mb-4">
                  Get Early Access to <span className="text-primary-glow">COTA Events</span>
                </h2>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Join our VIP list and be the first to know about upcoming track days, 
                  especially our highly sought-after COTA sessions. Plus get exclusive 
                  riding tips, safety updates, and special member pricing.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Bell className="h-4 w-4 text-primary-glow" />
                    <span className="text-sm">First access to COTA event registration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary-glow" />
                    <span className="text-sm">Monthly riding tips from our instructors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="h-4 w-4 text-primary-glow" />
                    <span className="text-sm">Exclusive member discounts and offers</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="font-racing text-xl mb-4 text-center">
                    Join the RideSmart Community
                  </h3>
                  
                  <form className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white/90 border-0 text-secondary placeholder:text-secondary/60 h-12"
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="text"
                        placeholder="First name"
                        className="bg-white/90 border-0 text-secondary placeholder:text-secondary/60 h-12"
                      />
                    </div>

                    <Button className="w-full btn-hero h-12 text-lg">
                      Get VIP Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                  <p className="text-xs text-white/60 mt-4 text-center">
                    We respect your privacy. Unsubscribe at any time.
                    <br />
                    No spam, just valuable riding content.
                  </p>
                </div>

                {/* Social Proof */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                    <span>Join 2,500+ riders who never miss an event</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;