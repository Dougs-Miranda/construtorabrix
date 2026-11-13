"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Bed, Ruler, Car, ArrowRight } from "lucide-react";
import { BLUR_DATA_URL, getWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export type ProjectStatus = "Em Obras" | "Lançamento" | "Pronto para Morar";

export interface Project {
  id: string;
  name: string;
  location: string;
  status: ProjectStatus;
  image: string;
  area: string;
  quartos: string;
  vagas: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusStyles: Record<ProjectStatus, string> = {
  Lançamento: "bg-accent-500 text-white border-accent-600/30",
  "Em Obras": "bg-primary-800 text-white border-primary-900/30",
  "Pronto para Morar": "bg-slate-700 text-white border-slate-800/30",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-900">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-10">
          <span
            className={cn(
              "inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md border backdrop-blur-sm",
              statusStyles[project.status]
            )}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-primary-900 mb-1.5 tracking-tight">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
          <MapPin className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
          <span>{project.location}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-neutral-light border border-border/70 mb-5 text-xs sm:text-sm text-neutral-dark">
          <div className="flex items-center gap-1.5">
            <Ruler className="w-3.5 h-3.5 text-primary-800 shrink-0" aria-hidden="true" />
            <span>{project.area}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed className="w-3.5 h-3.5 text-primary-800 shrink-0" aria-hidden="true" />
            <span>{project.quartos} suítes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-primary-800 shrink-0" aria-hidden="true" />
            <span>{project.vagas} vagas</span>
          </div>
        </div>

        <a
          href={getWhatsAppLink(
            `Olá! Tenho interesse no empreendimento ${project.name}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-primary-900 text-white text-sm font-semibold hover:bg-primary-800 transition-all active:scale-95"
        >
          Solicitar apresentação
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
