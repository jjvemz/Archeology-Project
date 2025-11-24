import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import MataKiteRangiLogo from "/images/logo_fundacion_mktr_white.png";


const PLACEHOLDER_LOGO = "https://placehold.co/300x120/1e3a5f/ffffff?text=Logo";

const SponsorsPartners = () => {
  const { t } = useLanguage();

  const sponsors = {
    platinum: [
      {
        nameKey: "sponsors.mataKiTeRangi.name",
        logo: MataKiteRangiLogo,
        url: "https://fundacionmatakiterangi.cl/index.php/es/",
        descKey: "sponsors.mataKiTeRangi.desc"
      }
    ],
    gold: [
      {
        nameKey: "sponsors.nationalGeographic.name",
        logo: PLACEHOLDER_LOGO,
        url: "#"
      },
      {
        nameKey: "sponsors.nsf.name",
        logo: PLACEHOLDER_LOGO,
        url: "#"
      },
      {
        nameKey: "sponsors.chileMinistry.name",
        logo: "https://www.cultura.gob.cl/wp-content/themes/cnca-portal-2021/imagenes/logo-mincap.svg",
        url: "#"
      }
    ],
    silver: [
      {
        nameKey: "sponsors.smithsonian.name",
        logo: PLACEHOLDER_LOGO,
        url: "#"
      },
      {
        nameKey: "sponsors.bishopMuseum.name",
        logo: PLACEHOLDER_LOGO,
        url: "#"
      },
      {
        nameKey: "sponsors.archaeologicalInstitute.name",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ku-ucph-logo-svg.svg/330px-Ku-ucph-logo-svg.svg.png",
        url: "#"
      },
      {
        nameKey: "sponsors.pacificArchaeology.name",
        logo: PLACEHOLDER_LOGO,
        url: "#"
      }
    ],
    partners: [
      {
        nameKey: "sponsors.universityHawaii.name",
        logo: "https://en.wikipedia.org/wiki/University_of_Hawai%CA%BBi#/media/File:University_of_Hawaii_seal.svg",
        typeKey: "sponsors.partnerType.academic"
      },
      {
        nameKey: "sponsors.universityChile.name",
        logo: "https://uchile.cl/dam/imagenes/Uchile/imagenes-contenidos-generales/LogoUdeChile/02-escudo-uchile-jpg/escudo-uchile-vertical-color.jpg",
        typeKey: "sponsors.partnerType.academic"
      },
      {
        nameKey: "sponsors.australianNationalUniversity.name",
        logo: PLACEHOLDER_LOGO,
        typeKey: "sponsors.partnerType.academic"
      },
      {
        nameKey: "sponsors.museumSantiago.name",
        logo: PLACEHOLDER_LOGO,
        typeKey: "sponsors.partnerType.cultural"
      },
      {
        nameKey: "sponsors.bernicePauahi.name",
        logo: PLACEHOLDER_LOGO,
        typeKey: "sponsors.partnerType.cultural"
      },
      {
        nameKey: "sponsors.aucklandMuseum.name",
        logo: PLACEHOLDER_LOGO,
        typeKey: "sponsors.partnerType.cultural"
      },
      {
        nameKey: "sponsors.rapaNuiCommunity.name",
        logo: PLACEHOLDER_LOGO,
        typeKey: "sponsors.partnerType.community"
      },
      {
        nameKey: "sponsors.polynesiaSociety.name",
        logo: PLACEHOLDER_LOGO,
        typeKey: "sponsors.partnerType.research"
      }
    ]
  };

  return (
    <section id="sponsors" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-orange-800">
              {t("sponsors.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-orange-800">
              {t("sponsors.description")}
            </p>
          </div>

          {/* Platinum Tier */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-pacific-blue w-20" />
              <h3 className="text-2xl font-bold text-orange-800">
                {t("sponsors.platinum")}
              </h3>
              <div className="h-px bg-pacific-blue w-20" />
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              {sponsors.platinum.map((sponsor, idx) => (
                <Card key={idx} className="shadow-congress hover:shadow-warm transition-shadow">
                  <CardContent className="p-8 text-center">
                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={sponsor.logo}
                        alt={t(sponsor.nameKey)}
                        className="h-32 mx-auto mb-6 object-contain"
                      />
                      <h4 className="text-xl font-bold mb-3 text-orange-800">
                        {t(sponsor.nameKey)}
                      </h4>
                      {sponsor.descKey && (
                        <p className="text-muted-foreground text-orange-800">
                          {t(sponsor.descKey)}
                        </p>
                      )}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gold Tier
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-congress-yellow w-20" />
              <h3 className="text-2xl font-bold text-congress-yellow">
                {t("sponsors.gold")}
              </h3>
              <div className="h-px bg-congress-yellow w-20" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {sponsors.gold.map((sponsor, idx) => (
                <Card key={idx} className="shadow-card hover:shadow-congress transition-shadow">
                  <CardContent className="p-6 text-center">
                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={sponsor.logo}
                        alt={t(sponsor.nameKey)}
                        className="h-20 mx-auto mb-3 object-contain"
                      />
                      <h4 className="text-sm font-semibold text-foreground">
                        {t(sponsor.nameKey)}
                      </h4>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          {/* <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-gray-400 w-20" />
              <h3 className="text-2xl font-bold text-gray-600">
                {t("sponsors.silver")}
              </h3>
              <div className="h-px bg-gray-400 w-20" />
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {sponsors.silver.map((sponsor, idx) => (
                <Card key={idx} className="shadow-card hover:shadow-congress transition-shadow">
                  <CardContent className="p-4 text-center">
                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={sponsor.logo}
                        alt={t(sponsor.nameKey)}
                        className="h-16 mx-auto object-contain"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        {t(sponsor.nameKey)}
                      </p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div> 
          </div>*/}

          {/* Partners Section */}
          {/*<div className="mt-20">
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px bg-pacific-teal w-20" />
              <h3 className="text-3xl font-bold text-pacific-teal text-center">
                {t("sponsors.institutionalPartners")}
              </h3>
              <div className="h-px bg-pacific-teal w-20" />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {sponsors.partners.map((partner, idx) => (
                <div key={idx} className="text-center group">
                  <div className="bg-white p-4 rounded-lg shadow-card hover:shadow-congress transition-shadow mb-3">
                    <img
                      src={partner.logo}
                      alt={t(partner.nameKey)}
                      className="h-20 mx-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {t(partner.typeKey)}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t(partner.nameKey)}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Become a Sponsor CTA */}
          <Card className="mt-16 shadow-congress">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-800 text-opacity-65">
                {t("sponsors.becomeASponsor")}
              </h3>
              <p className="text-orange-800 text-opacity-65 mb-6 max-w-2xl mx-auto leading-relaxed">
                {t("sponsors.sponsorshipBenefits")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-orange-800">
                <Button variant="yellow" size="lg">
                  {t("sponsors.viewPackages")}
                </Button>
                <Button variant="outline" size="lg" className="text-orange-800">
                  {t("sponsors.contactUs")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorsPartners;
