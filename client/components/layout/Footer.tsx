"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const INSTAGRAM_URL = "https://instagram.com/construtorabrix";
const WHATSAPP_URL = "https://wa.me/5511999999999";
const LINKEDIN_URL = "https://linkedin.com/company/construtorabrix";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-slate-300 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl tracking-tighter">B</span>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">BRIX</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Engenharia de precisão, solidez construtiva e compromisso com o futuro.
              Construímos patrimônios com responsabilidade e excelência.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-3 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-6">Institucional</h4>
              <ul className="space-y-3">
                <li><Link href="#sobre" className="text-slate-400 hover:text-white transition-colors">Sobre a BRIX</Link></li>
                <li><Link href="#empreendimentos" className="text-slate-400 hover:text-white transition-colors">Empreendimentos</Link></li>
                <li><Link href="#sustentabilidade" className="text-slate-400 hover:text-white transition-colors">Sustentabilidade</Link></li>
                <li><Link href="#contato" className="text-slate-400 hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Atendimento</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-slate-400 mt-0.5" />
                  <span className="text-sm text-slate-400">+55 (11) 9999-9999</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-slate-400 mt-0.5" />
                  <span className="text-sm text-slate-400">contato@construtorabrix.com.br</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                  <span className="text-sm text-slate-400">São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Redes Sociais</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" /> @construtorabrix
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" /> Construtora BRIX
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            Construtora BRIX Engenharia e Incorporação LTDA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
