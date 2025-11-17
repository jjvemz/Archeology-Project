import { Card, CardContent } from "@/components/ui/card";
import hawaiiImage from "@/assets/hawaii-archaeology.jpg";
import tahitiImage from "@/assets/tahiti-archaeology.jpg";
import heroImage from "@/assets/hero-pacific-congress.jpg";
import { useLanguage } from "@/hooks/useLanguage";
import Circle2 from "/images/03agua_azul.png";
import Circle3 from "/images/02agua_azul.png";
import Circle4 from "/images/04agua_azul.png";


const PLACEHOLDER_IMAGE = "https://placehold.co/600x400"

const PacificGallery = () => {
  const { t } = useLanguage();

  const sites = [
    {
      nameKey: "gallery.rapaNui.name",
      locationKey: "gallery.rapaNui.location",
      descKey: "gallery.rapaNui.desc",
      image: Circle2,
      highlights: [
        "gallery.rapaNui.highlight1",
        "gallery.rapaNui.highlight2",
        "gallery.rapaNui.highlight3"
      ]
    },
    {
      nameKey: "gallery.hawaii.name",
      locationKey: "gallery.hawaii.location",
      descKey: "gallery.hawaii.desc",
      image: Circle3,
      highlights: [
        "gallery.hawaii.highlight1",
        "gallery.hawaii.highlight2",
        "gallery.hawaii.highlight3"
      ]
    },
    {
      nameKey: "gallery.tahiti.name",
      locationKey: "gallery.tahiti.location",
      descKey: "gallery.tahiti.desc",
      image: Circle4,
      highlights: [
        "gallery.tahiti.highlight1",
        "gallery.tahiti.highlight2",
        "gallery.tahiti.highlight3"
      ]
    }
  ];

  return (
    <section id="heritage" className="py-20 ]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-orange-800">
              {t("gallery.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-orange-700">
              {t("gallery.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sites.map((site, index) => (
              <Card key={index} className="shadow-congress hover:shadow-warm transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={site.image}
                    alt={`Archaeological site at ${t(site.nameKey)}`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-volcanic/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-pacific-blue text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {t(site.locationKey)}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-pacific-blue transition-colors text-orange-800">
                    {t(site.nameKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-orange-700">
                    {t(site.descKey)}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide text-orange-700">
                      {t("gallery.keyFeatures")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {site.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="bg-pacific-teal/10 text-pacific-teal px-3 py-1 rounded-full text-xs font-medium text-orange-700"
                        >
                          {t(highlight)}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className=" text-orange-800  shadow-congress max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-4">{t("gallery.connecting.title")}</h3>
                <p className="text-orange-800  leading-relaxed mb-6 text-lg">
                  {t("gallery.connecting.desc")}
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-orange-800 ">{t("gallery.stats.sites")}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-orange-800 ">{t("gallery.stats.islands")}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">3000+</div>
                    <div className="text-orange-800 ">{t("gallery.stats.history")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacificGallery;