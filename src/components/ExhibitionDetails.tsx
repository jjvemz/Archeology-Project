import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExhibitionDetails = () => {
  return (
    <section id="details" className="py-20 bg-gradient-to-b from-sand/20 to-[#fef2cd]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Exhibition Information
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Plan your visit to this extraordinary archaeological journey through time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-warm">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <span className="text-3xl">📅</span>
                  Dates & Hours
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-medium">Opening Date:</span>
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Closing Date:</span>
                    <span>September 30, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Daily Hours:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Extended Hours:</span>
                    <span>Fridays until 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 shadow-warm">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <span className="text-3xl">🎫</span>
                  Ticket Prices
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex justify-between">
                    <span className="font-medium">General Admission:</span>
                    <span className="text-foreground font-bold">$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Students/Seniors:</span>
                    <span className="text-foreground font-bold">$18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Children (under 12):</span>
                    <span className="text-foreground font-bold">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Family Package:</span>
                    <span className="text-foreground font-bold">$65</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="p-8 shadow-warm text-center">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
                <span className="text-3xl">📍</span>
                Location & Access
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                <strong>Museum of Natural History</strong><br />
                Central Exhibition Hall, 3rd Floor<br />
                1234 Heritage Avenue, Downtown Cultural District<br />
                Free parking available • Metro accessible • Wheelchair friendly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="expedition">
                  Buy Tickets Now
                </Button>
                <Button size="lg" variant="outline">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionDetails;