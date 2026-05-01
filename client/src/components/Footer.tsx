import { MessageCircle, Instagram, Music } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
         <div className="md:col-span-1">
  <div className="mb-6">
    <img 
      src="/image/logo.jpeg" 
      alt="Shield Logo" 
      className="h-16 w-auto object-contain mb-4" 
    />
    <div className="border-l-4 border-orange-500 pl-3">
      <h3 className="font-bold text-white text-lg leading-none">Pest Control</h3>
      <p className="text-xs text-orange-400 font-bold uppercase tracking-widest mt-1">Surabaya</p>
    </div>
  </div>
  <p className="text-sm text-gray-400 leading-relaxed mb-4">
    Layanan pembasmi hama profesional dengan izin operasional dari Dinas Kesehatan Kota Surabaya.
  </p>
  <p className="text-xs text-orange-500 font-black italic tracking-tight">
    "SCAN IN AJA TUNTAS MELINDUNGI"
  </p>
</div>
          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Fogging Nyamuk
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Anti Rayap
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Pembasmi Tikus
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Disinfektan
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Konsultasi Gratis
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#hero"
                  className="hover:text-orange-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-orange-400 transition-colors"
                >
                  Tim
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-400 transition-colors"
                >
                  Tentang
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/628113513799?text=Halo%20Shield%20Pest%20Control%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20yang%20disediakan%20lebih%20lanjut%2C%20apakah%20boleh%3F"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                <MessageCircle size={18} />
                <span>0811-3513-799</span>
              </a>
              <a
                href="https://www.instagram.com/shieldpestcontrol.surabaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Instagram size={18} />
                <span>@shieldpestcontrol.surabaya</span>
              </a>
              <a
                href="https://www.tiktok.com/@rajafogging"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Music size={18} />
                <span>@rajafogging</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Shield Pest Control Surabaya. Semua hak dilindungi.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-orange-400 transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-orange-400 transition-colors"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
