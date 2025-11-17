import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Users, MessageCircle, Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const VideoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="video" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-calypso-900">
              {t("video.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-calypso-800">
              {t("video.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="shadow-congress">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-orange-800">
                    <Play className="h-8 w-8 text-coral" />
                    {t("video.welcomeMessage")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-orange-700">
                    {t("video.welcomeMessage.desc")}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-pacific-blue text-orange-700" />
                      <span className="text-sm text-muted-foreground text-orange-700">
                        {t("video.meetCommittee")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-pacific-teal text-orange-700" />
                      <span className="text-sm text-muted-foreground text-orange-700">
                        {t("video.learnThemes")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-congress-yellow text-orange-700" />
                      <span className="text-sm text-muted-foreground text-orange-700">
                        {t("video.discoverOpportunities")}
                      </span>
                    </div>
                  </div>

                  <Button variant="congress" size="lg" className="w-full text-orange-700">
                    {t("video.watchVideo")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-congress">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground text-orange-800">
                    {t("video.whatYouLearn")}
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-pacific-blue pl-4">
                      <h4 className="font-semibold text-foreground text-orange-800">{t("video.congressVision")}</h4>
                      <p className="text-muted-foreground text-sm text-orange-700">
                        {t("video.congressVision.desc")}
                      </p>
                    </div>
                    <div className="border-l-4 border-pacific-teal pl-4">
                      <h4 className="font-semibold text-foreground text-orange-800">{t("video.researchPriorities")}</h4>
                      <p className="text-muted-foreground text-sm text-orange-700">
                        {t("video.researchPriorities.desc")}
                      </p>
                    </div>
                    <div className="border-l-4 border-coral pl-4">
                      <h4 className="font-semibold text-foreground text-orange-800">{t("video.collaborationGoals")}</h4>
                      <p className="text-muted-foreground text-sm text-orange-700">
                        {t("video.collaborationGoals.desc")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              {/* Video Placeholder */}
              <Card className="shadow-congress overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-volcanic to-pacific-blue flex items-center justify-center">
                  <div className="text-center text-orange-800">
                    <div className="w-20 h-20 text-orange-700 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <Play className="h-10 w-10 text-orange-800 ml-1" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-orange-800">{t("video.congressIntro")}</h3>
                    <p className="text-orange-700 text-sm">{t("video.duration")}</p>
                  </div>

                  {/* Overlay for click effect */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                    <Button variant="yellow" size="lg">
                      <Play className="h-5 w-5 mr-2 text-orange-800" />
                      {t("video.playVideo")}
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Team Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Card className="shadow-card text-center">
                  <CardContent className="pt-4">
                    <div className="w-12 h-12 bg-gradient-pacific rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-6 w-6 text-orange-800" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 text-orange-800">{t("video.teamExpertise")}</h4>
                    <p className="text-muted-foreground text-sm text-orange-700">{t("video.teamExpertise.desc")}</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card text-center">
                  <CardContent className="pt-4">
                    <div className="w-12 h-12 bg-congress-yellow rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Award className="h-6 w-6 text-volcanic text-orange-800" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1 text-orange-800">{t("video.recognition")}</h4>
                    <p className="text-muted-foreground text-sm text-orange-700">{t("video.recognition.desc")}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;