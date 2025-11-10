import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Award, BookOpen, Users } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ScientificCommittee = () => {
  const { t } = useLanguage();

  const committee = [
    {
      name: "Dr. Elena Marchetti",
      titleKey: "committee.chair",
      affiliation: "University of Auckland, New Zealand",
      specialization: "Pacific Maritime Archaeology",
      region: "New Zealand"
    },
    {
      name: "Prof. Hiroshi Tanaka",
      titleKey: "committee.viceChair",
      affiliation: "Kyoto University, Japan",
      specialization: "Island Settlement Patterns",
      region: "Japan"
    },
    {
      name: "Dr. Maria Fernandez-Lopez",
      titleKey: "committee.member",
      affiliation: "Universidad de Chile",
      specialization: "Colonial Impact Studies",
      region: "Chile"
    },
    {
      name: "Prof. Robert Anderson",
      titleKey: "committee.member",
      affiliation: "University of Hawaii at Manoa, USA",
      specialization: "Polynesian Archaeology",
      region: "Hawaii"
    },
    {
      name: "Dr. Claudine Dubois",
      titleKey: "committee.member",
      affiliation: "Université de la Polynésie française",
      specialization: "Cultural Change Analysis",
      region: "French Polynesia"
    },
    {
      name: "Prof. Zhang Wei",
      titleKey: "committee.member",
      affiliation: "Chinese Academy of Social Sciences",
      specialization: "Trans-Pacific Connections",
      region: "China"
    },
    {
      name: "Dr. Sarah Thompson",
      titleKey: "committee.member",
      affiliation: "Australian National University",
      specialization: "Environmental Archaeology",
      region: "Australia"
    },
    {
      name: "Prof. Carlos Morales",
      titleKey: "committee.member",
      affiliation: "Universidad Nacional de Colombia",
      specialization: "Coastal Adaptations",
      region: "Colombia"
    }
  ];

  return (
    <section id="committee" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("committee.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("committee.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-congress text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-pacific-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">{t("committee.globalExpertise")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("committee.globalExpertise.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-congress text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-coral mx-auto mb-4" />
                <CardTitle className="text-2xl">{t("committee.rigorousReview")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("committee.rigorousReview.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-congress text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-pacific-teal mx-auto mb-4" />
                <CardTitle className="text-2xl">{t("committee.publicationSupport")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("committee.publicationSupport.desc")}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {committee.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-congress transition-all duration-300">
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 bg-gradient-pacific rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{member.name}</CardTitle>
                  <img
                    src={`/flags/${member.region}.png`}
                    alt={member.region}
                    className="h-6 w-auto mx-auto"
                  />
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-medium text-coral">{t(member.titleKey)}</p>
                    <p className="text-sm text-muted-foreground font-medium">{member.affiliation}</p>
                    <p className="text-xs text-muted-foreground italic">
                      {member.specialization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="shadow-congress text-black">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t("committee.responsibilities")}</h3>
                <div className="grid md:grid-cols-3 gap-6 text-black/90">
                  <div>
                    <h4 className="font-semibold mb-2">{t("committee.abstractReview")}</h4>
                    <p className="text-sm">
                      {t("committee.abstractReview.desc")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("committee.programDevelopment")}</h4>
                    <p className="text-sm">
                      {t("committee.programDevelopment.desc")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("committee.qualityAssurance")}</h4>
                    <p className="text-sm">
                      {t("committee.qualityAssurance.desc")}
                    </p>
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

export default ScientificCommittee;