"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { BLUR_DATA_URL, INSTAGRAM_URL } from "@/lib/constants";

const feedImages = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80",
    alt: "Projeto arquitetônico e engenharia BRIX",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80",
    alt: "Acompanhamento estrutural de obra BRIX",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80",
    alt: "Acabamento de alto padrão em interiores",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    alt: "Fachada residencial moderna BRIX",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    alt: "Equipe técnica em canteiro de obras",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    alt: "Entrega de empreendimento pronto para morar",
  },
];

export function Social() {
  return (
    <section id="social" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-900/10 border border-primary-900/15 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4">
              Diário de Obras & Comunidade
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight">
              Acompanhe o diário de obras
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Siga nosso Instagram oficial e veja de perto cada etapa dos
              nossos empreendimentos: da fundação à entrega das chaves, com
              transparência e rigor técnico.
            </p>

            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-900 flex items-center justify-center text-white shadow-md">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-primary-900">@construtorabrix</h3>
                <p className="text-sm text-slate-500">
                  Atualizações semanais direto dos canteiros
                </p>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-500 text-white font-semibold text-sm hover:bg-accent-600 transition-all active:scale-95 shadow-md shadow-accent-500/25"
            >
              <InstagramIcon className="w-4 h-4" />
              Seguir @construtorabrix
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="bg-neutral-light rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-primary-900 flex items-center justify-center text-white text-xs font-bold">
                    B
                  </div>
                  <span className="text-sm font-bold text-primary-900">
                    @construtorabrix
                  </span>
                </div>
                <span className="text-xs font-medium text-accent-500">
                  Instagram Oficial
                </span>
              </div>

              <div className="p-5">
                <div className="aspect-video bg-primary-900 rounded-xl overflow-hidden mb-3 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80"
                    alt="Bastidores de engenharia e obras da Construtora BRIX"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {feedImages.map((item) => (
                    <a
                      key={item.src}
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-square rounded-lg overflow-hidden bg-slate-200 group"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 33vw, 15vw"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
