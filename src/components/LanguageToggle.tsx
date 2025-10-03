import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="font-semibold min-w-[50px]"
    >
      {language === "en" ? "ES" : "EN"}
    </Button>
  );
};

export default LanguageToggle;
