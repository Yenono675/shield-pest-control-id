import { Users } from "lucide-react";

const teamMembers = [
 {
    name: "Ricky Wicaksono,SE",
    role: "Owner/Boss",
    description: "Pendiri dan pemimpin Shield Pest Control dengan pengalaman lebih dari 15 tahun di industri pembasmi hama",
    image: "/image/ricky.jpeg",
  },
  {
    name: "Tim Profesional",
    role: "Teknisi Berpengalaman",
    description: "Teknisi berpengalaman dan terlatih dalam menangani berbagai jenis hama dengan standar keselamatan tertinggi",
    image: "/image/FotoTim.jpeg",
  },
  {
    name: "Layanan Pelanggan",
    role: "Customer Support",
    description: "Tim responsif yang siap membantu Anda 24/7 untuk konsultasi dan pertanyaan seputar layanan kami",
    image: "/image/layanan.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-orange-500" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Tim Kami
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dipimpin oleh profesional berpengalaman dengan dedikasi tinggi terhadap kepuasan pelanggan
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Shield Pest Control?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Bersertifikat & Berlisensi</p>
                <p className="text-sm text-gray-600">Izin operasional dari Dinas Kesehatan Kota Surabaya</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Teknologi Terkini</p>
                <p className="text-sm text-gray-600">Menggunakan peralatan dan bahan berkualitas tinggi</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Harga Kompetitif</p>
                <p className="text-sm text-gray-600">Konsultasi dan survey gratis untuk area Surabaya Raya</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Layanan Responsif</p>
                <p className="text-sm text-gray-600">Siap membantu Anda kapan saja dengan solusi terbaik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
