import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("footer.title")}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">{t("footer.aboutExhibition")}</a></li>
              <li><a href="#artifacts" className="hover:text-primary-foreground transition-colors">{t("footer.featuredArtifacts")}</a></li>
              <li><a href="#details" className="hover:text-primary-foreground transition-colors">{t("footer.visitorInfo")}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t("footer.virtualTour")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.visitUs")}</h4>
            <div className="text-primary-foreground/80 space-y-2">
              <p>{t("footer.museum")}</p>
              <p>{t("footer.address")}</p>
              <p>{t("footer.phone")}</p>
              <p>{t("footer.email")}</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("footer.facebook")}
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("footer.twitter")}
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t("footer.instagram")}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;