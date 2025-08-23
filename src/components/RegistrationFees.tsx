import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, GraduationCap, Crown } from "lucide-react";

const fees = [
  {
    icon: Users,
    category: "General Public",
    price: "$300",
    description: "International participants and professionals",
    features: ["Full congress access", "Welcome reception", "Conference materials", "Coffee breaks", "Closing ceremony"],
    highlight: false
  },
  {
    icon: DollarSign,
    category: "Chilean Participants",
    price: "$150",
    description: "Special rate for Chilean residents",
    features: ["Full congress access", "Welcome reception", "Conference materials", "Coffee breaks", "Closing ceremony"],
    highlight: true
  },
  {
    icon: GraduationCap,
    category: "Students",
    price: "$50",
    description: "Valid student ID required",
    features: ["Full congress access", "Student networking session", "Conference materials", "Coffee breaks", "Mentorship opportunities"],
    highlight: false
  },
  {
    icon: Crown,
    category: "Retired Participants",
    price: "$100",
    description: "Retired academics and professionals",
    features: ["Full congress access", "Senior scholars reception", "Conference materials", "Coffee breaks", "Legacy presentation session"],
    highlight: false
  }
];

const RegistrationFees = () => {
  return (
    <section id="registration" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Registration Fees
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Choose your registration category and secure your place at this groundbreaking congress. 
              All fees include full access to sessions, materials, and networking events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {fees.map((fee, index) => {
              const IconComponent = fee.icon;
              return (
                <Card 
                  key={index} 
                  className={`shadow-card hover:shadow-congress transition-all duration-300 ${
                    fee.highlight ? 'border-pacific-blue border-2 relative' : ''
                  }`}
                >
                  {fee.highlight && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pacific-blue text-white">
                      Chilean Rate
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${
                      fee.highlight ? 'text-pacific-blue' : 'text-pacific-teal'
                    }`} />
                    <CardTitle className="text-xl">{fee.category}</CardTitle>
                    <div className={`text-3xl font-bold ${
                      fee.highlight ? 'text-pacific-blue' : 'text-foreground'
                    }`}>
                      {fee.price}
                      <span className="text-base font-normal text-muted-foreground"> USD</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{fee.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fee.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-pacific-teal rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6" 
                      variant={fee.highlight ? "congress" : "outline"}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-congress-yellow" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-congress-yellow pl-4">
                  <h4 className="font-semibold text-foreground">Accepted Payment Methods</h4>
                  <p className="text-muted-foreground text-sm">Credit cards, bank transfers, and PayPal</p>
                </div>
                <div className="border-l-4 border-pacific-blue pl-4">
                  <h4 className="font-semibold text-foreground">Early Bird Discount</h4>
                  <p className="text-muted-foreground text-sm">10% off for registrations before January 2026</p>
                </div>
                <div className="border-l-4 border-coral pl-4">
                  <h4 className="font-semibold text-foreground">Group Discounts</h4>
                  <p className="text-muted-foreground text-sm">5% off for groups of 5+ participants</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Users className="h-8 w-8 text-pacific-blue" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-blue rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Access to all scientific sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-teal rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Welcome and closing ceremonies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                  <span className="text-muted-foreground">All conference materials and abstracts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-congress-yellow rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Coffee breaks and networking sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-blue rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Certificate of participation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-teal rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Access to virtual platform (post-congress)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationFees;