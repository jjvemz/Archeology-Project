import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

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
      <div className="bg-blue-900 py-16 px-4">
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
                <p className="text-sm text-orange-700 leading-relaxed">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {artifacts.map((artifact, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Circular Image Container */}
                  <div className="w-40 h-40 rounded-full bg-primary flex items-center justify-center overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-shadow">
                    <img
                      src={artifact.image}
                      alt={t(artifact.nameKey)}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="w-full text-center">
                    <h3 className="text-lg font-bold mb-2 text-blue-900">
                      {t(artifact.nameKey).toUpperCase()}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-3">
                      {t(artifact.typeKey).toUpperCase()} / {t(artifact.originKey).toUpperCase()}
                    </p>
                    <p className="text-xs text-blue-900 leading-relaxed mb-4">
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
    </section>
  );
};

export default CulturalArtifactsGallery;
