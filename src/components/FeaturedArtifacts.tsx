import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import potteryImage from "@/assets/artifact-pottery.jpg";
import maskImage from "@/assets/artifact-mask.jpg";
import tabletImage from "@/assets/artifact-tablet.jpg";

const artifacts = [
  {
    id: 1,
    title: "Ceremonial Vessel",
    period: "3000-2500 BCE",
    culture: "Mesopotamian",
    description: "An intricately decorated ceramic vessel used in ancient religious ceremonies. The geometric patterns reveal sophisticated artistic traditions of early urban civilizations.",
    image: potteryImage
  },
  {
    id: 2,
    title: "Golden Funeral Mask",
    period: "1323-1295 BCE",
    culture: "Egyptian",
    description: "A magnificent bronze ceremonial mask crafted for a high-ranking official. The detailed engravings showcase the metalworking expertise of ancient Egyptian artisans.",
    image: maskImage
  },
  {
    id: 3,
    title: "Cuneiform Tablet",
    period: "2100-2000 BCE",
    culture: "Sumerian",
    description: "One of the earliest known written records, this limestone tablet contains administrative records that provide insight into ancient economic systems.",
    image: tabletImage
  }
];

const FeaturedArtifacts = () => {
  return (
    <section id="artifacts" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Discoveries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness some of the most remarkable archaeological finds that have reshaped 
            our understanding of ancient civilizations and human history.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {artifacts.map((artifact) => (
            <Card key={artifact.id} className="overflow-hidden shadow-card hover:shadow-artifact transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={artifact.image}
                  alt={artifact.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-terracotta">{artifact.culture}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{artifact.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary text-primary">
                  {artifact.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {artifact.description}
                </p>
                <Button variant="ghost" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtifacts;