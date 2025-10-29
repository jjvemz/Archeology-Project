import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ship, Map, Anchor, MapPin, Mountain, Waves } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const PacificMigrationTimeline = () => {
  const { t } = useLanguage();

  const migrationEvents = [
    {
      yearKey: "timeline.event1.year",
      eventKey: "timeline.event1.event",
      locationKey: "timeline.event1.location",
      descKey: "timeline.event1.desc",
      icon: Ship
    },
    {
      yearKey: "timeline.event2.year",
      eventKey: "timeline.event2.event",
      locationKey: "timeline.event2.location",
      descKey: "timeline.event2.desc",
      icon: Waves
    },
    {
      yearKey: "timeline.event3.year",
      eventKey: "timeline.event3.event",
      locationKey: "timeline.event3.location",
      descKey: "timeline.event3.desc",
      icon: Map
    },
    {
      yearKey: "timeline.event4.year",
      eventKey: "timeline.event4.event",
      locationKey: "timeline.event4.location",
      descKey: "timeline.event4.desc",
      icon: Anchor
    },
    {
      yearKey: "timeline.event5.year",
      eventKey: "timeline.event5.event",
      locationKey: "timeline.event5.location",
      descKey: "timeline.event5.desc",
      icon: MapPin
    },
    {
      yearKey: "timeline.event6.year",
      eventKey: "timeline.event6.event",
      locationKey: "timeline.event6.location",
      descKey: "timeline.event6.desc",
      icon: Mountain
    }
  ];

  return (
    <section id="timeline" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("timeline.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t("timeline.description")}
            </p>
          </div>

          {/* Desktop Timeline (horizontal with alternating sides) */}
          <div className="hidden md:block relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pacific-blue/30"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {migrationEvents.map((event, idx) => {
                const IconComponent = event.icon;
                const isLeft = idx % 2 === 0;

                return (
                  <div key={idx} className="relative">
                    <div
                      className={`flex items-center ${
                        isLeft ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Content card */}
                      <div className="w-5/12">
                        <Card className="shadow-congress hover:shadow-warm transition-all duration-300 group">
                          <CardContent className="p-6">
                            <Badge className="mb-3 bg-pacific-blue">{t(event.yearKey)}</Badge>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-pacific-blue transition-colors">
                              {t(event.eventKey)}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3 font-semibold">
                              {t(event.locationKey)}
                            </p>
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              {t(event.descKey)}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Center icon */}
                      <div className="w-2/12 flex justify-center relative z-10">
                        <div className="w-16 h-16 bg-pacific-blue rounded-full flex items-center justify-center shadow-congress hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-black" />
                        </div>
                      </div>

                      {/* Empty space on the opposite side */}
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline (vertical) */}
          <div className="md:hidden relative pl-8">
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-pacific-blue/30"></div>

            {/* Timeline events */}
            <div className="space-y-8">
              {migrationEvents.map((event, idx) => {
                const IconComponent = event.icon;

                return (
                  <div key={idx} className="relative">
                    {/* Icon */}
                    <div className="absolute left-[-2.5rem] top-0 w-12 h-12 bg-pacific-blue rounded-full flex items-center justify-center shadow-congress z-10">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Content card */}
                    <Card className="shadow-congress hover:shadow-warm transition-all duration-300">
                      <CardContent className="p-5">
                        <Badge className="mb-2 bg-pacific-blue">{t(event.yearKey)}</Badge>
                        <h3 className="text-lg font-bold mb-2">
                          {t(event.eventKey)}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2 font-semibold">
                          {t(event.locationKey)}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {t(event.descKey)}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional info section */}
          <Card className="mt-16 shadow-congress">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-800 text-opacity-65">
                {t("timeline.seafaring.title")}
              </h3>
              <p className="text-orange-800 text-opacity-65 leading-relaxed max-w-4xl mx-auto text-center">
                {t("timeline.seafaring.desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PacificMigrationTimeline;
