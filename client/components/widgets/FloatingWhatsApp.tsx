"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

const WHATSAPP_URL = "https://wa.me/5511999999999";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Fale pelo WhatsApp"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-accent-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/40 ring-4 ring-white ring-offset-2"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: 20, pointerEvents: "none" }}
        animate={{ opacity: 1, x: 0, pointerEvents: "auto" }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-[110px] right-0 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium whitespace-nowrap shadow-lg"
      >
        Fale conosco
      </motion.span>
    </a>
  );
}
