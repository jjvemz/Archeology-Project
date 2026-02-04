import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

import statue from "/images/statue.png";
import spiral from "/images/spiral.png";
import stone from "/images/stone.png";
import bowl from "/images/bowl.png";

const CulturalArtifactsGallery = () => {
  const { t } = useLanguage();

  const artifacts = [
    {
      nameKey: "artifacts.woodenBowl.name",
      typeKey: "artifacts.woodenBowl.type",
      originKey: "artifacts.woodenBowl.origin",
      descKey: "artifacts.woodenBowl.desc",
      image: bowl,
      patterns: [
        "artifacts.woodenBowl.pattern1",
        "artifacts.woodenBowl.pattern2"
      ]
    },
    {
      nameKey: "artifacts.spiralArt.name",
      typeKey: "artifacts.spiralArt.type",
      originKey: "artifacts.spiralArt.origin",
      descKey: "artifacts.spiralArt.desc",
      image: spiral,
      patterns: [
        "artifacts.spiralArt.pattern1",
        "artifacts.spiralArt.pattern2"
      ]
    },
    {
      nameKey: "artifacts.stoneRelief.name",
      typeKey: "artifacts.stoneRelief.type",
      originKey: "artifacts.stoneRelief.origin",
      descKey: "artifacts.stoneRelief.desc",
      image: stone,
      patterns: [
        "artifacts.stoneRelief.pattern1",
        "artifacts.stoneRelief.pattern2"
      ]
    },
    {
      nameKey: "artifacts.portrait.name",
      typeKey: "artifacts.portrait.type",
      originKey: "artifacts.portrait.origin",
      descKey: "artifacts.portrait.desc",
      image: statue,
      patterns: [
        "artifacts.portrait.pattern1",
        "artifacts.portrait.pattern2"
      ]
    }
  ];

  return (
    <section id="artifacts" className="py-0 bg-background">
      {/* Header Section */}
      <div className="bg-blue-800 py-16 px-4">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center gap-8">
            <div className="flex items-center gap-6">
              <h2 className="text-8xl font-bold text-primary"></h2>
            </div>
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-primary leading-tight">
                VII_ {t("artifacts.title").toUpperCase()}
              </h2>
              <div className="mt-4  p-4 ">
                <p className="text-xl text-orange-700 leading-relaxed">
                  {t("artifacts.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artifacts Grid */}
      <div className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {artifacts.map((artifact, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Circular Image Container */}
                  <div className="w-60 h-60 rounded-full bg-primary flex items-center justify-center overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-shadow bg-[#c55a11]">
                    <img
                      src={artifact.image}
                      alt={t(artifact.nameKey)}
                      className="w-5/6 h-5/6 object-cover hover:scale-110 transition-transform duration-300 rounded-full"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="w-full text-center">
                    <h3 className="text-2xl font-bold mb-2 text-blue-900">
                      {t(artifact.nameKey).toUpperCase()}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-3">
                      {t(artifact.typeKey).toUpperCase()} / {t(artifact.originKey).toUpperCase()}
                    </p>
                    <p className="text-base text-blue-900 leading-relaxed mb-4">
                      {t(artifact.descKey)}
                    </p>

                    {/* Pattern tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {artifact.patterns.map((pattern, patternIdx) => (
                        <Badge
                          key={patternIdx}
                          variant="outline"
                          className="text-xs border-primary text-primary hover:bg-primary/10"
                        >
                          {t(pattern)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 px-4  border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-primary">1000+</div>
                <div className="text-sm font-bold text-blue-900">
                  {t("artifacts.stats.artifacts").toUpperCase()}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-primary">20+</div>
                <div className="text-sm font-bold text-blue-900">
                  {t("artifacts.stats.cultures").toUpperCase()}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-primary">4000+</div>
                <div className="text-sm font-bold text-blue-900">
                  {t("artifacts.stats.years").toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Significance Section */}
      <div className="py-12 px-4 ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {t("artifacts.culturalSignificance.title").toUpperCase()}
            </h3>
            <p className="text-primary leading-relaxed max-w-4xl mx-auto text-sm">
              {t("artifacts.culturalSignificance.desc").toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Information Section */}
      <div className="bg-blue-800 py-16 px-4">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h3 
              className="text-4xl font-bold text-center mb-16 text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {t("artifacts.payment.title").toUpperCase()}
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
              {/* General Public */}
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="w-80 h-80 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-dashed border-orange-600 flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 group">
                  <h4 className="text-lg font-bold text-white mb-3 text-center transition-all duration-300 group-hover:text-xl">
                    {t("artifacts.payment.generalPublic.title")}
                  </h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4 transition-all duration-300 group-hover:text-4xl">
                    {t("artifacts.payment.generalPublic.price")}
                  </div>
                  <div className="text-xs text-orange-600 space-y-1 text-center transition-all duration-300 group-hover:text-sm">
                    <div>• {t("artifacts.payment.generalPublic.international")}</div>
                    <div>• {t("artifacts.payment.generalPublic.fullAccess")}</div>
                    <div>• {t("artifacts.payment.generalPublic.welcome")}</div>
                    <div>• {t("artifacts.payment.generalPublic.conference")}</div>
                    <div>• {t("artifacts.payment.generalPublic.coffee")}</div>
                    <div>• {t("artifacts.payment.generalPublic.lunch")}</div>
                  </div>
                </div>
              </motion.div>

              {/* Chilean Participants */}
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="w-80 h-80 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-dashed border-orange-600 flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 group">
                  <h4 className="text-lg font-bold text-white mb-3 text-center transition-all duration-300 group-hover:text-xl">
                    {t("artifacts.payment.chilean.title")}
                  </h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4 transition-all duration-300 group-hover:text-4xl">
                    {t("artifacts.payment.chilean.price")}
                  </div>
                  <div className="text-xs text-orange-600 space-y-1 text-center transition-all duration-300 group-hover:text-sm">
                    <div>• {t("artifacts.payment.chilean.specialRate")}</div>
                    <div>• {t("artifacts.payment.chilean.fullAccess")}</div>
                    <div>• {t("artifacts.payment.chilean.welcome")}</div>
                    <div>• {t("artifacts.payment.chilean.conference")}</div>
                    <div>• {t("artifacts.payment.chilean.coffee")}</div>
                    <div>• {t("artifacts.payment.chilean.lunch")}</div>
                  </div>
                </div>
              </motion.div>

              {/* Students */}
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="w-80 h-80 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-dashed border-orange-600 flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 group">
                  <h4 className="text-lg font-bold text-white mb-3 text-center transition-all duration-300 group-hover:text-xl">
                    {t("artifacts.payment.students.title")}
                  </h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4 transition-all duration-300 group-hover:text-4xl">
                    {t("artifacts.payment.students.price")}
                  </div>
                  <div className="text-xs text-orange-600 space-y-1 text-center transition-all duration-300 group-hover:text-sm">
                    <div>• {t("artifacts.payment.students.specialRate")}</div>
                    <div>• {t("artifacts.payment.students.fullAccess")}</div>
                    <div>• {t("artifacts.payment.students.welcome")}</div>
                    <div>• {t("artifacts.payment.students.conference")}</div>
                    <div>• {t("artifacts.payment.students.coffee")}</div>
                    <div>• {t("artifacts.payment.students.lunch")}</div>
                  </div>
                </div>
              </motion.div>

              {/* Retired Participants */}
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="w-80 h-80 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-dashed border-orange-600 flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 group">
                  <h4 className="text-lg font-bold text-white mb-3 text-center transition-all duration-300 group-hover:text-xl">
                    {t("artifacts.payment.retired.title")}
                  </h4>
                  <div className="text-3xl font-bold text-orange-600 mb-4 transition-all duration-300 group-hover:text-4xl">
                    {t("artifacts.payment.retired.price")}
                  </div>
                  <div className="text-xs text-orange-600 space-y-1 text-center transition-all duration-300 group-hover:text-sm">
                    <div>• {t("artifacts.payment.retired.specialRate")}</div>
                    <div>• {t("artifacts.payment.retired.fullAccess")}</div>
                    <div>• {t("artifacts.payment.retired.welcome")}</div>
                    <div>• {t("artifacts.payment.retired.conference")}</div>
                    <div>• {t("artifacts.payment.retired.coffee")}</div>
                    <div>• {t("artifacts.payment.retired.lunch")}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Payment Methods and Discounts */}
            <motion.div 
              className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-bold text-white mb-4">
                  {t("artifacts.payment.methods.title")}
                </h4>
                <p className="text-orange-600 text-lg">
                  {t("artifacts.payment.methods.subtitle")}
                </p>
              </div>
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {t("artifacts.payment.discounts.earlyBird")}
                  </h4>
                  <p className="text-orange-600 text-sm">
                    {t("artifacts.payment.discounts.earlyBirdDesc")}
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {t("artifacts.payment.discounts.group")}
                  </h4>
                  <p className="text-orange-600 text-sm">
                    {t("artifacts.payment.discounts.groupDesc")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalArtifactsGallery;
