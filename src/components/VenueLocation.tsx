import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Plane, Wine, Mountain, Camera } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
//import colchaguaValley from "@/assets/colchagua-valley.jpg";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400"

const VenueLocation = () => {
  const { t } = useLanguage();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Horizontal translate - moves sections from right to left as you scroll
  // Use 100vw to ensure sections scroll exactly one screen width
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-125vw"]);

  return (
    <section id="venue" className="h-[400vh] relative" ref={container}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex w-[200vw]" style={{ x }}>
          {/* Sections I & II Container */}
          <div className="h-screen flex flex-col items-start flex-shrink-0 pt-48 w-screen">
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

            {/* Cards Content - Left Column */}
            {/* <div className="container mx-auto px-4 flex-1">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                   ... content hidden ...
                </div>
              </div>
            </div> */}
          </div>

          {/* Sections III & IV Container */}
          <div className="h-screen flex flex-col items-start flex-shrink-0 pt-48 w-screen">
            {/* Cards Content - Right Column and Bottom */}
            <div className="container mx-auto px-4 flex-1">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-congress cursor-pointer"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      onClick={() => window.open("https://www.rutacruz.cl/", "_blank")}
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

                    {/* <div className="grid grid-cols-2 gap-4">
                       ... content hidden ...
                    </div> */}
                  </div>
                </div>

                {/* <motion.div
                   ... content hidden ...
                </motion.div> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueLocation;