import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import CommitteeWheel from "./CommitteeWheel";

import Anderson from "/images/committee/Anderson.jpg"
import Dubois from "/images/committee/Dubois.png";
import Lopez from "/images/committee/Lopez.jpg";
import Morales from "/images/committee/Morales.jpg";
import Tanaka from "/images/committee/Tanaka.jpg";
import Marchetti from "/images/committee/Marchetti.jpg";
import Thompson from "/images/committee/Thompson.jpg";
import zhang from "/images/committee/Zhang.png";


const ScientificCommittee = () => {
  const { t } = useLanguage();

  const committee = [
    {
      name: "Dr. Elena Marchetti",
      titleKey: "committee.chair",
      affiliation: "University of Auckland, New Zealand",
      specialization: "Pacific Maritime Archaeology",
      region: "New Zealand",
      picture: Marchetti
    },
    {
      name: "Prof. Hiroshi Tanaka",
      titleKey: "committee.viceChair",
      affiliation: "Kyoto University, Japan",
      specialization: "Island Settlement Patterns",
      region: "Japan",
      picture: Tanaka
    },
    {
      name: "Dr. Maria Fernandez-Lopez",
      titleKey: "committee.member",
      affiliation: "Universidad de Chile",
      specialization: "Colonial Impact Studies",
      region: "Chile",
      picture: Lopez
    },
    {
      name: "Prof. Robert Anderson",
      titleKey: "committee.member",
      affiliation: "University of Hawaii at Manoa, USA",
      specialization: "Polynesian Archaeology",
      region: "Hawaii",
      picture: Anderson
    },
    {
      name: "Dr. Claudine Dubois",
      titleKey: "committee.member",
      affiliation: "Université de la Polynésie française",
      specialization: "Cultural Change Analysis",
      region: "French Polynesia",
      picture: Dubois
    },
    {
      name: "Prof. Zhang Wei",
      titleKey: "committee.member",
      affiliation: "Chinese Academy of Social Sciences",
      specialization: "Trans-Pacific Connections",
      region: "China",
      picture: zhang
    },
    {
      name: "Dr. Sarah Thompson",
      titleKey: "committee.member",
      affiliation: "Australian National University",
      specialization: "Environmental Archaeology",
      region: "Australia",
      picture: Thompson
    },
    {
      name: "Prof. Carlos Morales",
      titleKey: "committee.member",
      affiliation: "Universidad Nacional de Colombia",
      specialization: "Coastal Adaptations",
      region: "Colombia",
      picture: Morales
    }
  ];

  return (
    <section id="committee" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground  text-primary">
              {t("committee.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto  text-primary">
              {t("committee.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-congress text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-pacific-blue mx-auto mb-4  text-primary" />
                <CardTitle className="text-2xl  text-primary">{t("committee.globalExpertise")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground  text-primary">
                  {t("committee.globalExpertise.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-congress text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-coral mx-auto mb-4  text-primary" />
                <CardTitle className="text-2xl  text-primary">{t("committee.rigorousReview")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground  text-primary">
                  {t("committee.rigorousReview.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-congress text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-pacific-teal mx-auto mb-4  text-primary" />
                <CardTitle className="text-2xl  text-primary">{t("committee.publicationSupport")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground  text-primary">
                  {t("committee.publicationSupport.desc")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Committee Wheel */}
          <CommitteeWheel members={committee} />

          <div className="mt-16">
            <Card className="shadow-congress text-black">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-4  text-primary">{t("committee.responsibilities")}</h3>
                <div className="grid md:grid-cols-3 gap-6  text-primary">
                  <div>
                    <h4 className="font-semibold mb-2">{t("committee.abstractReview")}</h4>
                    <p className="text-sm  text-primary">
                      {t("committee.abstractReview.desc")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("committee.programDevelopment")}</h4>
                    <p className="text-sm  text-primary">
                      {t("committee.programDevelopment.desc")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{t("committee.qualityAssurance")}</h4>
                    <p className="text-sm  text-primary">
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