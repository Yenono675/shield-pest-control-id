import { Bug, Mouse, Droplet, Phone } from "lucide-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// 1. Fungsi Ledakan (Di luar komponen)
const handleExplosion = () => {
  const duration = 1.5 * 1000;
  const animationEnd = Date.now() + duration;
  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#222222", "#000000"]
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#222222", "#000000"]
    });
    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

// 2. Icon Nyamuk Custom kamu
const MosquitoIcon = ({ size = 48, className = "" }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m19 7-.94 2.12L16 10l2.06.88L19 13l.88-2.12L22 10l-2.12-.88L19 7Z" />
    <path d="M16.96 15c.58-1.5 1.21-3.13 1.04-4.54a2 2 0 1 0-3.9 1.35c.08.47.2 1 .37 1.58L13 15.5l-4-4-1.5 1.5 3.5 3.5c-.58-.17-1.11-.29-1.58-.37a2 2 0 1 0-1.35 3.9c1.41.17 3.04-.46 4.54-1.04l2.31 2.31 1.42-1.42-2.38-2.38Z" />
    <path d="M12 9s-2-2-5-2-5 2-5 2" /><path d="M12 9s2-2 5-2 5 2 5 2" /><path d="m7 2-3 2" /><path d="m17 2 3 2" />
  </svg>
);

// 3. Data Lengkap (Semua layanan masuk sini)
const services = [
  {
    icon: MosquitoIcon,
    title: "Fogging Nyamuk",
    description: "Layanan fogging profesional untuk memberantas nyamuk dan mencegah penyakit yang dibawanya",
    color: "from-orange-400 to-orange-500",
    images: ["/image/fogging2.jpeg"],
    detail: " Teknik pengendalian hama dapat dilakukan melalui dua metode utama, yaitu spraying dan fogging, yang masing-masing memiliki fungsi spesifik sesuai dengan kondisi lapangan. Spraying merupakan metode penyemprotan larutan insektisida ke permukaan area tertentu menggunakan alat seperti power sprayer, hand sprayer, atau mist blower untuk membasmi hama merayap melalui efek residu yang ditinggalkan. Sementara itu, fogging adalah sistem pengasapan tebal yang bersifat sistemik dan residual, dirancang khusus untuk menjangkau celah-celah sempit serta membasmi hama terbang secara massal dengan cara menyebarkan partikel insektisida ke udara dalam bentuk kabut. Kombinasi kedua teknik ini memastikan perlindungan yang menyeluruh, baik pada permukaan benda maupun di seluruh ruang udara pada area yang diproteksi."
  },
  {
    icon: Bug,
    title: "Anti Rayap",
    description: "Perlindungan komprehensif untuk mencegah kerusakan bangunan akibat rayap",
    color: "from-orange-500 to-orange-600",
    detail: "Sistem perlindungan rayap kami mencakup metode Termite Control yang dirancang untuk perlindungan jangka panjang. Kami menggunakan teknik pengumpanan (Termite Baiting System) dan penyuntikan tanah (Soil Treatment) untuk memutus siklus hidup koloni rayap. Cairan termitisida yang digunakan memiliki efek 'transfer' di mana rayap yang terpapar akan membawa zat aktif ke sarang dan membasmi seluruh koloni termasuk ratu rayap, sehingga struktur bangunan tetap aman dari kerusakan struktural."
  },
  {
    icon: Mouse,
    title: "Pembasmi Tikus",
    description: "Solusi efektif untuk mengendalikan populasi tikus di rumah dan bisnis Anda",
    color: "from-orange-600 to-red-500",
    detail: "Pengendalian Rodent Control menggunakan strategi terpadu yang meliputi trapping (perangkap) dan baiting (umpan). Kami menggunakan umpan antikoagulan yang efektif membuat tikus mati kering tanpa meninggalkan bau menyengat di area tersembunyi. Fokus utama kami adalah menutup jalur masuk (proofing) dan pemasangan umpan strategis di titik-titik aktivitas tikus untuk memastikan area bisnis dan rumah Anda bebas dari risiko penyakit dan kerusakan instalasi kabel."
  },
  {
    icon: Droplet,
    title: "Disinfektan",
    description: "Layanan disinfeksi menyeluruh untuk menjaga kebersihan dan kesehatan lingkungan",
    color: "from-red-500 to-orange-600",
    detail: "Layanan sterilisasi ruangan menggunakan cairan disinfektan bersertifikat yang aman bagi manusia namun ampuh membunuh virus, bakteri, dan kuman. Metode aplikasi dilakukan melalui Ultra Low Volume (ULV) Misting, yang menghasilkan partikel uap halus untuk menjangkau setiap sudut ruangan, permukaan benda, hingga sirkulasi udara di dalam gedung secara menyeluruh dan cepat kering."
  },
  {
    icon: Bug,
    title: "Pembasmi Semut/Lalat/Kecoa",
    description: "Pengendalian hama rumahan lainnya dengan metode yang aman dan efisien",
    color: "from-orange-500 to-amber-500",
    detail: "Metode General Pest Control diaplikasikan melalui teknik pengumpanan gel (gel baiting) khusus kecoa dan semut, serta Residual Spraying untuk area yang sering dilalui hama. Kami memastikan penggunaan insektisida yang bersifat odorless (tidak berbau) sehingga tidak mengganggu aktivitas penghuni gedung, namun tetap efektif dalam mengendalikan populasi hama dalam waktu singkat."
  },
  {
    icon: Phone,
    title: "Konsultasi & Survey Gratis",
    description: "Konsultasi gratis dan survey lokasi untuk area Surabaya Raya tanpa biaya tambahan",
    color: "from-amber-500 to-orange-500",
    detail: "Kami memberikan layanan inspeksi menyeluruh tanpa biaya untuk area Surabaya, Sidoarjo, dan Gresik. Tim ahli kami akan melakukan identifikasi jenis hama, tingkat serangan, serta memberikan rekomendasi solusi dan penawaran harga yang transparan langsung di lokasi Anda."
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState(false);
  const [activeData, setActiveData] = useState<any>(null);

  const handleOpenDetail = (data: any) => {
    setActiveData(data);
    setOpen(true);
    handleExplosion();
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi pembasmi hama terlengkap dengan teknologi terkini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                onClick={() => handleOpenDetail(service)}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 cursor-pointer"
              >
                <div className={`h-24 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <Icon size={48} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${service.color} group-hover:h-2 transition-all duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Modal Dialog */}
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[99]" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-lg bg-white rounded-2xl p-6 sm:p-8 z-[100] shadow-2xl overflow-hidden">
              <AnimatePresence>
                {activeData && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${activeData.color} flex items-center justify-center mb-6`}>
                      <activeData.icon size={32} className="text-white" />
                    </div>
                    <Dialog.Title className="text-2xl font-bold mb-2">{activeData.title}</Dialog.Title>
                    <div className="h-1 w-20 bg-orange-500 mb-6 rounded-full" />
                    <Dialog.Description className="text-gray-600 leading-relaxed mb-8">
                      {activeData.detail}
                    </Dialog.Description>
                    <button 
                      onClick={() => setOpen(false)}
                      className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-black transition-colors"
                    >
                      Tutup Detail
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}