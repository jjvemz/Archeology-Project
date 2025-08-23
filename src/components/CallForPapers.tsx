import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Award } from "lucide-react";

const CallForPapers = () => {
  return (
    <section id="call-papers" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Call for Papers
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The First International Congress on Archaeology and Changing Environment in the Pacific 
              invites researchers, scholars, and practitioners to submit their contributions exploring 
              the dynamic relationship between archaeological heritage and environmental transformations 
              across Pacific regions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calendar className="h-8 w-8 text-pacific-blue" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-pacific-blue pl-6 py-3">
                  <h4 className="font-bold text-lg text-foreground">Abstract Submission Deadline</h4>
                  <p className="text-muted-foreground">February 2026</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Submit your 300-word abstract with preliminary findings
                  </p>
                </div>
                
                <div className="border-l-4 border-pacific-teal pl-6 py-3">
                  <h4 className="font-bold text-lg text-foreground">Acceptance Notification</h4>
                  <p className="text-muted-foreground">April 2026</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Scientific committee will notify acceptance decisions
                  </p>
                </div>
                
                <div className="border-l-4 border-coral pl-6 py-3">
                  <h4 className="font-bold text-lg text-foreground">Full Paper Submission</h4>
                  <p className="text-muted-foreground">June 2026</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete manuscripts for publication consideration
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-congress">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Award className="h-8 w-8 text-coral" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-pacific p-6 rounded-lg ">
                  <h4 className="font-bold text-lg mb-2">Best Professional Paper</h4>
                  <p className="text-2xl font-bold ">$400 USD</p>
                  <p className="text-sm opacity-90">Outstanding research contribution</p>
                </div>
                
                <div className="bg-congress-yellow/20 p-4 rounded-lg border border-congress-yellow/30">
                  <h4 className="font-bold text-lg mb-2 text-volcanic">Best Student Paper</h4>
                  <p className="text-xl font-bold text-volcanic">$50 USD</p>
                  <p className="text-sm text-muted-foreground">Excellence in student research</p>
                </div>
                
                <div className="bg-pacific-teal/20 p-4 rounded-lg border border-pacific-teal/30">
                  <h4 className="font-bold text-lg mb-2">Best Retired Scholar Paper</h4>
                  <p className="text-xl font-bold">$200 USD</p>
                  <p className="text-sm text-muted-foreground">Lifetime achievement recognition</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-congress text-center">
            <CardContent className="pt-8">
              <FileText className="h-16 w-16 text-pacific-blue mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Submit?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join leading researchers from around the Pacific in this groundbreaking congress. 
                Submit your abstract and be part of shaping the future of Pacific archaeology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="congress">
                  Submit Abstract
                </Button>
                <Button size="lg" variant="outline">
                  Download Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;