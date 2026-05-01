import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/628113513799?text=Halo%20Shield%20Pest%20Control%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20pembasmi%20hama";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
     <div className="flex flex-col items-start leading-none py-1">
  <img 
    src="/image/logo.jpeg" 
    alt="Shield Logo" 
    className="h-10 md:h-12 w-auto object-contain" 
  />
  <p className="text-[9px] font-black text-orange-600 tracking-tighter uppercase mt-0.5">
    Pest Control Surabaya
  </p>
</div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Tim
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Tentang
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-orange-400/50 transition-all duration-300 font-medium"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-2 rounded-lg hover:shadow-lg transition-all"
            >
              <MessageCircle size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-orange-100">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors"
            >
              Tim
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors"
            >
              Tentang
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
