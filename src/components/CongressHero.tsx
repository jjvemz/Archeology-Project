import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { useRotatingImage } from "@/hooks/useRotatingImage";

// Images from public/images/NoCircles
const NO_CIRCLES_IMAGES = [
  '/images/NoCircles/5 rapa.jpeg',
  '/images/NoCircles/6 rapa.jpeg',
  '/images/NoCircles/7 rapa.jpeg',
  '/images/NoCircles/8 rapa.jpeg',
  '/images/NoCircles/9 rapa.jpeg',
  '/images/NoCircles/10 rapa.jpeg',
  '/images/NoCircles/11 rapa.jpeg',
  '/images/NoCircles/12 rapa.jpeg',
  '/images/NoCircles/13 rapa.jpeg',
  '/images/NoCircles/14 rapa.jpeg',
  '/images/NoCircles/15 rapa.jpeg',
  '/images/NoCircles/16 rapa.jpeg',
  '/images/NoCircles/17 rapa.jpeg',
  '/images/NoCircles/18 rapa.jpeg',
  '/images/NoCircles/19 rapa.jpeg',
  '/images/NoCircles/22 rapa.jpeg',
  '/images/NoCircles/24 rapa.jpeg',
  '/images/NoCircles/25 rapa.jpeg',
  '/images/NoCircles/26 rapa.jpeg',
];

const RotatingCircle = ({ delay = 0 }: { delay?: number }) => {
  const { currentImage, opacity } = useRotatingImage(NO_CIRCLES_IMAGES, 4000);
  
  // Optional: add a delay to desynchronize the rotations if needed, 
  // though useRotatingImage logic might need adjustment for true delay start.
  // For now, simple random start in hook helps, but we can also use CSS animation delay if we were animating CSS.
  // Since the hook handles rotation logic, let's just rely on the hook's random start or we could pass offset to hook.
  // The current hook doesn't support start delay, but it randomizes start image.
  
  return (
    <div className="w-full h-full rounded-full overflow-hidden relative aspect-square">
        {currentImage && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url("${currentImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: opacity,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        )}
    </div>
  );
};

const CongressHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 mb-24">
      {/* Background Image Grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-5 grid-rows-1 md:grid-rows-5 gap-0 w-full h-full">
        {/* Images on the left */}
        <div className="col-span-full md:col-span-3 row-span-full md:row-span-5 relative flex items-center justify-center p-8">
          <div className="grid grid-cols-2 gap-8 max-w-2xl w-full aspect-square scale-90">
             <RotatingCircle delay={9000} />
             <RotatingCircle delay={10500} />
             <RotatingCircle delay={8000} />
             <RotatingCircle delay={7500} />
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
            <Button
              size="lg"
              variant="congress"
              className="text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6  text-primary text-opacity-65 w-full lg:w-auto"
            >
              {t("congressHero.submitAbstract")}
            </Button>
            <Button
              size="lg"
              variant="congress"
              className="text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6  text-primary text-opacity-65 w-full lg:w-auto"
            >
              {t("congressHero.registerNow")}
            </Button>
            <Button
              size="lg"
              variant="congress"
              className="text-sm sm:text-base md:text-lg px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 border-accent text-pacific-blue bg-blue/20  hover:text-volcanic text-accent w-full lg:w-auto"
            >
              {t("congressHero.callForPapers")}
            </Button>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default CongressHero;
