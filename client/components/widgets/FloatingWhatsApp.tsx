"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { WHATSAPP_URL } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-primary-900 text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Fale conosco
      </span>
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-accent-500 hover:bg-accent-600 text-white flex items-center justify-center shadow-xl shadow-accent-500/35 ring-4 ring-white transition-colors"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </motion.div>
    </a>
  );
}
