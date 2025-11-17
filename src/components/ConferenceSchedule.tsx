import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Users, MapPin, FileText, Coffee, Award, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const ConferenceSchedule = () => {
  const { t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState(0);

  const scheduleData = [
    {
      date: "November 10, 2026",
      dayNameKey: "schedule.day1.name",
      sessions: [
        {
          time: "8:00 - 9:00",
          titleKey: "schedule.day1.session1.title",
          type: "social",
          locationKey: "schedule.location.lobby",
          icon: Coffee
        },
        {
          time: "9:00 - 10:00",
          titleKey: "schedule.day1.session2.title",
          type: "plenary",
          locationKey: "schedule.location.grandHall",
          speakersKey: "schedule.day1.session2.speakers",
          descKey: "schedule.day1.session2.desc",
          icon: Users
        },
        {
          time: "10:00 - 11:00",
          titleKey: "schedule.day1.session3.title",
          type: "keynote",
          locationKey: "schedule.location.grandHall",
          speakersKey: "schedule.day1.session3.speakers",
          descKey: "schedule.day1.session3.desc",
          icon: Globe
        },
        {
          time: "11:00 - 11:30",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "11:30 - 13:00",
          titleKey: "schedule.day1.session4.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day1.session4.desc",
          icon: Users
        },
        {
          time: "13:00 - 14:30",
          titleKey: "schedule.lunchBreak",
          type: "social",
          locationKey: "schedule.location.dining",
          icon: Coffee
        },
        {
          time: "14:30 - 16:00",
          titleKey: "schedule.day1.session5.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day1.session5.desc",
          icon: Users
        },
        {
          time: "16:00 - 16:30",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "16:30 - 18:00",
          titleKey: "schedule.day1.session6.title",
          type: "poster",
          locationKey: "schedule.location.exhibitHall",
          descKey: "schedule.day1.session6.desc",
          icon: MapPin
        },
        {
          time: "19:00 - 21:00",
          titleKey: "schedule.day1.session7.title",
          type: "social",
          locationKey: "schedule.location.ballroom",
          descKey: "schedule.day1.session7.desc",
          icon: Award
        }
      ]
    },
    {
      date: "November 11, 2026",
      dayNameKey: "schedule.day2.name",
      sessions: [
        {
          time: "9:00 - 10:30",
          titleKey: "schedule.day2.session1.title",
          type: "keynote",
          locationKey: "schedule.location.grandHall",
          speakersKey: "schedule.day2.session1.speakers",
          descKey: "schedule.day2.session1.desc",
          icon: Globe
        },
        {
          time: "10:30 - 11:00",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "11:00 - 13:00",
          titleKey: "schedule.day2.session2.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day2.session2.desc",
          icon: Users
        },
        {
          time: "13:00 - 14:30",
          titleKey: "schedule.lunchBreak",
          type: "social",
          locationKey: "schedule.location.dining",
          icon: Coffee
        },
        {
          time: "14:30 - 16:00",
          titleKey: "schedule.day2.session3.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day2.session3.desc",
          icon: Users
        },
        {
          time: "16:00 - 16:30",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "16:30 - 18:00",
          titleKey: "schedule.day2.session4.title",
          type: "workshop",
          locationKey: "schedule.location.roomA",
          descKey: "schedule.day2.session4.desc",
          icon: Users
        }
      ]
    },
    {
      date: "November 12, 2026",
      dayNameKey: "schedule.day3.name",
      sessions: [
        {
          time: "9:00 - 10:30",
          titleKey: "schedule.day3.session1.title",
          type: "keynote",
          locationKey: "schedule.location.grandHall",
          speakersKey: "schedule.day3.session1.speakers",
          descKey: "schedule.day3.session1.desc",
          icon: Globe
        },
        {
          time: "10:30 - 11:00",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "11:00 - 13:00",
          titleKey: "schedule.day3.session2.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day3.session2.desc",
          icon: Users
        },
        {
          time: "13:00 - 14:30",
          titleKey: "schedule.lunchBreak",
          type: "social",
          locationKey: "schedule.location.dining",
          icon: Coffee
        },
        {
          time: "14:30 - 16:00",
          titleKey: "schedule.day3.session3.title",
          type: "panel",
          locationKey: "schedule.location.grandHall",
          descKey: "schedule.day3.session3.desc",
          icon: Users
        },
        {
          time: "16:00 - 16:30",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "16:30 - 18:00",
          titleKey: "schedule.day3.session4.title",
          type: "poster",
          locationKey: "schedule.location.exhibitHall",
          descKey: "schedule.day3.session4.desc",
          icon: MapPin
        }
      ]
    },
    {
      date: "November 13, 2026",
      dayNameKey: "schedule.day4.name",
      sessions: [
        {
          time: "8:00 - 17:00",
          titleKey: "schedule.day4.session1.title",
          type: "fieldtrip",
          locationKey: "schedule.day4.session1.location",
          descKey: "schedule.day4.session1.desc",
          icon: MapPin
        },
        {
          time: "19:00 - 22:00",
          titleKey: "schedule.day4.session2.title",
          type: "social",
          locationKey: "schedule.location.vineyard",
          descKey: "schedule.day4.session2.desc",
          icon: Award
        }
      ]
    },
    {
      date: "November 14, 2026",
      dayNameKey: "schedule.day5.name",
      sessions: [
        {
          time: "9:00 - 10:30",
          titleKey: "schedule.day5.session1.title",
          type: "keynote",
          locationKey: "schedule.location.grandHall",
          speakersKey: "schedule.day5.session1.speakers",
          descKey: "schedule.day5.session1.desc",
          icon: Globe
        },
        {
          time: "10:30 - 11:00",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "11:00 - 13:00",
          titleKey: "schedule.day5.session2.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day5.session2.desc",
          icon: Users
        },
        {
          time: "13:00 - 14:30",
          titleKey: "schedule.lunchBreak",
          type: "social",
          locationKey: "schedule.location.dining",
          icon: Coffee
        },
        {
          time: "14:30 - 16:00",
          titleKey: "schedule.day5.session3.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day5.session3.desc",
          icon: Users
        },
        {
          time: "16:00 - 16:30",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "16:30 - 18:00",
          titleKey: "schedule.day5.session4.title",
          type: "workshop",
          locationKey: "schedule.location.roomB",
          descKey: "schedule.day5.session4.desc",
          icon: Users
        }
      ]
    },
    {
      date: "November 15, 2026",
      dayNameKey: "schedule.day6.name",
      sessions: [
        {
          time: "9:00 - 10:30",
          titleKey: "schedule.day6.session1.title",
          type: "panel",
          locationKey: "schedule.location.grandHall",
          descKey: "schedule.day6.session1.desc",
          icon: Users
        },
        {
          time: "10:30 - 11:00",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "11:00 - 13:00",
          titleKey: "schedule.day6.session2.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day6.session2.desc",
          icon: Users
        },
        {
          time: "13:00 - 14:30",
          titleKey: "schedule.lunchBreak",
          type: "social",
          locationKey: "schedule.location.dining",
          icon: Coffee
        },
        {
          time: "14:30 - 16:00",
          titleKey: "schedule.day6.session3.title",
          type: "concurrent",
          locationKey: "schedule.location.multiple",
          descKey: "schedule.day6.session3.desc",
          icon: Users
        },
        {
          time: "16:00 - 16:30",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "16:30 - 18:00",
          titleKey: "schedule.day6.session4.title",
          type: "plenary",
          locationKey: "schedule.location.grandHall",
          descKey: "schedule.day6.session4.desc",
          icon: Award
        }
      ]
    },
    {
      date: "November 16, 2026",
      dayNameKey: "schedule.day7.name",
      sessions: [
        {
          time: "9:00 - 11:00",
          titleKey: "schedule.day7.session1.title",
          type: "plenary",
          locationKey: "schedule.location.grandHall",
          descKey: "schedule.day7.session1.desc",
          icon: Users
        },
        {
          time: "11:00 - 11:30",
          titleKey: "schedule.coffeeBreak",
          type: "social",
          locationKey: "schedule.location.terrace",
          icon: Coffee
        },
        {
          time: "11:30 - 13:00",
          titleKey: "schedule.day7.session2.title",
          type: "plenary",
          locationKey: "schedule.location.grandHall",
          speakersKey: "schedule.day7.session2.speakers",
          descKey: "schedule.day7.session2.desc",
          icon: Award
        },
        {
          time: "13:00 - 14:00",
          titleKey: "schedule.day7.session3.title",
          type: "social",
          locationKey: "schedule.location.ballroom",
          descKey: "schedule.day7.session3.desc",
          icon: Award
        }
      ]
    }
  ];


  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-orange-400 text-white"; // Coral
      case "plenary":
        return "bg-blue-900 text-white"; // Azul Pacífico
      case "concurrent":
        return "bg-teal-600 text-white"; // Verde mar
      case "workshop":
        return "bg-yellow-500 text-black"; // Amarillo dorado
      case "panel":
        return "bg-amber-800 text-white"; // Marrón volcánico
      case "poster":
        return "bg-purple-700 text-white"; // Púrpura
      case "fieldtrip":
        return "bg-green-700 text-white"; // Verde natural
      case "social":
        return "bg-gray-400 text-white"; // Gris piedra
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-calypso-900">
              {t("schedule.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-calypso-800">
              {t("schedule.description")}
            </p>
          </div>

          {/* Day selector tabs */}
          <div className="flex overflow-x-auto mb-8 gap-2 pb-4">
            {scheduleData.map((day, idx) => (
              <Button
                key={idx}
                variant={selectedDay === idx ? "congress" : "outline"}
                onClick={() => setSelectedDay(idx)}
                className={`flex-shrink-0 ${selectedDay !== idx ? 'bg-[#143c8c]/60 text-orange-700 hover:bg-[#143c8c]/60 ' : 'bg-[#143c8c]/60 text-orange-700 hover:bg-[#143c8c]/60'}`}
              >
                {t(day.dayNameKey)}
              </Button>
            ))}
          </div>

          {/* Selected day schedule */}
          <Card className="shadow-congress">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800">
                {scheduleData[selectedDay].date}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduleData[selectedDay].sessions.map((session, idx) => {
                  const IconComponent = session.icon;
                  return (
                    <div
                      key={idx}
                      className="flex gap-4 p-4  rounded-lg transition-colors border border-transparent "
                    >
                      {/* Time column */}
                      <div className="w-32 flex-shrink-0"> 
                        <Badge variant="outline" className="text-sm font-mono text-orange-700 border-orange-700">
                          {session.time}
                        </Badge>
                      </div>

                      {/* Session details */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2 gap-3">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5 text-blue-800 flex-shrink-0" />
                            <h4 className="text-lg font-semibold text-orange-800">
                              {t(session.titleKey)}
                            </h4>
                          </div>
                          <Badge className={`flex-shrink-0  ${getTypeColor(session.type)}`}>
                            {t(`schedule.type.${session.type}`)}
                          </Badge>
                        </div>

                        {session.speakersKey && (
                          <p className="text-sm text-muted-foreground mb-1 text-orange-700">
                            <Users className="w-4 h-4 inline mr-1 " />
                            {t(session.speakersKey)}
                          </p>
                        )}

                        <p className="text-sm text-muted-foreground mb-1 text-orange-700">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {t(session.locationKey)}
                        </p>

                        {session.descKey && (
                          <p className="text-sm mt-2 text-foreground/80 text-orange-700">
                            {t(session.descKey)}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Download schedule button */}
          <div className="mt-8 text-center text-orange-800">
            <Button className="text-orange-800" variant="congress" size="lg">
              <FileText className="mr-2 h-5 w-5 text-orange-800" />
              {t("schedule.downloadProgram")}
            </Button>
          </div>

          {/* Session types legend */}
          <Card className="mt-8 shadow-congress">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-center text-orange-800">
                {t("schedule.sessionTypes")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-400 text-white">
                    {t("schedule.type.keynote")}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-900 text-white">
                    {t("schedule.type.plenary")}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-teal-600 text-white">
                    {t("schedule.type.concurrent")}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-yellow-500 text-black">
                    {t("schedule.type.workshop")}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-800 text-white">
                    {t("schedule.type.panel")}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-700 text-white">
                    {t("schedule.type.poster")}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-700 text-white">
                    {t("schedule.type.fieldtrip")}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-gray-400 text-white">
                    {t("schedule.type.social")}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ConferenceSchedule;