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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("callForPapers.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("callForPapers.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-congress">
              <CardHeader >
                <CardTitle className="flex items-center gap-3 text-2xl text-orange-800">
                  <Calendar className="h-8 w-8 text-pacific-blue" />
                  {t("callForPapers.importantDates")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-orange-800">
                <div className="border-l-4 border-pacific-blue pl-6 py-3 text-orange-700">
                  <h4 className="font-bold text-lg text-foreground text-orange-700">{t("callForPapers.abstractDeadline")}</h4>
                  <p className="text-muted-foreground text-orange-700">{t("callForPapers.abstractDeadlineDate")}</p>
                  <p className="text-sm text-muted-foreground mt-1 text-orange-700">
                    {t("callForPapers.abstractDeadlineDesc")}
                  </p>
                </div>

                <div className="border-l-4 border-pacific-teal pl-6 py-3">
                  <h4 className="font-bold text-lg text-foreground text-orange-700">{t("callForPapers.acceptanceNotification")}</h4>
                  <p className="text-muted-foreground text-orange-700">{t("callForPapers.acceptanceDate")}</p>
                  <p className="text-sm text-muted-foreground mt-1 text-orange-700">
                    {t("callForPapers.acceptanceDesc")}
                  </p>
                </div>

                <div className="border-l-4 border-coral pl-6 py-3">
                  <h4 className="font-bold text-lg text-foreground text-orange-700">{t("callForPapers.fullPaperSubmission")}</h4>
                  <p className="text-muted-foreground text-orange-700">{t("callForPapers.fullPaperDate")}</p>
                  <p className="text-sm text-muted-foreground mt-1 text-orange-700">
                    {t("callForPapers.fullPaperDesc")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-orange-800">
                  <Award className="h-8 w-8 text-coral" />
                  {t("callForPapers.awards")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-orange-800">
                <div className="bg-gradient-pacific p-6 rounded-lg ">
                  <h4 className="font-bold text-lg mb-2">{t("callForPapers.bestProfessional")}</h4>
                  <p className="text-2xl font-bold ">$400 USD</p>
                  <p className="text-sm opacity-90">{t("callForPapers.professionalDesc")}</p>
                </div>

                <div className="bg-congress-yellow/20 p-4 rounded-lg border border-congress-yellow/30">
                  <h4 className="font-bold text-lg mb-2 text-volcanic">{t("callForPapers.bestStudent")}</h4>
                  <p className="text-xl font-bold text-volcanic">$50 USD</p>
                  <p className="text-sm text-muted-foreground">{t("callForPapers.studentDesc")}</p>
                </div>

                <div className="bg-pacific-teal/20 p-4 rounded-lg border border-pacific-teal/30">
                  <h4 className="font-bold text-lg mb-2">{t("callForPapers.bestRetired")}</h4>
                  <p className="text-xl font-bold">$200 USD</p>
                  <p className="text-sm text-muted-foreground">{t("callForPapers.retiredDesc")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-congress text-center">
            <CardContent className="pt-8 text-orange-800">
              <FileText className="h-16 w-16 text-pacific-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground text-orange-800">{t("callForPapers.readyToSubmit")}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-orange-800">
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