import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import CommitteeWheel from "./CommitteeWheel";

import Anderson from "/images/committee/Anderson.jpg";
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
      picture: Marchetti,
    },
    {
      name: "Prof. Hiroshi Tanaka",
      titleKey: "committee.viceChair",
      affiliation: "Kyoto University, Japan",
      specialization: "Island Settlement Patterns",
      region: "Japan",
      picture: Tanaka,
    },
    {
      name: "Dr. Maria Fernandez-Lopez",
      titleKey: "committee.member",
      affiliation: "Universidad de Chile",
      specialization: "Colonial Impact Studies",
      region: "Chile",
      picture: Lopez,
    },
    {
      name: "Prof. Robert Anderson",
      titleKey: "committee.member",
      affiliation: "University of Hawaii at Manoa, USA",
      specialization: "Polynesian Archaeology",
      region: "Hawaii",
      picture: Anderson,
    },
    {
      name: "Dr. Claudine Dubois",
      titleKey: "committee.member",
      affiliation: "Université de la Polynésie française",
      specialization: "Cultural Change Analysis",
      region: "French Polynesia",
      picture: Dubois,
    },
    {
      name: "Prof. Zhang Wei",
      titleKey: "committee.member",
      affiliation: "Chinese Academy of Social Sciences",
      specialization: "Trans-Pacific Connections",
      region: "China",
      picture: zhang,
    },
    {
      name: "Dr. Sarah Thompson",
      titleKey: "committee.member",
      affiliation: "Australian National University",
      specialization: "Environmental Archaeology",
      region: "Australia",
      picture: Thompson,
    },
    {
      name: "Prof. Carlos Morales",
      titleKey: "committee.member",
      affiliation: "Universidad Nacional de Colombia",
      specialization: "Coastal Adaptations",
      region: "Colombia",
      picture: Morales,
    },
  ];

  return (
    <section id="committee" className="pb-40 bg-[#ffeecd]">
      <div className="bg-[#ffeecd] py-24 px-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center gap-8">
            <div className="flex items-center gap-6">
              <h2 className="text-8xl font-bold text-primary"></h2>
            </div>
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-primary leading-tight">
                IX_ {t("committee.title").toUpperCase()}
              </h2>
              <div className="mt-2  px-4 ">
                <p className="text-2xl text-orange-700 leading-relaxed font-semibold">
                  {t("committee.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e40af]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16 pt-12 mb-0 pb-16 scale-95 transform">
              <Card className="shadow-congress text-center bg-transparent border-orange-700/30">
                <CardHeader>
                  <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl text-primary">
                    {t("committee.globalExpertise")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary opacity-90">
                    {t("committee.globalExpertise.desc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-congress text-center bg-transparent border-orange-700/30">
                <CardHeader>
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl text-primary">
                    {t("committee.rigorousReview")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary opacity-90">
                    {t("committee.rigorousReview.desc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-congress text-center bg-transparent border-orange-700/30">
                <CardHeader>
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-2xl text-primary">
                    {t("committee.publicationSupport")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary opacity-90">
                    {t("committee.publicationSupport.desc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Committee Wheel - Full Width */}
      <CommitteeWheel members={committee} />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mt-4">
            <Card className="shadow-congress text-black border-orange-700 border-dashed">
              <CardContent className="pt-4 text-center">
                <h3 className="text-2xl font-bold mb-4  text-primary">
                  {t("committee.responsibilities")}
                </h3>
                <div className="grid md:grid-cols-3 gap-6  text-primary">
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("committee.abstractReview")}
                    </h4>
                    <p className="text-sm  text-primary">
                      {t("committee.abstractReview.desc")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("committee.programDevelopment")}
                    </h4>
                    <p className="text-sm  text-primary">
                      {t("committee.programDevelopment.desc")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("committee.qualityAssurance")}
                    </h4>
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
