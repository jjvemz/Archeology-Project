import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { useRotatingImage } from "@/hooks/useRotatingImage";
import { IframeModal, ColorPalette } from "./IframeModal";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

// Images from public/images/NoCircles
const NO_CIRCLES_IMAGES = [
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

const RotatingCircle = ({ delay = 0 }: { delay?: number }) => {
  const { currentImage, opacity } = useRotatingImage(NO_CIRCLES_IMAGES, 4000);

  return (
    <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500 bg-white flex-shrink-0">
      {currentImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("${currentImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: opacity,
            transition: "opacity 1s ease-in-out",
          }}
        />
      )}
    </div>
  );
};

const CongressHero = () => {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
  });

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 1600);
      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  return (
    <section className="flex flex-col min-h-screen">
      {/* Blue Header Section with Carousel */}
      <div className="bg-blue-800 py-12 px-4 shadow-lg z-10 overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex items-center">
            {/* Carousel Slides - Show at least 6 slides for better carousel feel */}
            <div className="embla__slide flex-[0_0_auto] px-4 sm:px-12 md:px-24">
              <RotatingCircle delay={0} />
            </div>
            <div className="embla__slide flex-[0_0_auto] px-4 sm:px-12 md:px-24">
              <RotatingCircle delay={1000} />
            </div>
            <div className="embla__slide flex-[0_0_auto] px-4 sm:px-12 md:px-24">
              <RotatingCircle delay={2000} />
            </div>
            <div className="embla__slide flex-[0_0_auto] px-4 sm:px-12 md:px-24">
              <RotatingCircle delay={3000} />
            </div>
            <div className="embla__slide flex-[0_0_auto] px-4 sm:px-12 md:px-24">
              <RotatingCircle delay={4000} />
            </div>
            <div className="embla__slide flex-[0_0_auto] px-4 sm:px-12 md:px-24">
              <RotatingCircle delay={5000} />
            </div>
          </div>
        </div>
      </div>

      {/* Beige Middle Content Section */}
      <div className="bg-[#ffeecd] flex-1 py-16 px-4 flex flex-col items-center justify-center relative">
        <div className="max-w-4xl w-full text-center space-y-8 flex flex-col items-center">
          {/* Subtitle/Badge now part of the vertical centering stack */}
          <div className="text-orange-700 font-semibold mb-2">
            {t("congressHero.badge")}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="text-blue-900 block mb-2">
              {t("congressHero.title1")}
            </span>
            <span className="text-orange-700">
              {t("congressHero.title2")} {t("congressHero.title3")}
            </span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-orange-700 leading-relaxed font-medium">
              {t("congressHero.description")}
              <br />
              <br />
              {t("congressHero.eventDetails")}
            </p>
          </div>

          <div className="flex flex-col gap-8 pt-8 w-full items-center">
            {/* Top row: side by side */}
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center w-full">
              <IframeModal
                buttonText={t("congressHero.submitAbstract")}
                iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
                iframeTitle={t("congressHero.iframeTitle")}
                colorPalette={ColorPalette.BlueOrange}
                closeButtonText={t("congressHero.closeButton")}
                className="inline-flex items-center justify-center rounded-full border border-orange-700 px-10 py-4 text-lg md:text-xl font-bold text-orange-700 hover:bg-orange-700/10 transition-all duration-300 shadow-sm uppercase tracking-wider"
              />

              <IframeModal
                buttonText={t("congressHero.registerNow")}
                iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
                iframeTitle={t("congressHero.iframeTitle")}
                colorPalette={ColorPalette.BlueOrange}
                closeButtonText={t("congressHero.closeButton")}
                className="inline-flex items-center justify-center rounded-full border border-orange-700 px-10 py-4 text-lg md:text-xl font-bold text-orange-700 hover:bg-orange-700/10 transition-all duration-300 shadow-sm uppercase tracking-wider"
              />
            </div>

            {/* Bottom row: centered below */}
            <IframeModal
              buttonText={t("congressHero.callForPapers")}
              iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
              iframeTitle={t("congressHero.iframeTitle")}
              colorPalette={ColorPalette.BlueOrange}
              closeButtonText={t("congressHero.closeButton")}
              className="inline-flex items-center justify-center rounded-full border border-orange-700 px-10 py-4 text-lg md:text-xl font-bold text-orange-700 hover:bg-orange-700/10 transition-all duration-300 shadow-sm uppercase tracking-wider"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongressHero;
