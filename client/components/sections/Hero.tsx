"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Clock, CheckCircle, Award } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Hero() {
  const WHATSAPP_URL = "https://wa.me/5511999999999";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080/png?text=Construtora+BRIX+Empreendimento+de+Alto+Padrao&font=inter&bg=1A1A1A&txtColor=007AFF"
          alt="Empreendimento BRIX - Obra de alto padrão"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-[#1A1A1A]/90" />

      <div className="absolute top-6 left-6 z-20 flex flex-col gap-3 sm:flex-row sm:gap-4 w-full max-w-xs sm:max-w-none px-4 sm:px-0">
        <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <Award className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-white font-bold text-sm sm:text-base truncate">150k+</div>
            <div className="text-slate-300 text-[10px] sm:text-xs uppercase tracking-wider leading-none">M² construídos</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-white font-bold text-sm sm:text-base truncate">100%</div>
            <div className="text-slate-300 text-[10px] sm:text-xs uppercase tracking-wider leading-none">entregas no prazo</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-white font-bold text-sm sm:text-base truncate">ISO 9001</div>
            <div className="text-slate-300 text-[10px] sm:text-xs uppercase tracking-wider leading-none">qualidade certificada</div>
          </div>
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-500 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            Novo Empreendimento em Lançamento
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight"
          >
            Engenharia de precisão,<br />
            patrimônio para gerações.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg"
          >
            Solidez construtiva, sustentabilidade e acabamento de alto padrão.
            Construímos empreendimentos que unem inovação arquitetônica e
            responsabilidade com o meio ambiente.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#empreendimentos"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-accent-500 text-white font-bold text-base hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/30 w-full sm:w-auto"
            >
              Conheça os Empreendimentos <Play className="w-4 h-4" />
            </a>
            <a
              href="#sobre"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base hover:bg-white/20 transition-all active:scale-95 w-full sm:w-auto"
            >
              Sobre a BRIX
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-accent-500 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Fale com nosso time</h3>
                <p className="text-slate-300 text-sm">Atendimento especializado</p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-accent-500 text-white font-bold text-base hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/40"
            >
              <WhatsAppIcon className="w-4 h-4" /> Iniciar conversa no WhatsApp
            </a>
            <p className="text-slate-400 text-xs text-center mt-2">
              Ou ligue: +55 (11) 9999-9999
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
