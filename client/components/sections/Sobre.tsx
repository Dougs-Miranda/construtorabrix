"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, Clock, Building2, Leaf } from "lucide-react";

const diferencais = [
  {
    icon: ShieldCheck,
    title: "Rigor Técnico",
    description: "Projetos executados com precisão milimétrica e acompanhamento técnico em todas as etapas da obra.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Práticas construtivas sustentáveis com materiais de baixo impacto ambiental e eficiência energética.",
  },
  {
    icon: Building2,
    title: "Acabamento Alto Padrão",
    description: "Materiais nobres e acabamentos refinados que valorizam cada espaço e garantem durabilidade.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Compromisso com prazos de entrega. Sua entrega no prazo é a nossa prioridade.",
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description: "Soluções de engenharia moderna para redução de consumo e maior economia ao morador.",
  },
  {
    icon: Users,
    title: "Time Especializado",
    description: "Engenheiros, arquitetos e mestres de obra altamente qualificados e comprometidos com a excelência.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/10 border border-primary-900/20 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Sobre a BRIX
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight"
          >
            Engenharia que constrói confiança
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Fundada com o compromisso de entregar mais do que imóveis, a Construtora BRIX
            combina inovação arquitetônica, responsabilidade socioambiental e excelência
            construtiva em cada empreendimento.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferencais.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border border-border p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
