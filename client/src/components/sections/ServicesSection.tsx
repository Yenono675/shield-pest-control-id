import { Zap, Bug, Mouse, Droplet, Bug as BugIcon, Phone } from "lucide-react";

const services = [
  {
    icon: () => <span className="text-2xl">🦟</span>,
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
    icon: BugIcon,
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
                  className={`h-24 bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={48} className="text-white" />
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
