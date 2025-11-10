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
import ConferenceSchedule from "@/components/ConferenceSchedule";
import SponsorsPartners from "@/components/SponsorsPartners";
import CulturalArtifactsGallery from "@/components/CulturalArtifactsGallery";
import PacificMigrationTimeline from "@/components/PacificMigrationTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CongressHero />
      <CallForPapers />
      <PacificMigrationTimeline />
      <AreasOfReflection />
      <AreasOfReflectionGallery />
      <CulturalArtifactsGallery />
      <VideoSection />
      <PacificGallery />
      <RegistrationFees />
      <VenueLocation />
      <ConferenceSchedule />
      <ScientificCommittee />
      {/* SponsorsPartners */}
      <Footer />
    </div>
  );
};

export default Index;
