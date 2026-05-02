import { Bug, Mouse, Droplet, Phone } from "lucide-react";

// Komponen SVG Nyamuk Custom agar bisa diwarnai putih
const MosquitoIcon = ({ size = 48, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m19 7-.94 2.12L16 10l2.06.88L19 13l.88-2.12L22 10l-2.12-.88L19 7Z" />
    <path d="M16.96 15c.58-1.5 1.21-3.13 1.04-4.54a2 2 0 1 0-3.9 1.35c.08.47.2 1 .37 1.58L13 15.5l-4-4-1.5 1.5 3.5 3.5c-.58-.17-1.11-.29-1.58-.37a2 2 0 1 0-1.35 3.9c1.41.17 3.04-.46 4.54-1.04l2.31 2.31 1.42-1.42-2.38-2.38Z" />
    <path d="M12 9s-2-2-5-2-5 2-5 2" />
    <path d="M12 9s2-2 5-2 5 2 5 2" />
    <path d="m7 2-3 2" />
    <path d="m17 2 3 2" />
  </svg>
);

const services = [
  {
    icon: MosquitoIcon, // Sekarang pakai SVG Nyamuk yang bisa jadi putih
    title: "Fogging Nyamuk",
    description: "Layanan fogging profesional untuk memberantas nyamuk dan mencegah penyakit yang dibawanya",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: Bug,
    title: "Anti Rayap",
    description: "Perlindungan komprehensif untuk mencegah kerusakan bangunan akibat rayap",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Mouse,
    title: "Pembasmi Tikus",
    description: "Solusi efektif untuk mengendalikan populasi tikus di rumah dan bisnis Anda",
    color: "from-orange-600 to-red-500",
  },
  {
    icon: Droplet,
    title: "Disinfektan",
    description: "Layanan disinfeksi menyeluruh untuk menjaga kebersihan dan kesehatan lingkungan",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Bug,
    title: "Pembasmi Semut/Lalat/Kecoa",
    description: "Pengendalian hama rumahan lainnya dengan metode yang aman dan efisien",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Phone,
    title: "Konsultasi & Survey Gratis",
    description: "Konsultasi gratis dan survey lokasi untuk area Surabaya Raya tanpa biaya tambahan",
    color: "from-amber-500 to-orange-500",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan solusi pembasmi hama terlengkap dengan teknologi terkini dan tim profesional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Icon Background */}
                <div
                  className={`h-24 bg-gradient-to-r ${service.color} flex items-center justify-center overflow-hidden`}
                >
                  <Icon 
                    size={48} 
                    className="text-white group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${service.color} group-hover:h-2 transition-all duration-300`} />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/628113513799?text=Halo%20Shield%20Pest%20Control%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20pembasmi%20hama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-orange-400/50 hover:scale-105 transition-all duration-300"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}