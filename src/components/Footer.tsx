import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("footer.title")}</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              {t("footer.description")}
            </p>

            {/* Previous Conference Reference */}
            <div className="mt-6 pt-4 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60 mb-1">
                {t("footer.followingFrom")}
              </p>
              <p className="text-sm font-semibold text-primary-foreground/90">
                {t("footer.previous2016Congress")}
              </p>
              <p className="text-xs text-primary-foreground/60">
                {t("footer.ubudBali")}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.congressLinks")}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#call-papers" className="hover:text-primary-foreground transition-colors">{t("footer.callForPapers")}</a></li>
              <li><a href="#areas" className="hover:text-primary-foreground transition-colors">{t("footer.researchAreas")}</a></li>
              <li><a href="#registration" className="hover:text-primary-foreground transition-colors">{t("footer.registration")}</a></li>
              <li><a href="#venue" className="hover:text-primary-foreground transition-colors">{t("footer.venueTravel")}</a></li>
              <li><a href="#schedule" className="hover:text-primary-foreground transition-colors">{t("footer.schedule")}</a></li>
              <li><a href="#committee" className="hover:text-primary-foreground transition-colors">{t("footer.committee")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <div className="text-primary-foreground/80 space-y-2 text-sm">
              <p className="font-semibold text-primary-foreground">{t("footer.foundation")}</p>
              <p>{t("footer.location")}</p>
              <p>{t("footer.phone")}</p>
              <p>{t("footer.email")}</p>
              <p className="mt-3">
                <a
                  href="https://earlypacificmigration.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors underline"
                >
                  {t("footer.website")}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.followUs")}</h4>
            <div className="flex flex-col space-y-2 text-primary-foreground/80 text-sm">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                {t("footer.facebook")}
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                {t("footer.twitter")}
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                {t("footer.instagram")}
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                {t("footer.linkedin")}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;