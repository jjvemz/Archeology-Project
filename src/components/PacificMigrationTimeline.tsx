import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const PacificMigrationTimeline = () => {
  const { t } = useLanguage();
  const timelineEvents = [
    {
      title: t("timeline.event1.title"),
      period: t("timeline.event1.period"),
      description: t("timeline.event1.desc")
    },
    {
      title: t("timeline.event2.title"),
      period: t("timeline.event2.period"),
      description: t("timeline.event2.desc")
    },
    {
      title: t("timeline.event3.title"),
      period: t("timeline.event3.period"),
      description: t("timeline.event3.desc")
    },
    {
      title: t("timeline.event4.title"),
      period: t("timeline.event4.period"),
      description: t("timeline.event4.desc")
    },
    {
      title: t("timeline.event5.title"),
      period: t("timeline.event5.period"),
      description: t("timeline.event5.desc")
    },
    {
      title: t("timeline.event6.title"),
      period: t("timeline.event6.period"),
      description: t("timeline.event6.desc")
    }
  ];

  return (
    <section id="pacific-migration" className="py-0">
      <div className="container-fluid p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left side - Map */}
          <div className="flex items-center justify-center bg-blue-800 p-8 lg:p-16 min-h-screen">
            <div className="relative w-[90%] aspect-square max-w-[800px]">
              <div className="w-full h-full rounded-full border-[6px] border-dashed border-orange-500 overflow-hidden">
                <img 
                  src="/images/polynesiamMap.png" 
                  alt="Pacific Migration Map" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="bg-gradient-to-b ">
            {/* Title Section with Blue Background */}
            <div className=" pt-20 pb-12 px-8">
              <h2 className="text-5xl font-bold">
                <span className="text-primary">{t("timeline.timelineOf")}</span>
                <br />
                <span className="text-blue-900">{t("timeline.pacificMigration")}</span>
              </h2>
            </div>

            {/* Timeline events on white background */}
            <div className="px-8 py-12">
              <div className="space-y-6 max-w-2xl">
                {timelineEvents.map((event, idx) => (
                  <Card key={idx} className="bg-yellow-50  shadow-sm hover:shadow-md transition-shadow">
                    <div className={`p-6 ${idx % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-900 mb-3">
                        {event.period}
                      </p>
                      <p className="text-sm text-blue-900 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacificMigrationTimeline;
