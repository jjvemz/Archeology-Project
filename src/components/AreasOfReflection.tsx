import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, Waves, TreePine, Users, Globe, MapPin } from "lucide-react";

const areas = [
  {
    icon: Map,
    title: "Archaeology of Islands",
    scale: "Regional Scale",
    description: "Investigating island societies, maritime adaptations, and cultural evolution in Pacific archipelagos. Focus on settlement patterns, resource management, and inter-island connections.",
    keywords: ["Settlement Archaeology", "Maritime Culture", "Island Biogeography", "Cultural Adaptation"]
  },
  {
    icon: Users,
    title: "Cultural Changes",
    scale: "Temporal Scale",
    description: "Examining cultural transformations across different time periods, including pre-contact, colonial, and modern eras. Analysis of social structures, technological innovations, and belief systems.",
    keywords: ["Cultural Evolution", "Social Complexity", "Technological Change", "Belief Systems"]
  },
  {
    icon: TreePine,
    title: "Colonial Diseases & Impact",
    scale: "Social Scale",
    description: "Bioarchaeological studies of disease patterns, demographic changes, and health impacts during colonial periods. Understanding population dynamics and cultural responses.",
    keywords: ["Bioarchaeology", "Paleopathology", "Demographic Change", "Colonial Impact"]
  },
  {
    icon: Waves,
    title: "Climate & Environmental Change",
    scale: "Environmental Scale",
    description: "Studying past climate variations, sea-level changes, and environmental adaptations. Paleoenvironmental reconstruction and human-environment interactions.",
    keywords: ["Paleoclimate", "Sea-level Change", "Environmental Archaeology", "Adaptation Strategies"]
  },
  {
    icon: Globe,
    title: "Trans-Pacific Connections",
    scale: "Global Scale",
    description: "Exploring long-distance trade networks, migration patterns, and cultural exchanges across the Pacific Ocean. Evidence for pre-Columbian contact and interaction.",
    keywords: ["Maritime Networks", "Cultural Exchange", "Migration Patterns", "Trade Systems"]
  },
  {
    icon: MapPin,
    title: "Site Preservation & Heritage",
    scale: "Conservation Scale",
    description: "Addressing contemporary challenges in archaeological site preservation, heritage management, and community engagement in the face of environmental threats.",
    keywords: ["Heritage Management", "Site Preservation", "Community Archaeology", "Threat Assessment"]
  }
];

const AreasOfReflection = () => {
  return (
    <section id="areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Areas of Reflection
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our congress welcomes diverse perspectives across multiple scales of archaeological inquiry, 
              from local site studies to trans-Pacific comparative analyses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-congress transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-10 w-10 text-pacific-blue group-hover:text-coral transition-colors" />
                      <Badge variant="secondary" className="bg-pacific-blue/10 text-pacific-blue">
                        {area.scale}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-pacific-blue transition-colors">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.keywords.map((keyword, keyIndex) => (
                        <Badge 
                          key={keyIndex} 
                          variant="outline" 
                          className="text-xs border-pacific-teal/30 text-pacific-teal hover:bg-pacific-teal/10"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-pacific text-white shadow-congress max-w-3xl mx-auto">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4">Multi-Scale Integration</h3>
                <p className="text-white/90 leading-relaxed">
                  We especially encourage submissions that integrate multiple scales of analysis, 
                  combining local archaeological evidence with regional patterns and global contexts. 
                  Interdisciplinary approaches connecting archaeology with climatology, oceanography, 
                  and cultural anthropology are particularly welcome.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfReflection;