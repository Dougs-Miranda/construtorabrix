"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_URL = "https://instagram.com/construtorabrix";

const links = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre a BRIX", href: "#sobre" },
  { name: "Empreendimentos", href: "#empreendimentos" },
  { name: "Sustentabilidade", href: "#sustentabilidade" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-primary-900/90 backdrop-blur-sm"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-xl tracking-tighter">B</span>
            </div>
            <span className="font-bold text-2xl text-primary-900 tracking-tight">BRIX</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/40"
            >
              <WhatsAppIcon className="w-4 h-4" /> Fale no WhatsApp
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-accent-500"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-white/95 backdrop-blur-md px-6 pb-6"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-primary-900"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-accent-500 text-white text-base font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/40"
                  >
                    <WhatsAppIcon className="w-5 h-5" /> Fale no WhatsApp
                  </a>
                </div>
                <div className="pt-4 flex items-center gap-3 text-slate-500 text-sm">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary-900 transition-colors">
                    <InstagramIcon className="w-4 h-4" /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="md:hidden h-20" />
    </>
  );
}