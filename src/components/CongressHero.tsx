import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { useRotatingImage } from "@/hooks/useRotatingImage";
import { IframeModal, ColorPalette } from "./IframeModal";

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
    <div className="w-full h-full rounded-full overflow-hidden relative aspect-square">
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-5 grid-rows-1 md:grid-rows-5 gap-0 w-full h-full">
        {/* Images on the left */}
        <div className="col-span-full md:col-span-3 row-span-full md:row-span-5 relative flex items-center justify-center p-8 md:border-r-4 md:border-blue-900 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)] bg-blue-800">
          <div className="grid grid-cols-2 gap-8 max-w-2xl w-full aspect-square scale-90">
            <div className="w-full h-full rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500">
              <img
                src={NO_CIRCLES_IMAGES[0]}
                alt="Congreso Arqueología"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500">
              <img
                src={NO_CIRCLES_IMAGES[6]}
                alt="Congreso Arqueología"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500">
              <img
                src={NO_CIRCLES_IMAGES[2]}
                alt="Congreso Arqueología"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500">
              <img
                src={NO_CIRCLES_IMAGES[3]}
                alt="Congreso Arqueología"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-volcanic/10 via-volcanic/5 to-transparent pointer-events-none"></div>
        </div>
        {/* Empty grid area for spacing */}
        <div className="hidden md:block md:col-span-2 md:row-span-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 flex justify-center md:justify-end">
        <div className="w-full md:w-2/5 lg:w-2/5 flex flex-col items-center md:items-end text-center md:text-right">
          <Badge className="mb-6 bg-congress-yellow text-volcanic font-bold text-lg px-6 py-2 text-orange-700">
            {t("congressHero.badge")}
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-orange-700 leading-tight tracking-wider w-full">
            <span className="text-blue-900">{t("congressHero.title1")}</span>
            <br />
            {t("congressHero.title2")}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8  text-orange-700 leading-tight tracking-wider w-full"></span>
            <br />
            {t("congressHero.title3")}
          </h1>

          <p className="text-base sm:text-lg md:text-xl mt-4 text-accent leading-relaxed font-bold text-volcanic text-orange-700  w-full">
            {t("congressHero.description")}
          </p>

          <div className="flex flex-col xlg:flex-row gap-3 sm:gap-4 justify-center lg:justify-end w-full mt-8 md:mt-12">
            <IframeModal
              buttonText={t("congressHero.submitAbstract")}
              iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
              iframeTitle={t("congressHero.iframeTitle")}
              colorPalette={ColorPalette.BlueOrange}
              closeButtonText={t("congressHero.closeButton")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-pacific-blue to-pacific-teal hover:shadow-congress hover:scale-105 transition-all duration-300 font-semibold h-11 px-8 text-sm sm:text-base md:text-lg py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-primary text-opacity-65 w-full lg:w-auto"
            />

            <IframeModal
              buttonText={t("congressHero.registerNow")}
              iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
              iframeTitle={t("congressHero.iframeTitle")}
              colorPalette={ColorPalette.BlueOrange}
              closeButtonText={t("congressHero.closeButton")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-pacific-blue to-pacific-teal hover:shadow-congress hover:scale-105 transition-all duration-300 font-semibold h-11 px-8 text-sm sm:text-base md:text-lg py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-primary text-opacity-65 w-full lg:w-auto"
            />

            <IframeModal
              buttonText={t("congressHero.callForPapers")}
              iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
              iframeTitle={t("congressHero.iframeTitle")}
              colorPalette={ColorPalette.BlueOrange}
              closeButtonText={t("congressHero.closeButton")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-pacific-blue to-pacific-teal hover:shadow-congress hover:scale-105 transition-all duration-300 font-semibold h-11 px-8 text-sm sm:text-base md:text-lg py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 text-primary text-opacity-65 w-full lg:w-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongressHero;
