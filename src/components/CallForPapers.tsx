'use client';

import { useLanguage } from "@/hooks/useLanguage";
import { useScroll, useTransform, motion } from "framer-motion";
import { IframeModal, ColorPalette} from "./IframeModal";
import { useRef } from "react";

const CallForPapers = () => {
  const { t } = useLanguage();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Horizontal translate - moves sections from right to left as you scroll
  // Use 100vw to ensure sections scroll exactly one screen width
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-100vw"]);

  return (
    <section id="call-papers" className="h-[400vh] relative" ref={container}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex w-[200vw]" style={{ x }}>
          {/* Sections II & III Container */}
          <div className="h-screen flex flex-col items-start flex-shrink-0 pt-48 w-screen">
            {/* Section II: Interdisciplinary Studies */}
            <div className="w-full flex-1 px-4 md:px-8 lg:px-16">
              <div className="flex flex-col md:flex-row gap-12 items-baseline max-w-7xl mx-auto">
                {/* Roman numeral and line */}
                <div className="flex items-baseline gap-6 flex-shrink-0 w-32">
                  <div className="text-7xl font-bold text-primary leading-none">II_</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
                    {t("callForPapers.interdisciplinary").toUpperCase()}
                  </h2>
                  <p className="text-lg text-[#143c8c] leading-relaxed max-w-2xl">
                    {t("callForPapers.interdisciplinaryDesc")}
                  </p>
                </div>
              </div>
            </div>

            {/* Section III: Call for Papers */}
            <div className="w-full bg-blue-800 flex-1 px-4 md:px-8 lg:px-16">
              <div className="flex flex-col md:flex-row gap-12 items-baseline max-w-7xl mx-auto">
                {/* Roman numeral and line */}
                <div className="flex items-baseline gap-6 flex-shrink-0 w-32">
                  <div className="text-7xl font-bold text-primary leading-none">III_</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
                    {t("callForPapers.title").toUpperCase()}
                  </h2>
                  <p className="text-primary leading-relaxed">
                    {t("callForPapers.description")}
                  </p>
                  <div className="mt-6">
                    <IframeModal
                      buttonText="Abrir Formulario de Abstracts"
                      iframeUrl="https://matafoundation.dryfta.com/index.php?option=com_dryfta&view=form&form_id=23&Itemid=808&tmpl=component"
                      iframeTitle="Formulario de Envío Dryfta"
                      colorPalette={ColorPalette.BlueOrange}
                      closeButtonText="Cerrar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sections IV & V Container */}
          <div className="h-screen flex flex-col items-start flex-shrink-0 pt-48 w-screen">
            {/* Section IV: Important Dates */}
            <div className="w-full flex-1 px-4 md:px-8 lg:px-16">
              <div className="flex flex-col md:flex-row gap-12 items-baseline max-w-7xl mx-auto">
                {/* Roman numeral and line */}
                <div className="flex items-baseline gap-6 flex-shrink-0 w-32">
                  <div className="text-7xl font-bold text-primary leading-none">IV_</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
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

            {/* Section V: Award & Recognition */}
            <div className="w-full bg-blue-800 flex-1 px-4 md:px-8 lg:px-16">
              <div className="flex flex-col md:flex-row gap-12 items-baseline max-w-7xl mx-auto">
                {/* Roman numeral and line */}
                <div className="flex items-baseline gap-6 flex-shrink-0 w-32">
                  <div className="text-7xl font-bold text-primary leading-none">V _</div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 uppercase leading-none">
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
        </motion.div>
      </div>
    </section>
  );
};

export default CallForPapers;