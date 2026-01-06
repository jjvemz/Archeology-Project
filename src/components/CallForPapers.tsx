import { useLanguage } from "@/hooks/useLanguage";

const CallForPapers = () => {
  const { t } = useLanguage();

  return (
    <section id="call-papers" className="space-y-0">
      {/* Section II: Interdisciplinary Studies */}
      <div className="bg-[#ffeecd] py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Roman numeral and line */}
            <div className="flex items-start gap-6 flex-shrink-0">
              <div className="text-7xl font-bold text-primary leading-none">II</div>
              <div className="w-12 h-1 bg-primary mt-6"></div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 uppercase">
                {t("callForPapers.interdisciplinary").toUpperCase()}
              </h2>
              <p className="text-lg text-[#143c8c] leading-relaxed max-w-2xl">
                {t("callForPapers.interdisciplinaryDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section III: Call for Papers */}
      <div className="bg-[#143c8c] py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Roman numeral and line */}
            <div className="flex items-start gap-6 flex-shrink-0">
              <div className="text-7xl font-bold text-primary leading-none">III</div>
              <div className="w-12 h-1 bg-primary mt-6"></div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 uppercase">
                {t("callForPapers.title").toUpperCase()}
              </h2>
              <div className="bg-[#143c8c] border-2 border-primary p-6 rounded-lg">
                <p className="text-primary leading-relaxed">
                  {t("callForPapers.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section IV: Important Dates */}
      <div className="bg-[#ffeecd] py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Roman numeral and line */}
            <div className="flex items-start gap-6 flex-shrink-0">
              <div className="text-7xl font-bold text-primary leading-none">IV</div>
              <div className="w-12 h-1 bg-primary mt-6"></div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase">
                {t("callForPapers.importantDates").toUpperCase()}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-[#143c8c] uppercase mb-1">
                    {t("callForPapers.abstractDeadline").toUpperCase()}. {t("callForPapers.abstractDeadlineDate").toUpperCase()}
                  </h3>
                  <p className="text-[#143c8c]">
                    {t("callForPapers.abstractDeadlineDesc")}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#143c8c] uppercase mb-1">
                    {t("callForPapers.acceptanceNotification").toUpperCase()}. {t("callForPapers.acceptanceDate").toUpperCase()}
                  </h3>
                  <p className="text-[#143c8c]">
                    {t("callForPapers.acceptanceDesc")}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#143c8c] uppercase mb-1">
                    {t("callForPapers.fullPaperSubmission").toUpperCase()}. {t("callForPapers.fullPaperDate").toUpperCase()}
                  </h3>
                  <p className="text-[#143c8c]">
                    {t("callForPapers.fullPaperDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section V: Award & Recognition */}
      <div className="bg-[#143c8c] py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Roman numeral and line */}
            <div className="flex items-start gap-6 flex-shrink-0">
              <div className="text-7xl font-bold text-primary leading-none">V</div>
              <div className="w-12 h-1 bg-primary mt-6"></div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase">
                {t("callForPapers.awards").toUpperCase()}
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-primary uppercase mb-1">
                      {t("callForPapers.bestProfessional").toUpperCase()}.
                    </h3>
                    <p className="text-primary text-sm">
                      {t("callForPapers.professionalDesc")}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-primary whitespace-nowrap ml-4">
                    400 USD
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-primary uppercase mb-1">
                      {t("callForPapers.bestStudent").toUpperCase()}.
                    </h3>
                    <p className="text-primary text-sm">
                      {t("callForPapers.studentDesc")}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-primary whitespace-nowrap ml-4">
                    50 USD
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-primary uppercase mb-1">
                      {t("callForPapers.bestRetired").toUpperCase()}.
                    </h3>
                    <p className="text-primary text-sm">
                      {t("callForPapers.retiredDesc")}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-primary whitespace-nowrap ml-4">
                    200 USD
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