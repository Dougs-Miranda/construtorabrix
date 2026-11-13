import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary-900 text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="mb-5 inline-flex rounded-md bg-white px-2 py-1">
              <Image
                src="/brix-logo.png"
                alt="BRIX"
                width={582}
                height={146}
                className="h-auto w-40"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Engenharia de precisão, solidez construtiva e compromisso com o
              futuro. Construímos patrimônios com responsabilidade e excelência.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-5">Institucional</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#inicio"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sobre"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Sobre a BRIX
                  </Link>
                </li>
                <li>
                  <Link
                    href="#empresas"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Nossas Empresas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#empreendimentos"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Empreendimentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#sustentabilidade"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Sustentabilidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5">Atendimento</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400">
                    {WHATSAPP_DISPLAY}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400">
                    {CONTACT_EMAIL}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400">
                    São Paulo, SP - Brasil
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5">Redes Sociais</h4>
              <ul className="space-y-3 text-sm">
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

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 text-center md:text-left">
            © 2026 Construtora BRIX Engenharia e Incorporação LTDA.
            CNPJ 00.000.000/0001-00. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-500 transition-colors"
              aria-label="Instagram da Construtora BRIX"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-500 transition-colors"
              aria-label="WhatsApp da Construtora BRIX"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent-500 transition-colors"
              aria-label="LinkedIn da Construtora BRIX"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
