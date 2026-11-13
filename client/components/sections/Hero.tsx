"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { BLUR_DATA_URL } from "@/lib/constants";

const areasDeAtuacao = [
  "Construção civil",
  "Loteamentos",
  "Energia sustentável",
  "Agronegócio",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-primary-900 text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85"
        alt="Paisagem rural ilustrativa"
        fill
        sizes="100vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="object-cover"
        priority
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary-900/65 via-transparent to-primary-900/20"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-[1.3fr_0.7fr] lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-200"
          >
            <span className="h-px w-9 bg-accent-500" aria-hidden="true" />
            Um grupo, múltiplas frentes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Preparamos terreno para o{" "}
            <span className="text-accent-500">amanhã</span>. Construímos valor
            que permanece.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-9 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
          >
            Da construção civil à energia limpa e à inovação no campo, conectamos
            diferentes frentes para contribuir com um futuro responsável e
            duradouro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#empresas"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-4 font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
            >
              Conheça nossas empresas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-xl border border-white/35 px-6 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Nossa história
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          aria-label="Áreas de atuação da BRIX"
          className="justify-self-start rounded-2xl border border-white/20 bg-primary-900/45 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:justify-self-end"
        >
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
            Áreas de atuação
          </h2>
          <ul className="space-y-4">
            {areasDeAtuacao.map((area, index) => (
              <li
                key={area}
                className="flex items-center gap-4 border-b border-white/15 pb-4 last:border-0 last:pb-0"
              >
                <span className="font-mono text-sm text-accent-500">
                  0{index + 1}
                </span>
                <span className="text-lg font-medium text-white sm:text-xl">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para conhecer a BRIX"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:block"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </a>
      <span className="absolute bottom-4 right-6 z-10 text-[10px] tracking-wide text-white/50">
        Imagem ilustrativa
      </span>
    </section>
  );
}
