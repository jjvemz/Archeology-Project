// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import ProfileStatueImage from "/images/RapaNiuProfileStatue.png";
// import NavCard from "/images/NavCard.jpg";
// import NavCard2 from "/images/NavCard2.jpg";
// import SeaWoods from "/images/SeaWoods.webp";
// import PlasticSea from "/images/plasticsea.jpeg";
// import tijuanotas from "/images/tijuanotas.jpg";
import { useLanguage } from "@/hooks/useLanguage";
import { useRotatingImage } from "@/hooks/useRotatingImage";

// RAPA images constant array for rotating circle images
const RAPA_IMAGES: string[] = [
  '/images/circles/A RAPA.png',
  '/images/circles/B RAPA.png',
  '/images/circles/C rapa.png',
  '/images/circles/D RAPA.png',
  '/images/circles/E RAPA.png',
  '/images/circles/F RAPA.png',
  '/images/circles/G RAPA.png',
  '/images/circles/H RAPA.png',
  '/images/circles/I RAPA.png',
  '/images/circles/J RAPA.png',
  '/images/circles/K RAPA.png',
  '/images/circles/M RAPA.png',
  '/images/circles/Ñ RAPA.png',
  '/images/circles/O RAPA.png',
  '/images/circles/P RAPA.png',
  '/images/circles/Q RAPA.png',
  '/images/circles/R RAPA.png',
  '/images/circles/S RAPA.png',
  '/images/circles/T RAPA.png',
  '/images/circles/W RAPA.png'
];

// Component for rendering a single area with rotating circle image
function AreaCard({ area, index }: { area: any; index: number }) {
  const { t } = useLanguage();
  const { currentImage, opacity } = useRotatingImage(RAPA_IMAGES, 3000);

  return (
    <div className="flex flex-col items-center my-4">
      {/* Number and Circular Image */}
      <div className="flex items-center gap-4 mb-12 w-full justify-center">
        {currentImage && (
          <div
            className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0 border-4 relative"
            style={{
              borderColor: '#1c1d57'
            }}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url("${currentImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: opacity,
                transition: 'opacity 0.5s ease-in-out'
              }}
            />
          </div>
        )}
      </div>
      <div className="text-5xl text-primary">O{index + 1}</div>
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
            {area.topics.map((topic: string, topicIndex: number) => (
              <li key={topicIndex} className="text-sm text-primary hover:underline cursor-pointer">
                {t(topic)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AreasOfReflectionGallery() {
  const { t } = useLanguage();

  const areas = [
    {
      titleKey: "areasGallery.islands.title",
      descKey: "areasGallery.islands.desc",
      scaleKey: "areasGallery.islands.scale",
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
      <div className="bg-blue-800 py-8 px-4">
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
              <AreaCard key={index} area={area} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}