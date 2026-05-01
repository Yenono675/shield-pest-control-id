import { Award, CheckCircle, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Tentang Shield Pest Control
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Shield Pest Control Surabaya adalah perusahaan pembasmi hama terpercaya yang telah melayani masyarakat Surabaya dan sekitarnya dengan dedikasi penuh. Kami berkomitmen untuk memberikan solusi pembasmi hama berkualitas tinggi dengan standar keselamatan internasional.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <Award className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Izin Operasional Resmi</h3>
                  <p className="text-gray-600">
                    Memiliki izin operasional dari Dinas Kesehatan Kota Surabaya
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Teknologi Profesional</h3>
                  <p className="text-gray-600">
                    Menggunakan teknologi terkini dan bahan berkualitas tinggi
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Jangkauan Luas</h3>
                  <p className="text-gray-600">
                    Melayani area Surabaya Raya dengan konsultasi dan survey gratis
                  </p>
                </div>
              </div>
            </div>

            {/* Company Slogan */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl mb-8">
              <p className="text-center text-2xl font-bold italic">
                #TUNTAS MELINDUNGI!
              </p>
              <p className="text-center text-sm mt-2 text-orange-100">
                Komitmen kami untuk perlindungan hama yang menyeluruh dan terpercaya
              </p>
            </div>
          </div>

          {/* Right Content - Stats & Features */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <p className="text-4xl font-bold text-orange-600 mb-2">15+</p>
                <p className="text-gray-600 font-medium">Tahun Pengalaman</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <p className="text-4xl font-bold text-orange-600 mb-2">1000+</p>
                <p className="text-gray-600 font-medium">Pelanggan Puas</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <p className="text-4xl font-bold text-orange-600 mb-2">6+</p>
                <p className="text-gray-600 font-medium">Jenis Layanan</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <p className="text-4xl font-bold text-orange-600 mb-2">24/7</p>
                <p className="text-gray-600 font-medium">Siap Melayani</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Keunggulan Kami
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span className="text-gray-700">Tim profesional terlatih dan bersertifikat</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span className="text-gray-700">Peralatan modern dan ramah lingkungan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span className="text-gray-700">Harga transparan dan kompetitif</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span className="text-gray-700">Garansi kepuasan pelanggan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span className="text-gray-700">Respons cepat dan layanan purna jual terbaik</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
