import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import OceanImg from "/images/ocean.jpg";

const CongressHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-0 w-full h-full">
        {/* Image on the left */}
        <div className="col-span-3 row-span-5 relative">
          <img
            src={OceanImg}
            alt="Moai statues at Easter Island representing Pacific archaeology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-volcanic/80 via-volcanic/60 to-transparent"></div>
        </div>
        {/* Empty grid area for spacing */}
        <div className="col-span-2 row-span-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 text-left text-white flex justify-end ">
        <div className="max-w-5xl w-full md:w-3/4 lg:w-2/3 flex flex-col items-end">
          <Badge className="mb-6 bg-congress-yellow text-volcanic font-bold text-lg px-6 py-2 text-blue-900 text-opacity-65 ">
            {t("congressHero.badge")}
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-4xl font-bold mb-8 text-orange-800 text-opacity-65 leading-tight tracking-wider text-right w-full">
            <span className="text-blue-800">{t("congressHero.title1")}</span>
            <br />
            {t("congressHero.title2")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pacific-blue to-coral text-orange-800 text-opacity-65"></span>
            <br />
            {t("congressHero.title3")}
          </h1>

          <p className="text-lg mt-4 text-accent leading-relaxed max-w-3xl text-orange-800 text-opacity-65 text-right w-full">
            {t("congressHero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-end w-full my-px-24">
            <Button
              size="lg"
              variant="congress"
              className="text-lg px-8 py-6 text-orange-800 text-opacity-65"
            >
              {t("congressHero.submitAbstract")}
            </Button>
            <Button
              size="lg"
              variant="yellow"
              className="text-lg px-8 py-6 text-orange-800 text-opacity-65"
            >
              {t("congressHero.registerNow")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-accent text-pacific-blue bg-blue/20 hover:bg-white/40 hover:text-volcanic text-accent"
              style={{ backdropFilter: "blur(2px)" }}
            >
              {t("congressHero.callForPapers")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongressHero;
