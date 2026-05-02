import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Shield, Users, Info, MessageSquare } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TeamSection from "@/components/sections/TeamSection";
import AboutSection from "@/components/sections/AboutSection";
import ChatbotSection from "@/components/sections/ChatbotSection";

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="w-full">
      {/* About Section */}
      <AboutSection />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Chatbot Section */}
      {showChatbot && <ChatbotSection onClose={() => setShowChatbot(false)} />}

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-orange-400/50 hover:scale-110 transition-all duration-300 z-40"
        aria-label="Open Chatbot"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
