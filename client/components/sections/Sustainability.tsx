"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Zap,
  Sun,
  Droplets,
  Recycle,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

interface Pratica {
  icon: LucideIcon;
  title: string;
  description: string;
}

const praticas: Pratica[] = [
  {
    icon: Leaf,
    title: "Materiais Sustentáveis",
    description:
      "Uso de insumos de construção com baixo impacto ambiental e certificação de origem responsável.",
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description:
      "Sistemas de iluminação LED e automação predial que reduzem o consumo de energia em até 30%.",
  },
  {
    icon: Sun,
    title: "Energia & Aproveitamento Solar",
    description:
      "Projetos orientados para maximizar a iluminação natural e infraestrutura pronta para energia fotovoltaica.",
  },
  {
    icon: Droplets,
    title: "Reuso de Água",
    description:
      "Sistemas de captação e tratamento de água da chuva para irrigação e limpeza das áreas comuns.",
  },
  {
    icon: Recycle,
    title: "Gestão de Resíduos",
    description:
      "Rastreabilidade, separação e destinação correta de resíduos de obra com foco em reciclagem.",
  },
  {
    icon: RefreshCw,
    title: "Certificações Verdes",
    description:
      "Compromisso com normas ambientais e selos de desempenho que atestam a sustentabilidade dos projetos.",
  },
];

export function Sustainability() {
  return (
    <section
      id="sustentabilidade"
      className="py-24 bg-primary-900 text-slate-200 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 -right-20 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-500/15 border border-accent-500/30 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Sustentabilidade & Tecnologia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Compromisso com o futuro
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Construímos com responsabilidade ambiental, unindo tecnologia de
            ponta, eficiência energética e cuidado com o planeta em cada detalhe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {praticas.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center text-accent-500 mb-5">
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
