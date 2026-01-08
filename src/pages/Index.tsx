import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlatform, setModalPlatform] = useState<"ios" | "android">("ios");

  const openModal = (platform: "ios" | "android") => {
    setModalPlatform(platform);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-obsidian">
      <Header onAndroidClick={() => openModal("android")} />
      <Hero onIOSClick={() => openModal("ios")} />
      <Features />
      <Footer />
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        platform={modalPlatform}
      />
    </div>
  );
};

export default Index;
