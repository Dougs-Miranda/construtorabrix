"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants";

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre a BRIX", href: "#sobre" },
  { name: "Empreendimentos", href: "#empreendimentos" },
  { name: "Sustentabilidade", href: "#sustentabilidade" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
        <Link
          href="#inicio"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-xl"
          aria-label="Construtora BRIX - Ir para o início"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0 transition-transform duration-300 group-hover:scale-105"
          >
            <rect width="40" height="40" rx="10" fill="#0F172A" />
            <path d="M11 29V11H21.5C24.8 11 27 12.8 27 15.6C27 17.5 25.9 19 24.1 19.6C26.4 20.2 28 22 28 24.4C28 27.3 25.6 29 22 29H11ZM15.5 18.2H20.8C22.1 18.2 22.9 17.4 22.9 16.3C22.9 15.2 22.1 14.5 20.8 14.5H15.5V18.2ZM15.5 25.5H21.4C22.9 25.5 23.8 24.7 23.8 23.5C23.8 22.3 22.9 21.5 21.4 21.5H15.5V25.5Z" fill="white" />
            <rect x="27" y="11" width="4" height="4" rx="1" fill="#EA580C" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-xl text-primary-900 tracking-tight">
              BRIX
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Construtora
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-dark hover:text-accent-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md px-1 py-0.5"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-500 text-white text-sm font-semibold hover:bg-accent-600 transition-all active:scale-95 shadow-md shadow-accent-500/25"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Fale no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-xl text-primary-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
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
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md px-6 pb-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-3 pt-4" aria-label="Navegação mobile">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral-dark hover:text-accent-500 py-1.5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl bg-accent-500 text-white text-sm font-bold hover:bg-accent-600 transition-all active:scale-95 shadow-md shadow-accent-500/25"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Fale no WhatsApp
                </a>
              </div>
              <div className="pt-2 flex items-center gap-3 text-slate-500 text-sm">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary-900 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" /> @construtorabrix
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
