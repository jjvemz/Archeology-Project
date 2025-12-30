import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const CallForPapers = () => {
  const { t } = useLanguage();

  return (
    <section id="call-papers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-[#143c8c]">
              {t("callForPapers.title").toUpperCase()}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-primary">
              {t("callForPapers.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-congress">
              <CardHeader >
                <CardTitle className="flex items-center gap-3 text-2xl text-[#143c8c]">
                  <Calendar className="h-8 w-8 " />
                  {t("callForPapers.importantDates").toUpperCase()}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6  text-primary">
                <div className="border-l-4 border-pacific-blue pl-6 py-3  text-primary">
                  <h4 className="font-bold text-lg text-foreground text-[#143c8c]">{t("callForPapers.abstractDeadline").toUpperCase()}</h4>
                  <p className="text-primary">{t("callForPapers.abstractDeadlineDate")}</p>
                  <p className="text-sm  mt-1  text-primary">
                    {t("callForPapers.abstractDeadlineDesc")}
                  </p>
                </div>

                <div className="border-l-4 border-pacific-teal pl-6 py-3">
                  <h4 className="font-bold text-lg text-foreground text-[#143c8c]">{t("callForPapers.acceptanceNotification").toUpperCase()}</h4>
                  <p className="text-primary">{t("callForPapers.acceptanceDate")}</p>
                  <p className="text-sm mt-1  text-primary">
                    {t("callForPapers.acceptanceDesc")}
                  </p>
                </div>

                <div className="border-l-4 border-coral pl-6 py-3">
                  <h4 className="font-bold text-lg text-foreground text-[#143c8c]">{t("callForPapers.fullPaperSubmission").toUpperCase()}</h4>
                  <p className="text-primary">{t("callForPapers.fullPaperDate")}</p>
                  <p className="mt-1 text-primary">
                    {t("callForPapers.fullPaperDesc")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-[#143c8c]">
                  <Award className="h-8 w-8 " />
                  {t("callForPapers.awards").toUpperCase()}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className=" p-6 rounded-lg ">
                  <h4 className="font-bold text-lg mb-2 text-[#143c8c]">{t("callForPapers.bestProfessional").toUpperCase()}</h4>
                  <p className="text-2xl font-bold text-primary">$400 USD</p>
                  <p className="text-sm opacity-90 text-primary">{t("callForPapers.professionalDesc")}</p>
                </div>

                <div className="bg-congress-yellow/20 p-4 rounded-lg ">
                  <h4 className="font-bold text-lg mb-2 text-[#143c8c]">{t("callForPapers.bestStudent").toUpperCase()}</h4>
                  <p className="text-xl font-bold text-primary">$50 USD</p>
                  <p className="text-sm text-primary">{t("callForPapers.studentDesc")}</p>
                </div>

                <div className="bg-pacific-teal/20 p-4 rounded-lg ">
                  <h4 className="font-bold text-lg mb-2 text-[#143c8c]">{t("callForPapers.bestRetired").toUpperCase()}</h4>
                  <p className="text-xl font-bold text-primary">$200 USD</p>
                  <p className="text-sm text-primary">{t("callForPapers.retiredDesc")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-congress text-center">
            <CardContent className="pt-8  ">
              <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground  text-[#143c8c]">{t("callForPapers.readyToSubmit").toUpperCase()}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-primary">
                {t("callForPapers.submitDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center ">
                <Button size="lg" variant="outline">
                  {t("callForPapers.submitAbstract")}
                </Button>
                <Button size="lg" variant="outline">
                  {t("callForPapers.downloadGuidelines")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;