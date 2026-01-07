import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageToggle from "./LanguageToggle";
import MataKiteRangiLogo from "/images/logo_fundacion_mktr_white.png";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-blue-800 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 flex-wrap">
              {/* <img src={MataKiteRangiLogo} 
              alt="MataKiteRangiFundation" 
              width="80" 
              height="80"/> */}
              <h1 className="text-lg text-orange-600 sm:text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                {t("header.title").toUpperCase()}
              </h1>
              <span className="text-muted-foreground hidden sm:inline">|</span>
              <span className="text-xs sm:text-sm md:text-base text-white font-bold">
                {t("header.subtitle").toUpperCase()}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#call-papers" className="text-foreground hover:text-primary text-orange-600 font-bold">
              {t("header.callForPapers")}
            </a>
            <a href="#areas" className="text-foreground hover:text-primary text-orange-600 font-bold">
              {t("header.areas")}
            </a>
            <a href="#registration" className="text-foreground hover:text-primary text-orange-600 font-bold">
              {t("header.registration")}
            </a>
            <a href="#venue" className="text-foreground hover:text-primary text-orange-600 font-bold">
              {t("header.venue")}
            </a>
            <LanguageToggle />
            {/* <Button variant="outline">{t("header.registerNow")}</Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;