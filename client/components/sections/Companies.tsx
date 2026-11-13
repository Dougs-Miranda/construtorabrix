"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Company {
  name: string;
  description: string;
  image: string;
}

const companies: Company[] = [
  {
    name: "Besa Energia",
    description:
      "Soluções em energia renovável com foco em inovação e responsabilidade ambiental. Um investimento em eficiência hoje para garantir energia limpa amanhã.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Vivi Queiroz Agro",
    description:
      "Frente dedicada ao agronegócio. Investimos em produção rural sustentável, tecnologia no campo e respeito ao meio ambiente para impulsionar a produtividade e o desenvolvimento consciente.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Bxtren Empreendimentos Imobiliários",
    description:
      "Habitação econômica planejada, com qualidade e infraestrutura. Parceira do Programa Minha Casa Minha Vida, entrega moradias acessíveis que transformam o dia a dia de milhares de famílias.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "SB Empreendimentos Imobiliários",
    description:
      "Empreendimentos de alto padrão que unem sofisticação, inovação e responsabilidade. Cada projeto é pensado para integrar soluções sustentáveis desde a concepção até a entrega.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
];

export function Companies() {
  return (
    <section
      id="empresas"
      className="relative overflow-hidden bg-neutral-light py-24 text-primary-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600">
            Grupo BRIX
          </div>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Conheça Nossas Empresas
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Conheça as empresas que fazem parte do grupo BRIX e as soluções que
            cada uma oferece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {companies.map((company, index) => (
            <motion.article
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30 hover:shadow-xl"
            >
              <div className="relative aspect-[16/7] overflow-hidden bg-slate-200">
                <Image
                  src={company.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-primary-900/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  Foto ilustrativa
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-primary-900">
                  {company.name}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {company.description}
                </p>
                <a
                  href="#contato"
                  className="mt-8 inline-flex min-w-56 items-center justify-center rounded-xl bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-md shadow-accent-500/20 transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
                >
                  Saiba mais
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
