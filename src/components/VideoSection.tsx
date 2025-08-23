import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Users, MessageCircle, Award } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet the Organizing Team
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Hear directly from our international organizing committee about the vision, 
              goals, and exciting opportunities at the Pacific Archaeology Congress.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="shadow-congress">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Play className="h-8 w-8 text-coral" />
                    Welcome Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    In this exclusive video, our organizing committee shares insights about 
                    the congress themes, the significance of the Pacific region in archaeology, 
                    and what participants can expect from this groundbreaking event.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-pacific-blue" />
                      <span className="text-sm text-muted-foreground">
                        Meet the international organizing committee
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-5 w-5 text-pacific-teal" />
                      <span className="text-sm text-muted-foreground">
                        Learn about congress themes and objectives
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-congress-yellow" />
                      <span className="text-sm text-muted-foreground">
                        Discover networking and collaboration opportunities
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="congress" size="lg" className="w-full">
                    Watch Welcome Video
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-congress">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    What You'll Learn
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-pacific-blue pl-4">
                      <h4 className="font-semibold text-foreground">Congress Vision</h4>
                      <p className="text-muted-foreground text-sm">
                        Our commitment to advancing Pacific archaeology research
                      </p>
                    </div>
                    <div className="border-l-4 border-pacific-teal pl-4">
                      <h4 className="font-semibold text-foreground">Research Priorities</h4>
                      <p className="text-muted-foreground text-sm">
                        Key areas of focus for environmental archaeology
                      </p>
                    </div>
                    <div className="border-l-4 border-coral pl-4">
                      <h4 className="font-semibold text-foreground">Collaboration Goals</h4>
                      <p className="text-muted-foreground text-sm">
                        Building lasting international research partnerships
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              {/* Video Placeholder */}
              <Card className="shadow-congress overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-volcanic to-pacific-blue flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Congress Introduction</h3>
                    <p className="text-white/80 text-sm">Duration: 8 minutes</p>
                  </div>
                  
                  {/* Overlay for click effect */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                    <Button variant="yellow" size="lg">
                      <Play className="h-5 w-5 mr-2" />
                      Play Video
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Team Highlights */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Card className="shadow-card text-center">
                  <CardContent className="pt-4">
                    <div className="w-12 h-12 bg-gradient-pacific rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Team Expertise</h4>
                    <p className="text-muted-foreground text-sm">50+ years combined experience</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card text-center">
                  <CardContent className="pt-4">
                    <div className="w-12 h-12 bg-congress-yellow rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Award className="h-6 w-6 text-volcanic" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Recognition</h4>
                    <p className="text-muted-foreground text-sm">International awards received</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;