import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ShieldDialogProps {
  title?: string;
  images?: string[];
  description?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function ShieldDialog({
  title,
  images = [],
  description,
  open,
  onOpenChange,
}: ShieldDialogProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
    setShowContent(false);
  }, [open]);

  const displayImage = images?.length > 0 ? images[0] : "/image/service.jpeg";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-transparent border-none shadow-none p-0 max-w-none w-screen h-screen outline-none flex items-center justify-center overflow-visible">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-10 md:gap-16 w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 w-full md:flex-[1.1] md:min-w-[520px] flex flex-col z-20"
          >
            <DialogTitle className="text-3xl md:text-4xl font-black text-[#1a1a19] mb-6 leading-tight">
              {title}
            </DialogTitle>

            <div className="max-h-[45vh] overflow-y-auto pr-4 mb-8 text-gray-600 leading-relaxed text-base md:text-lg text-left whitespace-pre-line">
              <DialogDescription className="text-gray-600">
                {description}
              </DialogDescription>
            </div>

            <Button
              onClick={() => onOpenChange?.(false)}
              className="w-full bg-[#1a1a19] hover:bg-black text-white rounded-2xl h-14 font-bold text-lg transition-all hover:scale-[1.02]"
            >
              Tutup Detail
            </Button>
          </motion.div>

          <div className="flex-none z-10">
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ x: 100, scale: 0.85, rotate: -6 }}
                  animate={{
                    x: 0,
                    scale: 1,
                    rotate: [0, -8, 6, -3, 0],
                  }}
                  exit={{ x: 100, scale: 0.85 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 16,
                    delay: 0.15,
                  }}
                  className="w-[280px] h-[380px] md:w-[420px] md:h-[580px]"
                >
                  <img
                    src={displayImage}
                    alt={title}
                    className="w-full h-full object-cover rounded-[40px] shadow-2xl pointer-events-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}