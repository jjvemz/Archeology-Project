import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Plane, Wine, Mountain, Camera } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
//import colchaguaValley from "@/assets/colchagua-valley.jpg";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400"

const VenueLocation = () => {
  const { t } = useLanguage();

  return (
    <section id="venue" className="py-14 bg-yellow-50">
      {/* Header Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center gap-8">
            <div className="flex items-center gap-6">
              <h2 className="text-8xl font-bold text-primary"></h2>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <h2 className="text-5xl font-bold text-primary">
                  X_ {t("venue.title").toUpperCase()}
                </h2>
                <div className="mt-4 pt-4">
                  <p className="text-base text-orange-700">
                    {t("venue.description")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              >
                <Card className="shadow-congress border-2 border-dashed border-orange-700" shape="circle">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg md:text-xl text-primary leading-tight">
                    {t("venue.hotelName")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center h-auto p-3 md:p-6">
                  <div className="space-y-2 text-center">
                    <div className="">
                      <h4 className="font-medium text-foreground text-primary text-sm md:text-base mb-1">{t("venue.address")}</h4>
                      <p className="text-muted-foreground text-primary text-xs md:text-sm leading-tight">
                        {t("venue.addressText")}
                      </p>
                    </div>
                    <div className="">
                      <h4 className="font-medium text-foreground text-primary text-sm md:text-base mb-1">{t("venue.facilities")}</h4>
                      <p className="text-muted-foreground text-primary text-xs md:text-sm leading-tight">
                        {t("venue.facilities.desc")}
                      </p>
                    </div>
                    <div className="">
                      <h4 className="font-medium text-foreground text-primary text-sm md:text-base mb-1">{t("venue.accommodation")}</h4>
                      <p className="text-muted-foreground text-primary text-xs md:text-sm leading-tight">
                        {t("venue.accommodation.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              >
                <Card className="shadow-congress border-2 border-dashed border-orange-700" shape="circle">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg md:text-xl text-primary leading-tight">
                    {t("venue.gettingThere")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center h-auto p-3 md:p-6">
                  <div className="space-y-3 text-center">
                    <div className="">
                      <h4 className="font-medium text-foreground text-primary text-sm md:text-base mb-1">{t("venue.fromSantiago")}</h4>
                      <p className="text-muted-foreground text-xs md:text-sm text-primary leading-tight">
                        {t("venue.fromSantiago.desc")}
                      </p>
                    </div>
                    <div className="">
                      <h4 className="font-medium text-foreground text-primary text-sm md:text-base mb-1">{t("venue.internationalFlights")}</h4>
                      <p className="text-muted-foreground text-xs md:text-sm text-primary leading-tight">
                        {t("venue.internationalFlights.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="relative overflow-hidden rounded-lg shadow-congress"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              >
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
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Card className="text-center shadow-card border-2 border-dashed border-orange-700" shape="circle">
                  <CardContent className="p-2 md:p-4 flex flex-col justify-center h-full">
                    <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-primary text-sm md:text-base leading-tight">{t("venue.wineHeritage")}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm text-primary leading-tight">
                      {t("venue.wineHeritage.desc")}
                    </p>
                  </CardContent>
                </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Card className="text-center shadow-card border-2 border-dashed border-orange-700" shape="circle">
                  <CardContent className="p-2 md:p-4 flex flex-col justify-center h-full">
                    <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-primary text-sm md:text-base leading-tight">{t("venue.scenicBeauty")}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm text-primary leading-tight">
                      {t("venue.scenicBeauty.desc")}
                    </p>
                  </CardContent>
                </Card>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <Card className="shadow-congress text-primary border-2 border-dashed border-orange-700" shape="circle">
            <CardContent className="p-4 md:p-8 text-center flex flex-col justify-center h-auto">
              <h3 className="text-4xl  font-bold mb-3 md:mb-4 leading-tight">{t("venue.culturalImmersion")}</h3>
              <p className="text-primary leading-tight mb-4 md:mb-6 max-w-xs md:max-w-md mx-auto text-3xl ">
                {t("venue.culturalImmersion.desc")}
              </p>
              {/* <div className="flex flex-col gap-2 md:gap-4 justify-center">
                <Button size="sm" variant="yellow" className="text-xs md:text-sm px-3 md:px-4">
                  {t("venue.bookAccommodation")}
                </Button>
                <Button size="sm" variant="yellow" className="border-grey text-primary hover:bg-blue-700/40 bg-blue-600/40 hover:text-pacific-blue text-xs md:text-sm px-3 md:px-4">
                  {t("venue.downloadGuide")}
                </Button>
              </div> */}
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueLocation;