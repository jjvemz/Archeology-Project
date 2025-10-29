import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileStatueImage from "/images/RapaNiuProfileStatue.png";
import NavCard from "/images/NavCard.jpg";
import NavCard2 from "/images/NavCard2.jpg";
import SeaWoods from "/images/SeaWoods.webp";
import PlasticSea from "/images/plasticsea.jpeg";
import tijuanotas from "/images/tijuanotas.jpg";
import { useLanguage } from "@/hooks/useLanguage";

export function AreasOfReflectionGallery() {
  const { t } = useLanguage();

  const areas = [
    {
      titleKey: "areasGallery.islands.title",
      descKey: "areasGallery.islands.desc",
      scaleKey: "areasGallery.islands.scale",
      image: ProfileStatueImage,
      topics: [
        "areasGallery.islands.topic1",
        "areasGallery.islands.topic2",
        "areasGallery.islands.topic3",
        "areasGallery.islands.topic4"
      ]
    },
    {
      titleKey: "areasGallery.cultural.title",
      descKey: "areasGallery.cultural.desc",
      scaleKey: "areasGallery.cultural.scale",
      image: NavCard2,
      topics: [
        "areasGallery.cultural.topic1",
        "areasGallery.cultural.topic2",
        "areasGallery.cultural.topic3",
        "areasGallery.cultural.topic4"
      ]
    },
    {
      titleKey: "areasGallery.diseases.title",
      descKey: "areasGallery.diseases.desc",
      scaleKey: "areasGallery.diseases.scale",
      image: PlasticSea,
      topics: [
        "areasGallery.diseases.topic1",
        "areasGallery.diseases.topic2",
        "areasGallery.diseases.topic3",
        "areasGallery.diseases.topic4"
      ]
    },
    {
      titleKey: "areasGallery.climate.title",
      descKey: "areasGallery.climate.desc",
      scaleKey: "areasGallery.climate.scale",
      image: SeaWoods,
      topics: [
        "areasGallery.climate.topic1",
        "areasGallery.climate.topic2",
        "areasGallery.climate.topic3",
        "areasGallery.climate.topic4"
      ]
    },
    {
      titleKey: "areasGallery.coastal.title",
      descKey: "areasGallery.coastal.desc",
      scaleKey: "areasGallery.coastal.scale",
      image: tijuanotas,
      topics: [
        "areasGallery.coastal.topic1",
        "areasGallery.coastal.topic2",
        "areasGallery.coastal.topic3",
        "areasGallery.coastal.topic4"
      ]
    },
    {
      titleKey: "areasGallery.paleo.title",
      descKey: "areasGallery.paleo.desc",
      scaleKey: "areasGallery.paleo.scale",
      image: null,
      topics: [
        "areasGallery.paleo.topic1",
        "areasGallery.paleo.topic2",
        "areasGallery.paleo.topic3",
        "areasGallery.paleo.topic4"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground ">
            {t("areasGallery.areasOf")} <span className="text-accent">{t("areasGallery.ofReflection")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("areasGallery.galleryDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-pacific transition-all duration-300">
              {area.image && (
                <div className="h-48 bg-cover bg-center rounded-t-lg"
                     style={{ backgroundImage: `url(${area.image})` }} />
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{t(area.titleKey)}</CardTitle>
                  <span className="text-xs text-accent font-semibold bg-accent/10 px-2 py-1 rounded">
                    {t(area.scaleKey)}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{t(area.descKey)}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">{t("areasGallery.keyTopics")}</h4>
                <ul className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {t(topic)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                {t("areasGallery.interdisciplinary.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("areasGallery.interdisciplinary.desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}