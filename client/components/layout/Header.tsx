"use client";

import Link from "next/link";
import Image from "next/image";
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
  { name: "Nossas Empresas", href: "#empresas" },
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
          className="flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          aria-label="Construtora BRIX - Ir para o início"
        >
          <Image
            src="/brix-logo.png"
            alt="BRIX"
            width={582}
            height={146}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-5" aria-label="Navegação principal">
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
          className="xl:hidden p-2 rounded-xl text-primary-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
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
            className="xl:hidden border-t border-border bg-white/95 backdrop-blur-md px-6 pb-6 overflow-hidden"
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
