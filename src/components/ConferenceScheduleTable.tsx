import { useLanguage } from "@/hooks/useLanguage";
import { scheduleData } from "@/lib/scheduleData";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

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
        <div className=" py-16 px-4">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex items-center gap-8">
              <div className="flex items-center gap-6">
                <h2 className="text-8xl font-bold text-primary"></h2>
              </div>
              <div className="flex-1">
                <h2 className="text-5xl font-bold text-primary leading-tight">
                  VIII_{t("schedule.title").toUpperCase()}
                </h2>
                <div className="mt-4  p-4 ">
                  <p className="text-sm text-orange-700 leading-relaxed">
                    {t("schedule.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Schedule Table */}
        <div className="space-y-0">
            <br/>
            <motion.div 
              className="border-b-4 border-primary my-4"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1]
              }}
            ></motion.div>
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-0">
              {/* Day Header */}
              <div className="flex items-start gap-8 py-16">
                <div className="text-5xl md:text-6xl font-bold text-orange-700 whitespace-nowrap flex-shrink-0">
                  {day.date.split(",")[0].split(" ")[1]}-
                  {day.date.split(",")[0].split(" ")[0].slice(0, 2)}
                </div>
                <div className="flex-1">
                  {/* Sessions for this day */}
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div 
                      key={sessionIndex} 
                      className="space-y-0"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ 
                        duration: 0.6,
                        delay: sessionIndex * 0.1,
                        ease: [0.25, 1, 0.5, 1]
                      }}
                    >
                      {/* Session Row */}
                      <div className="grid grid-cols-12 gap-6 py-16 items-center">
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
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Day Separator Line */}
              {dayIndex < scheduleData.length - 1 && (
                <motion.div 
                  className="border-b-4 border-primary my-4"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                ></motion.div>
              )}
            </div>
          ))}
          <motion.div 
            className="border-b-4 border-primary my-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 1, 0.5, 1]
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceScheduleTable;
