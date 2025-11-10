import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Plane, Wine, Mountain, Camera } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
//import colchaguaValley from "@/assets/colchagua-valley.jpg";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400"

const VenueLocation = () => {
  const { t } = useLanguage();

  return (
    <section id="venue" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("venue.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("venue.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <Card className="shadow-congress">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MapPin className="h-8 w-8 text-coral" />
                    {t("venue.hotelName")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-coral pl-4">
                    <h4 className="font-semibold text-foreground">{t("venue.address")}</h4>
                    <p className="text-muted-foreground">
                      {t("venue.addressText")}<br />
                      {t("venue.addressText2")}
                    </p>
                  </div>
                  <div className="border-l-4 border-pacific-blue pl-4">
                    <h4 className="font-semibold text-foreground">{t("venue.facilities")}</h4>
                    <p className="text-muted-foreground">
                      {t("venue.facilities.desc")}
                    </p>
                  </div>
                  <div className="border-l-4 border-pacific-teal pl-4">
                    <h4 className="font-semibold text-foreground">{t("venue.accommodation")}</h4>
                    <p className="text-muted-foreground">
                      {t("venue.accommodation.desc")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-congress">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Plane className="h-8 w-8 text-pacific-blue" />
                    {t("venue.gettingThere")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="h-5 w-5 text-pacific-teal mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t("venue.fromSantiago")}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t("venue.fromSantiago.desc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plane className="h-5 w-5 text-pacific-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t("venue.internationalFlights")}</h4>
                      <p className="text-muted-foreground text-sm">
                        {t("venue.internationalFlights.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg shadow-congress">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/57/7e/fa/photo0jpg.jpg?w=900&h=500&s=1"
                  alt="Colchagua Valley wine region landscape"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{t("venue.colchaguaValley")}</h3>
                    <p className="text-white/90 text-sm">{t("venue.unescoBadge")}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Wine className="h-8 w-8 text-coral mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{t("venue.wineHeritage")}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t("venue.wineHeritage.desc")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card">
                  <CardContent className="pt-6">
                    <Mountain className="h-8 w-8 text-pacific-blue mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{t("venue.scenicBeauty")}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t("venue.scenicBeauty.desc")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <Card className="shadow-congress  text-orange-800 text-opacity-65">
            <CardContent className="pt-8 text-center">
              <Camera className="h-12 w-12 mx-auto mb-6 text-orange-800 text-opacity-65" />
              <h3 className="text-2xl font-bold mb-4">{t("venue.culturalImmersion")}</h3>
              <p className="text-orange-800 text-opacity-65 leading-relaxed mb-6 max-w-3xl mx-auto">
                {t("venue.culturalImmersion.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="yellow">
                  {t("venue.bookAccommodation")}
                </Button>
                <Button size="lg" variant="outline" className="border-grey text-orange-800 text-opacity-65 hover:bg-white hover:text-pacific-blue">
                  {t("venue.downloadGuide")}
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