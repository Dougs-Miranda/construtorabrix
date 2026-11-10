"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, Sun, Droplets, Recycle, RefreshCw } from "lucide-react";

const praticas = [
  {
    icon: Leaf,
    title: "Materiais Sustentáveis",
    description: "Uso de materiais de construção com baixo impacto ambiental e certificação de origem responsável.",
  },
  {
    icon: Zap,
    title: "Eficiência Energética",
    description: "Sistemas de iluminação LED e automação que reduzem o consumo de energia em até 30%.",
  },
  {
    icon: Sun,
    title: "Aproveitamento Solar",
    description: "Projetos orientados para maximizar a iluminação natural e reduzir o uso de energia artificial.",
  },
  {
    icon: Droplets,
    title: "Reuso de Água",
    description: "Sistemas de captação de água da chuva para irrigação e áreas comuns dos empreendimentos.",
  },
  {
    icon: Recycle,
    title: "Gestão de Resíduos",
    description: "Separação e descarte correto de resíduos de obra, com foco na reciclagem e reutilização.",
  },
  {
    icon: RefreshCw,
    title: "Certificações Verdes",
    description: "Compromisso com normas ambientais e certificações que atestam a sustentabilidade dos projetos.",
  },
];

export function Sustainability() {
  return (
    <section id="sustentabilidade" className="py-24 bg-primary-900 text-slate-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-500 text-xs font-semibold uppercase tracking-wider mb-4">
            Sustentabilidade
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Compromisso com o futuro
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Construímos com responsabilidade ambiental, unindo tecnologia e cuidado
            com o planeta em cada detalhe dos nossos empreendimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {praticas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center text-accent-500 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
