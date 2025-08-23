import { Card, CardContent } from "@/components/ui/card";
import hawaiiImage from "@/assets/hawaii-archaeology.jpg";
import tahitiImage from "@/assets/tahiti-archaeology.jpg";
import heroImage from "@/assets/hero-pacific-congress.jpg";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400"
const sites = [
  {
    name: "Rapa Nui (Easter Island)",
    location: "Chile",
    description: "Iconic moai statues and ceremonial platforms representing Polynesian megalithic culture",
    image: PLACEHOLDER_IMAGE,
    highlights: ["Moai Statues", "Ceremonial Platforms", "Polynesian Heritage"]
  },
  {
    name: "Hawaiian Heiau",
    location: "Hawaii, USA",
    description: "Ancient temple complexes showcasing sophisticated Polynesian religious architecture",
    image: PLACEHOLDER_IMAGE,
    highlights: ["Temple Complexes", "Sacred Spaces", "Stone Architecture"]
  },
  {
    name: "Tahitian Marae",
    location: "French Polynesia",
    description: "Stone temple platforms revealing complex social and religious hierarchies",
    image: PLACEHOLDER_IMAGE,
    highlights: ["Stone Platforms", "Religious Centers", "Social Complexity"]
  }
];

const PacificGallery = () => {
  return (
    <section id="heritage" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Pacific Archaeological Heritage
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover the remarkable archaeological sites across the Pacific that showcase 
              humanity's adaptation to island environments and changing climates through millennia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sites.map((site, index) => (
              <Card key={index} className="shadow-congress hover:shadow-warm transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={`Archaeological site at ${site.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-volcanic/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-pacific-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {site.location}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-pacific-blue transition-colors">
                    {site.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {site.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {site.highlights.map((highlight, highlightIndex) => (
                        <span 
                          key={highlightIndex}
                          className="bg-pacific-teal/10 text-pacific-teal px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-pacific text-black shadow-congress max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <h3 className="text-3xl font-bold mb-4">Connecting Pacific Cultures</h3>
                <p className="text-black/90 leading-relaxed mb-6 text-lg">
                  These iconic sites represent just a fraction of the rich archaeological heritage 
                  spanning the Pacific. Our congress will explore how environmental changes have 
                  shaped these cultures and how they, in turn, have adapted their environments 
                  across thousands of years.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-black">Archaeological Sites</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-black">Pacific Islands</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">3000+</div>
                    <div className="text-black">Years of History</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacificGallery;