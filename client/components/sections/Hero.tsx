"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, CheckCircle, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import {
  BLUR_DATA_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";

interface MetricBadge {
  value: string;
  label: string;
  icon: typeof Award;
}

const metrics: MetricBadge[] = [
  { value: "150 mil+", label: "M² construídos", icon: Award },
  { value: "100%", label: "Entregas no prazo", icon: Clock },
  { value: "ISO 9001", label: "Qualidade certificada", icon: CheckCircle },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden bg-primary-900"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Empreendimento Construtora BRIX - Arquitetura contemporânea de alto padrão"
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
          priority
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-primary-900/90 via-primary-900/75 to-primary-900/95"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-500/15 border border-accent-500/30 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
              </span>
              Engenharia de Alto Padrão
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Engenharia de precisão,{" "}
              <span className="text-accent-500">patrimônio</span> para gerações.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              Solidez construtiva, sustentabilidade e acabamento de alto padrão.
              Projetos que unem inovação arquitetônica, eficiência energética e
              pontualidade rigorosa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5"
            >
              <a
                href="#empreendimentos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-500 text-white font-bold text-base hover:bg-accent-600 transition-all active:scale-95 shadow-lg shadow-accent-500/30 w-full sm:w-auto"
              >
                Conheça os Empreendimentos
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base hover:bg-white/20 transition-all active:scale-95 w-full sm:w-auto"
              >
                Sobre Nós
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-accent-500 flex items-center justify-center shrink-0 shadow-md shadow-accent-500/30">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg leading-snug">
                    Fale com nosso time
                  </h2>
                  <p className="text-slate-300 text-sm">
                    Atendimento técnico e comercial
                  </p>
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-accent-500 text-white font-bold text-base hover:bg-accent-600 transition-all active:scale-95 shadow-lg shadow-accent-500/30"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Iniciar conversa no WhatsApp
              </a>
              <p className="text-slate-300 text-xs text-center mt-3">
                Ou ligue: {WHATSAPP_DISPLAY}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating metric badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-4 py-3.5 rounded-xl border border-white/15"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center shrink-0">
                <metric.icon className="w-5 h-5 text-accent-500" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-bold text-lg leading-tight truncate">
                  {metric.value}
                </div>
                <div className="text-slate-300 text-xs uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
