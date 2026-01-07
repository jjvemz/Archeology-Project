import { useLanguage } from "@/hooks/useLanguage";
import { scheduleData } from "@/lib/scheduleData";
import { Badge } from "@/components/ui/badge";

const ConferenceScheduleTable = () => {
  const { t } = useLanguage();

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-orange-400 text-white";
      case "plenary":
        return "bg-blue-900 text-white";
      case "concurrent":
        return "bg-teal-600 text-white";
      case "workshop":
        return "bg-yellow-500 text-black";
      case "panel":
        return "bg-amber-800 text-white";
      case "poster":
        return "bg-purple-700 text-white";
      case "fieldtrip":
        return "bg-green-700 text-white";
      case "social":
        return "bg-gray-400 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-20 px-0 ">
      <div className=" px-0">
        <div className="bg-blue-900 py-8 px-4">
        <div className="">
          <div className="flex items-start gap-6 mb-6">
            
            <h2 className="text-5xl md:text-6xl font-bold text-primary pt-2 leading-tight">
             VIII_{t("schedule.title")}
            </h2>
          </div>
          <div className=" p-4 border-l-4 border-primary">
            <p className="text-sm text-orange-700 leading-relaxed font-semibold">
              {t("schedule.description")}
            </p>
          </div>
        </div>
      </div>

        

        {/* Schedule Table */}
        <div className="space-y-0">
            <br/>
            <div className="border-b-4 border-primary my-4"></div>
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-0">
              {/* Day Header */}
              <div className="flex items-start gap-8 py-8">
                <div className="text-5xl md:text-6xl font-bold text-orange-700 whitespace-nowrap flex-shrink-0">
                  {day.date.split(",")[0].split(" ")[1]}-
                  {day.date.split(",")[0].split(" ")[0].slice(0, 2)}
                </div>
                <div className="flex-1">
                  {/* Sessions for this day */}
                  {day.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="space-y-0">
                      {/* Session Row */}
                      <div className="grid grid-cols-12 gap-6 py-4 items-center">
                        {/* Event Name - Left Column */}
                        <div className="col-span-12 md:col-span-5">
                          <h4 className="text-lg font-semibold text-orange-700">
                            {t(session.titleKey)}
                          </h4>
                        </div>

                        {/* Time - Center Left Column */}
                        <div className="col-span-12 md:col-span-2">
                          <p className="text-sm font-mono text-orange-700">
                            {session.time}
                          </p>
                        </div>

                        {/* Type - Center Right Column */}
                        <div className="col-span-12 md:col-span-2">
                          <Badge className={`${getTypeColor(session.type)} text-xs`}>
                            {t(`schedule.type.${session.type}`)}
                          </Badge>
                        </div>

                        {/* Location - Right Column */}
                        <div className="col-span-12 md:col-span-3">
                          <p className="text-sm text-orange-700">
                            {t(session.locationKey)}
                          </p>
                        </div>
                      </div>

                      {/* Separator Line */}
                      {sessionIndex < day.sessions.length - 1 && (
                        <div className="border-b-2 border-primary/30"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Day Separator Line */}
              {dayIndex < scheduleData.length - 1 && (
                <div className="border-b-4 border-primary my-4"></div>
              )}
            </div>
          ))}
          <div className="border-b-4 border-primary my-4"></div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceScheduleTable;
