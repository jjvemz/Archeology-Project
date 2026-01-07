import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import OceanImg from "/images/ocean.jpg";
import Circulos from "/images/circulos1.png";


const CongressHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 mb-24">
      {/* Background Image */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-5 grid-rows-1 md:grid-rows-5 gap-0 w-full h-full">
        {/* Image on the left */}
        <div className="col-span-full md:col-span-3 row-span-full md:row-span-5 relative ">
          <div className="absolute inset-0 bg-gradient-to-r from-volcanic/80 via-volcanic/60 to-transparent flex items-center justify-center">
            {/* <img
              src="/images/logo_centro-removebg-preview.png"
              alt="Pacific Congress Logo"
              className="w-full h-full object-cover"
            /> */}
          </div>
          <img
            src={Circulos}
            alt="Moai statues at Easter Island representing Pacific archaeology"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-volcanic/80 via-volcanic/60 to-transparent"></div>
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
