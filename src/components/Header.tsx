import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">{t("header.title")}</h1>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">{t("header.subtitle")}</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#call-papers" className="text-foreground hover:text-primary transition-colors">
              {t("header.callForPapers")}
            </a>
            <a href="#areas" className="text-foreground hover:text-primary transition-colors">
              {t("header.areas")}
            </a>
            <a href="#registration" className="text-foreground hover:text-primary transition-colors">
              {t("header.registration")}
            </a>
            <a href="#venue" className="text-foreground hover:text-primary transition-colors">
              {t("header.venue")}
            </a>
            <LanguageToggle />
            <Button variant="congress">{t("header.registerNow")}</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;