import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

interface ShieldDialogProps {
  title?: string;
  images?: string[]; 
  description?: string; 
  open?: boolean;
  onLogin?: () => void;
  onOpenChange?: (open: boolean) => void;
}

export function ShieldDialog({ title, images = [], description, open, onOpenChange }: ShieldDialogProps) {
  const [showContent, setShowContent] = useState(false);

  // Trigger animasi setiap kali modal dibuka
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setShowContent(true), 50);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [open]);

  const displayImage = images && images.length > 0 
    ? images[0] 
    : "https://placehold.co/600x400?text=Shield+Pest+Control";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden bg-[#f8f8f7] rounded-[32px] w-[95vw] max-w-2xl border-none shadow-2xl z-[110]">
        <div className="flex flex-col md:flex-row min-h-[350px]">
          
          {/* Sisi Kiri: Deskripsi */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={showContent ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <DialogTitle className="text-3xl font-black text-[#1a1a19] mb-4">
                {title}
              </DialogTitle>
              <DialogDescription className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
              </DialogDescription>
            </motion.div>
          </div>

          {/* Sisi Kanan: Foto Jelly Shake */}
          <div className="w-full md:w-[300px] bg-gray-200/50 relative overflow-hidden flex items-center justify-center p-6">
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ x: 300, opacity: 0, scale: 0.3 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1, 
                    scale: 1,
                    rotate: [0, -15, 12, -8, 5, 0], // Jelly Shake sequence
                  }}
                  exit={{ x: 50, opacity: 0, scale: 0.8 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15, // Semakin rendah semakin kenyal
                    delay: 0.1 
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-full h-full relative z-10"
                >
                  <img 
                    src="/image/fogging1.jpeg"
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                    onError={(e) => {
            console.log("Gambar Error, Pakai Fallback!");
            (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Foto+Shield+Pest";
                  }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Dekorasi belakang gambar biar gak flat */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
          </div>
        </div>

        <DialogFooter className="p-6 bg-white/50 border-t border-black/5">
          <Button 
            onClick={() => onOpenChange?.(false)}
            className="w-full bg-[#1a1a19] hover:bg-black text-white rounded-xl h-12 font-bold transition-all"
          >
            Tutup Detail
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}