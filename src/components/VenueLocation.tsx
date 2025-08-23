import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Plane, Wine, Mountain, Camera } from "lucide-react";
//import colchaguaValley from "@/assets/colchagua-valley.jpg";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400"

const VenueLocation = () => {
  return (
    <section id="venue" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Venue & Location
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join us at the prestigious Hotel Santa Cruz in Chile's renowned Colchagua Valley, 
              a perfect setting that combines academic excellence with cultural heritage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <Card className="shadow-congress">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="h-8 w-8 text-coral" />
                    Hotel Santa Cruz
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-coral pl-4">
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">
                      Plaza de Armas s/n, Santa Cruz<br />
                      Colchagua Valley, Sixth Region of Chile
                    </p>
                  </div>
                  <div className="border-l-4 border-pacific-blue pl-4">
                    <h4 className="font-semibold text-foreground">World-Class Facilities</h4>
                    <p className="text-muted-foreground">
                      State-of-the-art conference rooms, high-speed internet, 
                      simultaneous translation capabilities, and audio-visual equipment
                    </p>
                  </div>
                  <div className="border-l-4 border-pacific-teal pl-4">
                    <h4 className="font-semibold text-foreground">Accommodation</h4>
                    <p className="text-muted-foreground">
                      Luxury rooms with valley views, spa services, and fine dining options. 
                      Special congress rates available for attendees.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-congress">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Plane className="h-8 w-8 text-pacific-blue" />
                    Getting There
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="h-5 w-5 text-pacific-teal mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">From Santiago</h4>
                      <p className="text-muted-foreground text-sm">
                        2 hours drive via Ruta 5 Sur. Shuttle service available from Santiago airport.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-pacific-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">International Flights</h4>
                      <p className="text-muted-foreground text-sm">
                        Fly to Santiago (SCL), then ground transport to venue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg shadow-congress">
                <img 
                  src={PLACEHOLDER_IMAGE} 
                  alt="Colchagua Valley wine region landscape" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Colchagua Valley</h3>
                    <p className="text-white/90 text-sm">A UNESCO World Heritage wine region</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Wine className="h-8 w-8 text-coral mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Wine Heritage</h4>
                    <p className="text-muted-foreground text-sm">
                      World-renowned vineyards and wine tastings
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Mountain className="h-8 w-8 text-pacific-blue mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Scenic Beauty</h4>
                    <p className="text-muted-foreground text-sm">
                      Andean foothills and rolling vineyard landscapes
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Card className="shadow-congress bg-gradient-pacific text-black">
            <CardContent className="pt-8 text-center">
              <Camera className="h-12 w-12 mx-auto mb-6 text-black" />
              <h3 className="text-2xl font-bold mb-4">Cultural Immersion</h3>
              <p className="text-black leading-relaxed mb-6 max-w-3xl mx-auto">
                Beyond the academic sessions, immerse yourself in Chilean culture and heritage. 
                The Colchagua Valley offers unique opportunities to explore local archaeology, 
                colonial history, and indigenous traditions, making it an ideal setting for our Pacific congress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="yellow">
                  Book Accommodation
                </Button>
                <Button size="lg" variant="outline" className="border-grey text-black hover:bg-white hover:text-pacific-blue">
                  Download Travel Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VenueLocation;