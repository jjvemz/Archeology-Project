import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const VenueLocation = () => {
  const { t } = useLanguage();

  return (
    <section
      id="venue"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <h2 className="text-5xl font-bold text-primary mb-8">
              X_ {t("venue.title").toUpperCase()}
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg text-orange-700 leading-relaxed font-semibold">
                {t("venue.description")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Cards Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Colchagua Card */}
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                className="relative overflow-hidden rounded-full shadow-congress cursor-pointer w-72 h-72 md:w-80 md:h-80 border-[6px] border-solid border-blue-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 1, 0.5, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
                onClick={() =>
                  window.open("https://www.rutacruz.cl/", "_blank")
                }
              >
                <img
                  src="/images/Venue/Colchagua.jpg"
                  alt="Colchagua Valley wine region landscape"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="w-full max-w-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-3 uppercase">
                  {t("venue.colchaguaValley")}
                </h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  {t("venue.unescoBadge")}
                </p>
              </div>
            </div>

            {/* Santa Cruz Map Card */}
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                className="relative overflow-hidden rounded-full shadow-congress cursor-pointer w-72 h-72 md:w-80 md:h-80 border-[6px] border-solid border-blue-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  transition: { duration: 0.3 },
                }}
                onClick={() =>
                  window.open("https://www.rutacruz.cl/", "_blank")
                }
              >
                <img
                  src="/images/Venue/SantaCruzBlueMap.jpg"
                  alt="Santa Cruz Map"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="w-full max-w-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-3 uppercase">
                  {t("venue.santaCruzMap.title")}
                </h3>
                <p className="text-lg font-semibold text-primary mb-4">
                  {t("venue.santaCruzMap.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueLocation;
