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
    <section className="flex flex-col min-h-screen">
      {/* Blue Header Section */}
      <div className="bg-blue-800 py-12 px-4 shadow-lg z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 sm:gap-12 md:gap-24">
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500 bg-white">
            <img
              src={NO_CIRCLES_IMAGES[0]}
              alt="Arqueología Pacifico 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500 bg-white">
            <img
              src={NO_CIRCLES_IMAGES[6]}
              alt="Arqueología Pacifico 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Beige Middle Content Section */}
      <div className="bg-[#ffeecd] flex-1 py-16 px-4 flex flex-col items-center justify-center relative">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Subtitle/Badge at top right-ish of beige section */}
          <div className="md:absolute md:top-12 md:right-12 text-orange-700 font-semibold mb-4 md:mb-0">
            First International Congress
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase">
            <span className="text-blue-900 block mb-2">
              ARCHEOLOGY CONGRESS:
            </span>
            <span className="text-orange-700">
              CHANGING ENVIRONMENT IN THE PACIFIC
            </span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-orange-700 leading-relaxed font-medium">
              Exploring the dynamic relationship between archaeological heritage
              and environmental transformations across Pacific regions. Join
              leading researchers in Chile's wine country, on the 18th, 19th,
              20th and 21st of November 2026, Santa Cruz, Chile.
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <IframeModal
              buttonText="Submit Your Abstract"
              iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
              iframeTitle={t("congressHero.iframeTitle")}
              colorPalette={ColorPalette.BlueOrange}
              closeButtonText={t("congressHero.closeButton")}
              className="text-orange-700 font-bold text-xl md:text-2xl hover:scale-105 transition-transform bg-transparent p-0 border-none shadow-none"
            />

            <IframeModal
              buttonText="Register Now"
              iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
              iframeTitle={t("congressHero.iframeTitle")}
              colorPalette={ColorPalette.BlueOrange}
              closeButtonText={t("congressHero.closeButton")}
              className="text-orange-700 font-bold text-xl md:text-2xl hover:scale-105 transition-transform bg-transparent p-0 border-none shadow-none"
            />

            <IframeModal
              buttonText="Call for Papers"
              iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
              iframeTitle={t("congressHero.iframeTitle")}
              colorPalette={ColorPalette.BlueOrange}
              closeButtonText={t("congressHero.closeButton")}
              className="text-orange-700 font-bold text-xl md:text-2xl hover:scale-105 transition-transform bg-transparent p-0 border-none shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Blue Footer Section */}
      <div className="bg-blue-800 py-12 px-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 sm:gap-12 md:gap-24">
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500 bg-white">
            <img
              src={NO_CIRCLES_IMAGES[2]}
              alt="Arqueología Pacifico 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative aspect-square border-[6px] border-dashed border-orange-500 bg-white">
            <img
              src={NO_CIRCLES_IMAGES[3]}
              alt="Arqueología Pacifico 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongressHero;
