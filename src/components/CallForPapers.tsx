"use client";

import { useLanguage } from "@/hooks/useLanguage";

const CallForPapers = () => {
  const { t } = useLanguage();

  return (
    <section id="call-papers" className="relative overflow-x-hidden">
      <div className="flex flex-col">
          {/* Sections II & III Container */}
          <div className="flex flex-col items-start w-full">
            {/* Section II: Interdisciplinary Studies */}
            <div className="w-full bg-blue-800 px-4 md:px-8 lg:px-16 py-16">
              <div className="flex flex-col gap-12 items-center max-w-7xl mx-auto">
                

                {/* Content */}
                <div className="flex-1 text-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
                    II_{t("callForPapers.interdisciplinary").toUpperCase()}
                  </h2>
                  <p className="text-primary leading-relaxed max-w-2xl">
                    {t("callForPapers.interdisciplinaryDesc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Section III: Call for Papers */}
            <div className="w-full  px-4 md:px-8 lg:px-16 py-16">
              <div className="flex flex-col gap-12 items-center max-w-7xl mx-auto">
                

                {/* Content */}
                <div className="flex-1 text-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
                    III_ {t("callForPapers.title").toUpperCase()}
                  </h2>
                  <p className="text-primary leading-relaxed max-w-2xl">
                    {t("callForPapers.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sections IV & V Container */}
          <div className="flex flex-col items-start w-full">
            {/* Section IV: Important Dates */}
            <div className="w-full bg-blue-800 px-4 md:px-8 lg:px-16 py-16">
              <div className="flex flex-col gap-12 items-center max-w-7xl mx-auto">

                {/* Content */}
                <div className="flex-1 text-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
                    IV_{t("callForPapers.importantDates").toUpperCase()}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg text-primary uppercase mb-1">
                        {t("callForPapers.abstractDeadline").toUpperCase()}.{" "}
                        {t("callForPapers.abstractDeadlineDate").toUpperCase()}
                      </h3>
                      <p className="text-primary">
                        {t("callForPapers.abstractDeadlineDesc")}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-primary uppercase mb-1">
                        {t(
                          "callForPapers.acceptanceNotification",
                        ).toUpperCase()}
                        . {t("callForPapers.acceptanceDate").toUpperCase()}
                      </h3>
                      <p className="text-primary">
                        {t("callForPapers.acceptanceDesc")}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-primary uppercase mb-1">
                        {t("callForPapers.fullPaperSubmission").toUpperCase()}.{" "}
                        {t("callForPapers.fullPaperDate").toUpperCase()}
                      </h3>
                      <p className="text-primary">
                        {t("callForPapers.fullPaperDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section V: Award & Recognition */}
            <div className="w-full  px-4 md:px-8 lg:px-16 py-16">
              <div className="flex flex-col gap-12 items-center max-w-7xl mx-auto">
                

                {/* Content */}
                <div className="flex-1 text-center">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
                    V_ {t("callForPapers.awards").toUpperCase()}
                  </h2>

                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="font-bold text-primary uppercase mb-1">
                        {t("callForPapers.bestProfessional").toUpperCase()}.
                      </h3>
                      <p className="text-primary text-sm">
                        {t("callForPapers.professionalDesc")}
                      </p>
                      <div className="text-2xl font-bold text-primary mt-2">
                        400 USD
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="font-bold text-primary uppercase mb-1">
                        {t("callForPapers.bestStudent").toUpperCase()}.
                      </h3>
                      <p className="text-primary text-sm">
                        {t("callForPapers.studentDesc")}
                      </p>
                      <div className="text-2xl font-bold text-primary mt-2">
                        50 USD
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="font-bold text-primary uppercase mb-1">
                        {t("callForPapers.bestRetired").toUpperCase()}.
                      </h3>
                      <p className="text-primary text-sm">
                        {t("callForPapers.retiredDesc")}
                      </p>
                      <div className="text-2xl font-bold text-primary mt-2">
                        200 USD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default CallForPapers;
