import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400"

const CongressHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={PLACEHOLDER_IMAGE} 
          alt="Moai statues at Easter Island representing Pacific archaeology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-volcanic/80 via-volcanic/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-congress-yellow text-volcanic font-bold text-lg px-6 py-2">
            First International Congress
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Congress Archeology: Changing Environment
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pacific-blue to-coral"> 
            </span>
            <br />in the Pacific
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Exploring the dynamic relationship between archaeological heritage and environmental 
            transformations across Pacific regions. Join leading researchers in Chile's wine country.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-congress-yellow" />
              <span className="text-lg font-medium">March 2027</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-congress-yellow" />
              <span className="text-lg font-medium">Colchagua Valley, Chile</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-congress-yellow" />
              <span className="text-lg font-medium">International Participation</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="congress" className="text-lg px-8 py-6">
              Submit Your Abstract
            </Button>
            <Button size="lg" variant="yellow" className="text-lg px-8 py-6">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-volcanic">
              Call for Papers
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CongressHero;