import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, GraduationCap, Crown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const RegistrationFees = () => {
  const { t } = useLanguage();

  const fees = [
    {
      icon: Users,
      categoryKey: "registration.generalPublic",
      price: "$300",
      descKey: "registration.generalPublic.desc",
      features: [
        "registration.fullAccess",
        "registration.welcomeReception",
        "registration.materials",
        "registration.coffeeBreaks",
        "registration.closingCeremony"
      ],
      highlight: false
    },
    {
      icon: DollarSign,
      categoryKey: "registration.chilean",
      price: "$150",
      descKey: "registration.chilean.desc",
      features: [
        "registration.fullAccess",
        "registration.welcomeReception",
        "registration.materials",
        "registration.coffeeBreaks",
        "registration.closingCeremony"
      ],
      highlight: true
    },
    {
      icon: GraduationCap,
      categoryKey: "registration.students",
      price: "$50",
      descKey: "registration.students.desc",
      features: [
        "registration.fullAccess",
        "registration.studentNetworking",
        "registration.materials",
        "registration.coffeeBreaks",
        "registration.mentorship"
      ],
      highlight: false
    },
    {
      icon: Crown,
      categoryKey: "registration.retired",
      price: "$100",
      descKey: "registration.retired.desc",
      features: [
        "registration.fullAccess",
        "registration.seniorReception",
        "registration.materials",
        "registration.coffeeBreaks",
        "registration.legacyPresentation"
      ],
      highlight: false
    }
  ];

  return (
    <section id="registration" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-orange-800">
              {t("registration.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-orange-800">
              {t("registration.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {fees.map((fee, index) => {
              const IconComponent = fee.icon;
              return (
                <Card
                  key={index}
                  className={`shadow-card hover:shadow-congress transition-all duration-300 text-orange-800 ${
                    fee.highlight ? 'border-pacific-blue border-2 relative' : ''
                  }`}
                >
                  {fee.highlight && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pacific-blue text-orange-700 text-opacity-65">
                      {t("registration.chileanRate")}
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <IconComponent className={`h-12 w-12 mx-auto mb-4 ${
                      fee.highlight ? 'text-pacific-blue' : 'text-pacific-teal'
                    }`} />
                    <CardTitle className="text-xl">{t(fee.categoryKey)}</CardTitle>
                    <div className={`text-3xl font-bold ${
                      fee.highlight ? 'text-orange-800' : 'text-text-orange-900'
                    }`}>
                      {fee.price}
                      <span className="text-base font-normal text-muted-foreground text-orange-800"> USD</span>
                    </div>
                    <p className="text-sm text-muted-foreground text-orange-700">{t(fee.descKey)}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fee.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground text-orange-700">
                          <div className="w-1.5 h-1.5 bg-pacific-teal rounded-full mr-3 flex-shrink-0 text-orange-700"></div>
                          {t(feature)}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 text-orange-700 text-opacity-65"
                      variant="congress" 
                    >
                      {t("registration.registerNow")}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3 text-orange-800">
                  <DollarSign className="h-8 w-8 text-congress-yellow " />
                  {t("registration.paymentInfo")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-congress-yellow pl-4">
                  <h4 className="font-semibold text-foreground text-orange-700">{t("registration.paymentMethods")}</h4>
                  <p className="text-muted-foreground text-sm text-orange-700">{t("registration.paymentMethods.desc")}</p>
                </div>
                <div className="border-l-4 border-pacific-blue pl-4 text-orange-700">
                  <h4 className="font-semibold text-foreground text-orange-700">{t("registration.earlyBird")}</h4>
                  <p className="text-muted-foreground text-sm text-orange-700">{t("registration.earlyBird.desc")}</p>
                </div>
                <div className="border-l-4 border-coral pl-4 text-orange-700">
                  <h4 className="font-semibold text-foreground text-orange-700">{t("registration.groupDiscount")}</h4>
                  <p className="text-muted-foreground text-sm text-orange-700">{t("registration.groupDiscount.desc")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3 text-orange-800">
                  <Users className="h-8 w-8 text-pacific-blue" />
                  {t("registration.whatsIncluded")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-blue rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-orange-700">{t("registration.scientificSessions")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-teal rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-orange-700">{t("registration.ceremonies")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-orange-700">{t("registration.materialsAbstracts")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-congress-yellow rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-orange-700">{t("registration.networking")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-blue rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-orange-700">{t("registration.certificate")}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pacific-teal rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-orange-700">{t("registration.virtualPlatform")}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationFees;