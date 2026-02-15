import Header from "@/components/Header";
import CongressHero from "@/components/CongressHero";
import CallForPapers from "@/components/CallForPapers";
import VenueLocation from "@/components/VenueLocation";
import ScientificCommittee from "@/components/ScientificCommittee";
import Footer from "@/components/Footer";
import { AreasOfReflectionGallery } from "@/components/AreasOfReflectionGallery";
import SponsorsPartners from "@/components/SponsorsPartners";
import CulturalArtifactsGallery from "@/components/CulturalArtifactsGallery";
import PacificMigrationTimeline from "@/components/PacificMigrationTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#ffeecd]">
      <Header />
      <CongressHero />
      <AreasOfReflectionGallery />
      <CallForPapers />
      <PacificMigrationTimeline />
      {/* <AreasOfReflection /> */}
      <CulturalArtifactsGallery />
      {/* <VideoSection />
      <PacificGallery />
      <RegistrationFees />
      <ConferenceScheduleTable />*/}
      <ScientificCommittee />
      <VenueLocation /> 
      <SponsorsPartners />
      <Footer />
    </div>
  );
};

export default Index;
