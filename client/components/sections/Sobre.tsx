"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Building2,
  Leaf,
  type LucideIcon,
} from "lucide-react";

interface Diferencial {
  icon: LucideIcon;
  title: string;
  description: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: ShieldCheck,
    title: "Rigor Técnico",
    description:
      "Projetos executados com precisão milimétrica e acompanhamento de engenharia em todas as etapas da obra.",
  },
  {
    icon: Leaf,
    title: "Engenharia Sustentável",
    description:
      "Práticas construtivas sustentáveis com materiais certificados de baixo impacto ambiental.",
  },
  {
    icon: Building2,
    title: "Acabamento Alto Padrão",
    description:
      "Materiais nobres e acabamentos refinados que valorizam cada espaço e garantem durabilidade.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description:
      "Cronograma rigoroso e transparência total. Sua entrega no prazo é o nosso compromisso.",
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description:
      "Soluções modernas de iluminação, automação e conforto térmico para redução de consumo.",
  },
  {
    icon: Users,
    title: "Time Especializado",
    description:
      "Engenheiros, arquitetos e mestres de obra altamente qualificados e comprometidos com a excelência.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-900/10 border border-primary-900/15 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Sobre a BRIX
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight">
            Engenharia que constrói confiança
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fundada com o propósito de entregar mais do que imóveis, a
            Construtora BRIX combina inovação arquitetônica, responsabilidade
            socioambiental e excelência construtiva em cada empreendimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-5">
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
