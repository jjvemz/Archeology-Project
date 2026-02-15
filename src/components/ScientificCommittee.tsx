import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import CommitteeWheel from "./CommitteeWheel";

import AaronImg from "/images/ScientificWheel/AARON CIECHANOVER.jfif";
import EskeImg from "/images/ScientificWheel/Eske Willerslev.jpeg";
import HellenImg from "/images/ScientificWheel/Hellen Wallin.jpeg";
import JoAnneImg from "/images/ScientificWheel/Jo anne van tillburg.jpg";
import KurtImg from "/images/ScientificWheel/KurtKjaer.jpeg";
import SoniaImg from "/images/ScientificWheel/SoniaHaoaCardinali.jpg";
import ChrisImg from "/images/ScientificWheel/christopher stevenson.jpg";
import LilianImg from "/images/ScientificWheel/lilian-gonzalez-nualart.webp";

const ScientificCommittee = () => {
  const { t } = useLanguage();

  const committee = [
    {
      name: t("member.lilian.name"),
      titleKey: "member.lilian.title",
      affiliation: "Fundación Mata Ki Te Rangi",
      specialization: "Social Anthropology",
      region: "Chile",
      picture: LilianImg,
      type: "committee",
      id: "lilian",
    },
    {
      name: t("member.chris.name"),
      titleKey: "member.chris.title",
      affiliation: "Virginia Commonwealth University",
      specialization: "Archaeology",
      region: "USA",
      picture: ChrisImg,
      type: "committee",
      id: "chris",
    },
    {
      name: t("member.eske.name"),
      titleKey: "member.eske.title",
      affiliation: "Cambridge / Copenhagen University",
      specialization: "Evolutionary Genetics",
      region: "UK/Denmark",
      picture: EskeImg,
      type: "keynote",
      id: "eske",
    },
    {
      name: t("member.aaron.name"),
      titleKey: "member.aaron.title",
      affiliation: "Technion - Israel Institute of Technology",
      specialization: "Biology / Nobel Laureate",
      region: "Israel",
      picture: AaronImg,
      type: "keynote",
      id: "aaron",
    },
    {
      name: t("member.kurt.name"),
      titleKey: "member.kurt.title",
      affiliation: "University of Copenhagen",
      specialization: "Evolutionary Genetics",
      region: "Denmark",
      picture: KurtImg,
      type: "keynote",
      id: "kurt",
    },
    {
      name: t("member.sonia.name"),
      titleKey: "member.sonia.title",
      affiliation: "Fundación Mata Ki Te Rangi",
      specialization: "Archaeology",
      region: "Chile / Rapa Nui",
      picture: SoniaImg,
      type: "committee",
      id: "sonia",
    },
    {
      name: t("member.joann.name"),
      titleKey: "member.joann.title",
      affiliation: "UCLA - Cotsen Institute",
      specialization: "Archaeology",
      region: "USA",
      picture: JoAnneImg,
      type: "committee",
      id: "joann",
    },
    {
      name: t("member.wallin.name"),
      titleKey: "member.wallin.title",
      affiliation: "Uppsala University",
      specialization: "Archaeology",
      region: "Sweden",
      picture: HellenImg,
      type: "committee",
      id: "wallin",
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
