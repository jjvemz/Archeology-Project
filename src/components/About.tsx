import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            A Journey Through Time
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our exposition brings together the most significant archaeological discoveries 
            from around the globe, offering visitors an unprecedented opportunity to witness 
            the evolution of human civilization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 shadow-warm hover:shadow-artifact transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-bronze rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🏺</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ancient Artifacts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover pottery, tools, and ceremonial objects spanning over 10,000 years 
                of human history from civilizations across the globe.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 shadow-warm hover:shadow-artifact transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🗿</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lost Civilizations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Explore the remnants of forgotten empires and uncover the secrets 
                of ancient societies through their preserved treasures.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-8 shadow-warm hover:shadow-artifact transition-all duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-br from-bronze to-stone rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl text-white">🔍</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Interactive Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engage with cutting-edge technology including AR reconstructions 
                and interactive displays that bring ancient worlds to life.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;