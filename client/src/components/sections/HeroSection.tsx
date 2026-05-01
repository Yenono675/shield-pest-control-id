import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    title: "Perlindungan Hama Terpercaya",
    subtitle: "Layanan pembasmi hama profesional untuk rumah dan bisnis Anda",
    cta: "Konsultasi Gratis",
    image: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
  },
  {
    title: "Fogging Nyamuk Berkualitas",
    subtitle: "Teknologi terkini untuk memberantas nyamuk dan penyakit yang dibawanya",
    cta: "Pesan Sekarang",
    image: "bg-gradient-to-br from-orange-500 via-orange-600 to-red-600",
  },
  {
    title: "Anti Rayap Profesional",
    subtitle: "Cegah kerusakan bangunan dengan layanan anti rayap terbaik",
    cta: "Hubungi Kami",
    image: "bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];
  const whatsappLink = "https://wa.me/628113513799?text=Halo%20Shield%20Pest%20Control%2C%20saya%20butuh%20bantuan%20pembasmi%20hama.%20Bisa%20jadwalkan%20survei%20ke%20lokasi?"
  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Animated Background Slides */}
      <div className="relative h-screen flex items-center justify-center">
        {heroSlides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 ${s.image} transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {slide.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={20} />
                {slide.cta}
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
        clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
      }} />
    </section>
  );
}
