import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileStatueImage from "/images/RapaNiuProfileStatue.png";
import NavCard from "/images/NavCard.jpg";
import NavCard2 from "/images/NavCard2.jpg";
import SeaWoods from "/images/SeaWoods.webp";
import PlasticSea from "/images/plasticsea.jpeg";
import tijuanotas from "/images/tijuanotas.jpg";
import { useLanguage } from "@/hooks/useLanguage";

import Circle2 from "/images/01_agua_azul.png";
import Circle3 from "/images/03agua_azul.png";
import Circle4 from "/images/05agua_azul.png";
import Circle5 from "/images/06agua_azul.png";
import Circle6 from "/images/07agua_azul.png";
import Circle7 from "/images/08agua_azul.png";

export function AreasOfReflectionGallery() {
  const { t } = useLanguage();

  const areas = [
    {
      titleKey: "areasGallery.islands.title",
      descKey: "areasGallery.islands.desc",
      scaleKey: "areasGallery.islands.scale",
      image: Circle2,
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
      image: Circle3,
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
      image: Circle4,
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
      image: Circle5,
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
      image: Circle6,
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
      image: Circle7,
      topics: [
        "areasGallery.paleo.topic1",
        "areasGallery.paleo.topic2",
        "areasGallery.paleo.topic3",
        "areasGallery.paleo.topic4"
      ]
    }
  ];

  return (
    <section className="my-6 bg-background ">
      {/* Header Section */}
      <div className="bg-blue-900 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-start gap-6 mb-6">
            
            <h2 className="text-5xl md:text-6xl font-bold text-primary pt-2 leading-tight">
              {t("areasGallery.areasOf").toUpperCase()}  {t("areasGallery.ofReflection").toUpperCase()}
            </h2>
          </div>
          <div className=" p-4 border-l-4 border-primary">
            <p className="text-sm text-orange-700 leading-relaxed font-semibold">
              {t("areasGallery.galleryDesc")}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 px-4 ">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="flex flex-col items-center my-4">
                {/* Number and Circular Image */}
                <div className="flex items-center gap-4 mb-12 w-full justify-center">
                  {/* <div className="text-3xl  text-primary">
                    O{index + 1}
                  </div> */}
                  {area.image && (
                    <div className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-900"
                         style={{ backgroundImage: `url(${area.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  )}
                </div>
                <div className="text-5xl  text-primary">
                    O{index + 1}
                  </div>
                {/* Content */}
                <div className="w-full text-center">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 uppercase">
                    {t(area.titleKey)}
                  </h3>
                  
                  <p className="text-lg font-semibold text-primary mb-4">
                    {t(area.descKey)}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2 text-lg">{t("areasGallery.keyTopics")}</h4>
                    <ul className="flex flex-col gap-1">
                      {area.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-primary hover:underline cursor-pointer">
                          {t(topic)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}