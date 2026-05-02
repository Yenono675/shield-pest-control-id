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

            {/* SUDAH DIPERBAIKI: Penutup </p> ditambahkan di akhir kalimat */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Shield Pest Control Surabaya adalah perusahaan pembasmi hama terpercaya yang telah melayani masyarakat sejak tahun 2008. Kami berkomitmen untuk memberikan solusi atas segala permasalahan hama.
            </p> 

            {/* Company Slogan */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-lg">
              <p className="text-center text-3xl font-bold italic tracking-wide">
                #TUNTAS MELINDUNGI
              </p>
              <p className="text-center text-sm mt-3 text-orange-100 uppercase tracking-widest">
                Komitmen perlindungan hama menyeluruh
              </p>
            </div>
          </div>

          {/* Right Content - 3 Stats Only */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
              <p className="text-5xl font-bold text-orange-600 mb-2">15+</p>
              <p className="text-gray-600 font-semibold">Tahun Pengalaman</p>
            </div>
            <div className="flex-1 min-w-[200px] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
              <p className="text-5xl font-bold text-orange-600 mb-2">1000+</p>
              <p className="text-gray-600 font-semibold">Pelanggan Puas</p>
            </div>
            <div className="w-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 text-center lg:text-left">
              <p className="text-5xl font-bold text-orange-600 mb-2">6+</p>
              <p className="text-gray-600 font-semibold">Jenis Layanan</p>
            </div>
          </div>
        </div> 
      </div> 
    </section>
  );
}