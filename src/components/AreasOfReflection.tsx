import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Map,
  Waves,
  TreePine,
  Users,
  Globe,
  MapPin,
  Palette,
  Languages as LanguagesIcon,
  Compass,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const AreasOfReflection = () => {
  const { t } = useLanguage();

  const areas = [
    {
      icon: Map,
      titleKey: "areas.islands.title",
      scaleKey: "areas.regionalScale",
      descKey: "areas.islands.desc",
      keywords: [
        "Settlement Archaeology",
        "Maritime Culture",
        "Island Biogeography",
        "Cultural Adaptation",
      ],
    },
    {
      icon: Users,
      titleKey: "areas.cultural.title",
      scaleKey: "areas.temporalScale",
      descKey: "areas.cultural.desc",
      keywords: [
        "Cultural Evolution",
        "Social Complexity",
        "Technological Change",
        "Belief Systems",
      ],
    },
    {
      icon: Waves,
      titleKey: "areas.climate.title",
      scaleKey: "areas.environmentalScale",
      descKey: "areas.climate.desc",
      keywords: [
        "Paleoclimate",
        "Sea-level Change",
        "Environmental Archaeology",
        "Adaptation Strategies",
      ],
    },
    {
      icon: Globe,
      titleKey: "areas.transpacific.title",
      scaleKey: "areas.globalScale",
      descKey: "areas.transpacific.desc",
      keywords: [
        "Maritime Networks",
        "Cultural Exchange",
        "Migration Patterns",
        "Trade Systems",
      ],
    },
    {
      icon: MapPin,
      titleKey: "areas.preservation.title",
      scaleKey: "areas.conservationScale",
      descKey: "areas.preservation.desc",
      keywords: [
        "Heritage Management",
        "Site Preservation",
        "Community Archaeology",
        "Threat Assessment",
      ],
    },
    {
      icon: Palette,
      titleKey: "areas.arts.title",
      scaleKey: "areas.culturalScale",
      descKey: "areas.arts.desc",
      keywords: [
        "Petroglyphs",
        "Wood Carving",
        "Stone Sculpture",
        "Traditional Motifs",
      ],
    },
    {
      icon: LanguagesIcon,
      titleKey: "areas.languages.title",
      scaleKey: "areas.linguisticScale",
      descKey: "areas.languages.desc",
      keywords: [
        "Proto-Polynesian",
        "Language Families",
        "Linguistic Evolution",
        "Language Preservation",
      ],
    },
    {
      icon: Compass,
      titleKey: "areas.wayfinding.title",
      scaleKey: "areas.navigationScale",
      descKey: "areas.wayfinding.desc",
      keywords: [
        "Star Navigation",
        "Ocean Currents",
        "Wave Patterns",
        "Celestial Navigation",
      ],
    },
    {
      icon: Building2,
      titleKey: "areas.megalithic.title",
      scaleKey: "areas.architecturalScale",
      descKey: "areas.megalithic.desc",
      keywords: [
        "Stone Platforms",
        "Ahu & Marae",
        "Engineering Techniques",
        "Ceremonial Structures",
      ],
    },
  ];

  return (
    <section id="areas" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground  text-primary ">
              {t("areas.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto  text-primary ">
              {t("areas.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  text-primary text-opacity-65">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-congress transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-10 w-10 text-pacific-blue group-hover:text-coral text-primary  text-primary" />
                      <Badge
                        variant="secondary"
                        className="bg-pacific-blue/10 text-pacific-blue  text-primary text-opacity-65"
                      >
                        {t(area.scaleKey)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-primary  text-primary ">
                      {t(area.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed  text-primary text-opacity-65">
                      {t(area.descKey)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.keywords.map((keyword, keyIndex) => (
                        <Badge
                          key={keyIndex}
                          variant="outline"
                          className="text-xs border-pacific-teal/30 text-pacific-teal hover:bg-pacific-teal/10  text-primary text-opacity-65"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="  text-primary textopacity-65 shadow-congress max-w-3xl mx-auto">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4  text-primary ">
                  {t("areas.multiScale.title")}
                </h3>
                <p className=" leading-relaxed  text-primary text-opacity-65">
                  {t("areas.multiScale.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
          {/*<AreasOfReflectionGallery />*/}
        </div>
      </div>
    </section>
  );
};

export default AreasOfReflection;
