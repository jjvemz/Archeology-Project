import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Award, BookOpen, Users } from "lucide-react";

const committee = [
  {
    name: "Dr. Elena Marchetti",
    title: "Chair, International Scientific Committee",
    affiliation: "University of Auckland, New Zealand",
    specialization: "Pacific Maritime Archaeology",
    region: "New Zealand"
  },
  {
    name: "Prof. Hiroshi Tanaka",
    title: "Vice-Chair",
    affiliation: "Kyoto University, Japan",
    specialization: "Island Settlement Patterns",
    region: "Japan"
  },
  {
    name: "Dr. Maria Fernandez-Lopez",
    title: "Committee Member",
    affiliation: "Universidad de Chile",
    specialization: "Colonial Impact Studies",
    region: "Chile"
  },
  {
    name: "Prof. Robert Anderson",
    title: "Committee Member",
    affiliation: "University of Hawaii at Manoa, USA",
    specialization: "Polynesian Archaeology",
    region: "Hawaii"
  },
  {
    name: "Dr. Claudine Dubois",
    title: "Committee Member",
    affiliation: "Université de la Polynésie française",
    specialization: "Cultural Change Analysis",
    region: "French Polynesia"
  },
  {
    name: "Prof. Zhang Wei",
    title: "Committee Member",
    affiliation: "Chinese Academy of Social Sciences",
    specialization: "Trans-Pacific Connections",
    region: "China"
  },
  {
    name: "Dr. Sarah Thompson",
    title: "Committee Member",
    affiliation: "Australian National University",
    specialization: "Environmental Archaeology",
    region: "Australia"
  },
  {
    name: "Prof. Carlos Morales",
    title: "Committee Member",
    affiliation: "Universidad Nacional de Colombia",
    specialization: "Coastal Adaptations",
    region: "Colombia"
  }
];

const ScientificCommittee = () => {
  return (
    <section id="committee" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              International Scientific Committee
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our distinguished panel of experts represents the finest minds in Pacific archaeology, 
              bringing together diverse perspectives from across the Pacific rim and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-congress text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-pacific-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Global Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Representatives from leading institutions across the Pacific region, 
                  ensuring diverse perspectives and comprehensive review standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-congress text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-coral mx-auto mb-4" />
                <CardTitle className="text-2xl">Rigorous Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Double-blind peer review process ensuring the highest academic standards 
                  and fair evaluation of all submissions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-congress text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-pacific-teal mx-auto mb-4" />
                <CardTitle className="text-2xl">Publication Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Selected papers will be considered for publication in leading 
                  archaeological journals and special congress proceedings.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {committee.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-congress transition-all duration-300">
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 bg-gradient-pacific rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{member.name}</CardTitle>
                  <Badge variant="secondary" className="bg-pacific-blue/10 text-pacific-blue text-xs">
                    {member.region}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-medium text-coral">{member.title}</p>
                    <p className="text-sm text-muted-foreground font-medium">{member.affiliation}</p>
                    <p className="text-xs text-muted-foreground italic">
                      {member.specialization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="shadow-congress bg-gradient-pacific text-white">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Committee Responsibilities</h3>
                <div className="grid md:grid-cols-3 gap-6 text-white/90">
                  <div>
                    <h4 className="font-semibold mb-2">Abstract Review</h4>
                    <p className="text-sm">
                      Evaluate submissions for scientific merit, relevance, and innovation
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Program Development</h4>
                    <p className="text-sm">
                      Design thematic sessions and facilitate interdisciplinary dialogue
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-sm">
                      Maintain high academic standards and promote best practices
                    </p>
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

export default ScientificCommittee;