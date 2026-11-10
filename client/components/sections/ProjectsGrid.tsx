"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Bed, Ruler, ArrowRight } from "lucide-react";

type Status = "Em Obras" | "Lançamento" | "Pronto para Morar";

const statusColors: Record<string, string> = {
  "Em Obras": "bg-accent-500/10 border-accent-500/20 text-accent-500",
  Lançamento: "bg-accent-500/10 border-accent-500/20 text-accent-500",
  "Pronto para Morar": "bg-accent-500/10 border-accent-500/20 text-accent-500",
};

interface Project {
  id: string;
  name: string;
  location: string;
  status: Status;
  image: string;
  area: string;
  quartos: string;
  vagas: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Residencial BRIX Alto Pinheiros",
    location: "Pinheiros, São Paulo - SP",
    status: "Lançamento",
    image: "https://placehold.co/800x600/png?text=Residencial+BRIX+Alto+Pinheiros&font=inter&bg=1A1A1A&txtColor=007AFF",
    area: "120 m²",
    quartos: "3",
    vagas: "2",
  },
  {
    id: "2",
    name: "Residencial BRIX Jardins",
    location: "Jardins, São Paulo - SP",
    status: "Em Obras",
    image: "https://placehold.co/800x600/png?text=Residencial+BRIX+Jardins&font=inter&bg=1A1A1A&txtColor=007AFF",
    area: "95 m²",
    quartos: "2",
    vagas: "1",
  },
  {
    id: "3",
    name: "Residencial BRIX Ibirapuera",
    location: "Moema, São Paulo - SP",
    status: "Pronto para Morar",
    image: "https://placehold.co/800x600/png?text=Residencial+BRIX+Ibirapuera&font=inter&bg=1A1A1A&txtColor=007AFF",
    area: "150 m²",
    quartos: "4",
    vagas: "3",
  },
];

export function ProjectsGrid() {
  return (
    <section id="empreendimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/10 border border-primary-900/20 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Vitrine de Empreendimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight">
            Conheça nossos empreendimentos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Projetos exclusivos em localizações privilegiadas de São Paulo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden border border-border bg-white shadow-sm transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={project.id === "1"}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className={cn("px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-tighter shadow-sm", statusColors[project.status])}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary-900 mb-1">{project.name}</h3>
                <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-1 text-slate-600 text-sm">
                    <Ruler className="w-3 h-3" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600 text-sm">
                    <Bed className="w-3 h-3" />
                    <span>{project.quartos} suítes</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600 text-sm">
                    <span>{project.vagas} vagas</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/5511999999999?text=Tenho interesse no empreendimento ${project.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl bg-primary-900 text-white text-sm font-semibold hover:bg-primary-800 transition-colors active:scale-95"
                >
                  Solicitar apresentação <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}