import { useLanguage } from "@/hooks/useLanguage";
import { useRotatingImage } from "@/hooks/useRotatingImage";

const RAPA_IMAGES: string[] = [
  "/images/NoCircles/5 rapa.jpeg",
  "/images/NoCircles/6 rapa.jpeg",
  "/images/NoCircles/7 rapa.jpeg",
  "/images/NoCircles/8 rapa.jpeg",
  "/images/NoCircles/9 rapa.jpeg",
  "/images/NoCircles/10 rapa.jpeg",
  "/images/NoCircles/11 rapa.jpeg",
  "/images/NoCircles/12 rapa.jpeg",
  "/images/NoCircles/13 rapa.jpeg",
  "/images/NoCircles/14 rapa.jpeg",
  "/images/NoCircles/15 rapa.jpeg",
  "/images/NoCircles/16 rapa.jpeg",
  "/images/NoCircles/17 rapa.jpeg",
  "/images/NoCircles/18 rapa.jpeg",
  "/images/NoCircles/19 rapa.jpeg",
  "/images/NoCircles/22 rapa.jpeg",
  "/images/NoCircles/24 rapa.jpeg",
  "/images/NoCircles/25 rapa.jpeg",
  "/images/NoCircles/26 rapa.jpeg",
];

function AreaCard({ area, index }: { area: any; index: number }) {
  const { t } = useLanguage();
  const { currentImage, opacity } = useRotatingImage(RAPA_IMAGES, 6000);

  return (
    <div className="flex flex-col items-center my-4">
      <div className="flex items-center gap-4 mb-12 w-full justify-center">
        {currentImage && (
          <div
            className="w-60 h-60 rounded-full overflow-hidden flex-shrink-0 border-8 relative"
            style={{
              borderColor: "#000000ff",
            }}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url("${currentImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: opacity,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          </div>
        )}
      </div>
      <div className="text-5xl text-primary">O{index + 1}</div>
      <div className="w-full text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-3 uppercase">
          {t(area.titleKey)}
        </h3>

        <p className="text-lg font-semibold text-primary mb-4">
          {t(area.descKey)}
        </p>

        <div>
          <h4 className="font-semibold text-blue-900 mb-2 text-lg">
            {t("areasGallery.keyTopics")}
          </h4>
          <ul className="flex flex-col gap-1">
            {area.topics.map((topic: string, topicIndex: number) => (
              <li
                key={topicIndex}
                className="text-sm text-primary hover:underline cursor-pointer"
              >
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
        "areasGallery.islands.topic4",
      ],
    },
    {
      titleKey: "areasGallery.cultural.title",
      descKey: "areasGallery.cultural.desc",
      scaleKey: "areasGallery.cultural.scale",
      topics: [
        "areasGallery.cultural.topic1",
        "areasGallery.cultural.topic2",
        "areasGallery.cultural.topic3",
        "areasGallery.cultural.topic4",
      ],
    },
    {
      titleKey: "areasGallery.diseases.title",
      descKey: "areasGallery.diseases.desc",
      scaleKey: "areasGallery.diseases.scale",
      topics: [
        "areasGallery.diseases.topic1",
        "areasGallery.diseases.topic2",
        "areasGallery.diseases.topic3",
        "areasGallery.diseases.topic4",
      ],
    },
    {
      titleKey: "areasGallery.climate.title",
      descKey: "areasGallery.climate.desc",
      scaleKey: "areasGallery.climate.scale",
      topics: [
        "areasGallery.climate.topic1",
        "areasGallery.climate.topic2",
        "areasGallery.climate.topic3",
        "areasGallery.climate.topic4",
      ],
    },
    {
      titleKey: "areasGallery.coastal.title",
      descKey: "areasGallery.coastal.desc",
      scaleKey: "areasGallery.coastal.scale",
      topics: [
        "areasGallery.coastal.topic1",
        "areasGallery.coastal.topic2",
        "areasGallery.coastal.topic3",
        "areasGallery.coastal.topic4",
      ],
    },
    {
      titleKey: "areasGallery.paleo.title",
      descKey: "areasGallery.paleo.desc",
      scaleKey: "areasGallery.paleo.scale",
      topics: [
        "areasGallery.paleo.topic1",
        "areasGallery.paleo.topic2",
        "areasGallery.paleo.topic3",
        "areasGallery.paleo.topic4",
      ],
    },
  ];

  return (
    <section className="bg-background">
      <div className="bg-blue-800 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-start gap-6 mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-primary pt-2 leading-tight">
              {t("areasGallery.areasOf").toUpperCase()}{" "}
              {t("areasGallery.ofReflection").toUpperCase()}
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
