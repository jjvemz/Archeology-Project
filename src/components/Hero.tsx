import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-archaeology.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Uncover the
            <span className="block text-transparent bg-gradient-to-r from-terracotta to-gold bg-clip-text">
              Ancient World
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Journey through millennia of human civilization. Discover rare artifacts, 
            ancient mysteries, and the stories that shaped our world in this extraordinary 
            archaeological exposition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="expedition" className="text-lg px-8 py-6">
              Explore Exhibition
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;