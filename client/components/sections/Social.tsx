"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/ui/SocialIcons";

const INSTAGRAM_URL = "https://instagram.com/construtorabrix";

export function Social() {
  return (
    <section id="social" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/10 border border-primary-900/20 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4">
              Prova Social
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight">
              Acompanhe o diário de obras
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Siga nosso Instagram oficial e veja de perto cada etapa dos nossos
              empreendimentos: do lançamento à entrega das chaves.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-900 flex items-center justify-center text-white shadow-lg">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-primary-900">@construtorabrix</h3>
                <p className="text-sm text-slate-600">Siga no Instagram</p>
              </div>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-900 text-white font-semibold text-sm hover:bg-primary-800 transition-colors active:scale-95 shadow-lg"
            >
              <InstagramIcon className="w-4 h-4" /> Seguir no Instagram
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-[3px] mask mask-squish" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-7 h-7 rounded-full bg-slate-200" />
                  <div className="w-4 h-4 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="flex-1 h-6 rounded bg-slate-200" />
              </div>
              <div className="p-6">
                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden mb-4 relative">
                  <Image
                    src="https://placehold.co/800x600/png?text=Construtora+BRIX+Instagram&font=inter&bg=1A1A1A&txtColor=007AFF"
                    alt="Preview do Instagram"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-slate-100 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
