import Header from "@/components/Header";
import CongressHero from "@/components/CongressHero";
import CallForPapers from "@/components/CallForPapers";
import AreasOfReflection from "@/components/AreasOfReflection";
import RegistrationFees from "@/components/RegistrationFees";
import VenueLocation from "@/components/VenueLocation";
import ScientificCommittee from "@/components/ScientificCommittee";
import PacificGallery from "@/components/PacificGallery";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import { AreasOfReflectionGallery } from "@/components/AreasOfReflectionGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CongressHero />
      <CallForPapers />
      <AreasOfReflection />
      <AreasOfReflectionGallery />
      <VideoSection />
      <PacificGallery />
      <RegistrationFees />
      <VenueLocation />
      <ScientificCommittee />
      <Footer />
    </div>
  );
};

export default Index;
