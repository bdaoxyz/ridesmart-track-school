import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const faqCategories = [
    {
      category: "First-Time Riders",
      questions: [
        {
          question: "I've never been on a track before. Is this safe for beginners?",
          answer: "Absolutely! We specialize in introducing new riders to track riding safely. Our beginner program includes comprehensive classroom instruction, safety briefings, and one-on-one coaching. You'll start at a comfortable pace with experienced instructors guiding you every step of the way."
        },
        {
          question: "What's the difference between street riding and track riding?",
          answer: "Track riding focuses on proper technique, safety, and skill development in a controlled environment. Unlike street riding, there are no oncoming traffic, intersections, or unpredictable variables. You'll learn proper body positioning, braking techniques, and cornering lines that will make you a better rider both on and off the track."
        },
        {
          question: "How do I know which skill level is right for me?",
          answer: "We offer a simple assessment process during registration. Generally, if you're comfortable riding on the street and have basic motorcycle control skills, you can start in our Street Rider program. Our instructors will evaluate your skills on the first day and may recommend adjustments to ensure you're in the right group."
        }
      ]
    },
    {
      category: "Equipment & Requirements",
      questions: [
        {
          question: "What safety gear do I need for my first track day?",
          answer: "You'll need a DOT-approved helmet (Snell recommended), full leather suit or separate jacket and pants, protective boots covering ankles, and motorcycle gloves. Back protectors are highly recommended. We can provide a detailed equipment checklist and rental options for beginners."
        },
        {
          question: "Does my motorcycle need any modifications for track use?",
          answer: "For most track days, your street motorcycle is fine with a few safety modifications: removal of mirrors, headlights taped, license plate removed, and all fluids checked. We'll provide a complete tech inspection checklist when you register. Advanced riders may benefit from track-specific modifications."
        },
        {
          question: "Can I rent gear if I don't have everything?",
          answer: "Yes! We partner with local gear rental companies and maintain a limited inventory of rental suits and helmets. We recommend securing rental gear in advance as availability can be limited, especially for popular events like COTA."
        }
      ]
    },
    {
      category: "Pricing & Registration",
      questions: [
        {
          question: "What's included in the track day fee?",
          answer: "Your registration includes all instruction, classroom sessions, unlimited track time during your group's sessions, lunch, professional photography, basic insurance coverage, and access to our support team. Additional costs may include gear rental and optional video analysis sessions."
        },
        {
          question: "What's your cancellation policy?",
          answer: "We offer full refunds up to 14 days before the event, 50% refund up to 7 days before, and credit toward future events for cancellations within 7 days. Weather-related cancellations receive full credit or refund. We understand plans change and try to be as flexible as possible."
        },
        {
          question: "Do you offer payment plans or group discounts?",
          answer: "Yes! We offer payment plans for track days over $300, and group discounts for 3 or more riders registering together. Corporate packages and season passes are also available. Contact us for custom pricing options."
        }
      ]
    },
    {
      category: "Safety & Track Protocols",
      questions: [
        {
          question: "What happens if I crash or have an incident?",
          answer: "Safety is our top priority. We have professional track marshals, on-site medical support, and comprehensive insurance coverage. In the unlikely event of an incident, our emergency response team will handle everything while our support staff takes care of you and your motorcycle."
        },
        {
          question: "What are the passing rules and group riding protocols?",
          answer: "Each skill level has specific passing rules designed for safety. Beginners typically have no passing or passing only on straights with instructor permission. More advanced groups have progressively more liberal passing rules. All rules are thoroughly explained in the mandatory riders' meeting."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-racing text-4xl lg:text-5xl mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            from riders considering their first track day experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={category.category} className="mb-8 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-racing text-xl text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="faq-item"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="mt-16 bg-gradient-to-r from-card to-primary/5 border-primary/10">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="font-racing text-2xl mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our experienced team is here to help. Get in touch and we'll make sure 
                you have all the information you need for your first track day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Speak directly with our team
                </p>
                <Button variant="outline" size="sm" className="group">
                  (555) TRACK-DAY
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get detailed answers via email
                </p>
                <Button variant="outline" size="sm" className="group">
                  Send Email
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Quick answers to simple questions
                </p>
                <Button variant="outline" size="sm" className="group">
                  Start Chat
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;