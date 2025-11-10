import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

import Circle8 from "/images/03agua_azul.png";
import Circle9 from "/images/09agua_azul.png";
import Circle10 from "/images/10agua_azul.png";
import Circle11 from "/images/11agua_azul.png";

const CulturalArtifactsGallery = () => {
  const { t } = useLanguage();

  const artifacts = [
    {
      nameKey: "artifacts.woodenBowl.name",
      typeKey: "artifacts.woodenBowl.type",
      originKey: "artifacts.woodenBowl.origin",
      descKey: "artifacts.woodenBowl.desc",
      image: Circle8,
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
      image: Circle9,
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
      image: Circle10,
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
      image: Circle11,
      patterns: [
        "artifacts.portrait.pattern1",
        "artifacts.portrait.pattern2"
      ]
    }
  ];

  return (
    <section id="artifacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("artifacts.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("artifacts.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artifacts.map((artifact, idx) => (
              <Card
                key={idx}
                className="shadow-congress hover:shadow-warm transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={artifact.image}
                    alt={t(artifact.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-volcanic/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Origin badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-pacific-blue/90 text-orange-800">
                      {t(artifact.originKey)}
                    </Badge>
                  </div>

                  {/* Type badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="outline" className="text-orange-700 text-foreground backdrop-blur-sm">
                      {t(artifact.typeKey)}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-pacific-blue transition-colors text-orange-900">
                    {t(artifact.nameKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-orange-900">
                    {t(artifact.descKey)}
                  </p>

                  {/* Pattern tags */}
                  <div className="flex flex-wrap gap-2">
                    {artifact.patterns.map((pattern, patternIdx) => (
                      <Badge
                        key={patternIdx}
                        variant="outline"
                        className="text-xs border-coral/30 text-coral hover:bg-coral/10 text-orange-900"
                      >
                        {t(pattern)}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional info section */}
          <Card className="mt-16 bg-[#143c8c]/60 shadow-congress">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-800 text-opacity-65">
                {t("artifacts.culturalSignificance.title")}
              </h3>
              <p className="text-orange-800 text-opacity-65 leading-relaxed max-w-4xl mx-auto text-center mb-6">
                {t("artifacts.culturalSignificance.desc")}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-orange-800 text-opacity-65">1000+</div>
                  <div className="text-sm text-orange-800 text-opacity-65">{t("artifacts.stats.artifacts")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-orange-800 text-opacity-65">20+</div>
                  <div className="text-sm text-orange-800 text-opacity-65">{t("artifacts.stats.cultures")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-orange-800 text-opacity-65">4000+</div>
                  <div className="text-sm text-orange-800 text-opacity-65">{t("artifacts.stats.years")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CulturalArtifactsGallery;
