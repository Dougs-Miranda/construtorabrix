"use client";

import { motion } from "framer-motion";
import {
  ProjectCard,
  type Project,
} from "@/components/sections/ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    name: "Residencial BRIX Alto Pinheiros",
    location: "Pinheiros, São Paulo - SP",
    status: "Lançamento",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    area: "120 m²",
    quartos: "3",
    vagas: "2",
  },
  {
    id: "2",
    name: "Residencial BRIX Jardins",
    location: "Jardins, São Paulo - SP",
    status: "Em Obras",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    area: "95 m²",
    quartos: "2",
    vagas: "1",
  },
  {
    id: "3",
    name: "Residencial BRIX Ibirapuera",
    location: "Moema, São Paulo - SP",
    status: "Pronto para Morar",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    area: "150 m²",
    quartos: "4",
    vagas: "3",
  },
];

export function ProjectsGrid() {
  return (
    <section id="empreendimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-900/10 border border-primary-900/15 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Vitrine de Empreendimentos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight">
            Conheça nossos empreendimentos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Projetos exclusivos em localizações privilegiadas de São Paulo,
            projetados para unir conforto, valorização e alto padrão.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
