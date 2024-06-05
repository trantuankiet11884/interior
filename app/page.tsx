import Image from "next/image";
import NavBar from "./components/common/NavBar";
import HeroSection from "./components/sections/HeroSection";
import BrowseTheRangeSection from "./components/sections/BrowseTheRangeSection";
import OurProductSection from "./components/sections/OurProductSection";
import RoomSection from "./components/sections/RoomSection";
import ShareSetupSection from "./components/sections/ShareSetupSection";
import FooterSection from "./components/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <NavBar />
      <HeroSection />
      <BrowseTheRangeSection />
      <OurProductSection />
      <RoomSection />
      <ShareSetupSection />
      <FooterSection />
    </main>
  );
}
