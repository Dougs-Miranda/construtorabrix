"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  if (isSent) {
    return (
      <section id="contato" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-500 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            Mensagem enviada
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-border"
          >
            <div className="w-16 h-16 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 mx-auto mb-6">
              <Send className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Mensagem enviada!</h2>
            <p className="text-slate-600 mb-8">
              Obrigado pelo contato. Nossa equipe entrará em contato em breve.
            </p>
            <button
              onClick={() => setIsSent(false)}
              className="px-6 py-2 rounded-xl bg-primary-900 text-white text-sm font-semibold hover:bg-primary-800 transition-colors"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  const contato = [
    { icon: MapPin, title: "Endereço", text: "Av. das Nações Unidas, 1234 - São Paulo, SP" },
    { icon: Phone, title: "Telefone", text: "+55 (11) 9999-9999" },
    { icon: Mail, title: "E-mail", text: "contato@construtorabrix.com.br" },
  ];

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/10 border border-primary-900/20 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Fale conosco
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário ou entre em contato diretamente pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Nome completo</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">E-mail</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">WhatsApp / Telefone</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all" placeholder="+55 (11) 9999-9999" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Mensagem / Interesse</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:ring-2 focus:ring-primary-900 focus:border-transparent outline-none transition-all" placeholder="Conte sobre seu projeto ou empreendimento de interesse" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary-900 text-white font-bold text-lg hover:bg-primary-800 transition-all active:scale-95 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-border">
              <h3 className="text-xl font-bold text-primary-900 mb-6">Informações de contato</h3>
              {contato.map((item) => (
                <div key={item.title} className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-900/10 flex items-center justify-center text-primary-900 shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Prefer WhatsApp?</h3>
              <p className="text-slate-300 mb-6">
                Fale diretamente com nossa equipe de atendimento.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-accent-500 text-white font-bold text-lg hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/40"
              >
                <WhatsAppIcon className="w-5 h-5" /> Conversar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 2.738.926 5.242 2.44 7.177.603.766 1.345 1.45 2.256 1.955l.09.049c.155.084 8.324 4.16 8.324 4.16s6.28-2.693 8.574-5.594c1.138-1.438 1.435-2.346 1.457-2.397l.002-.007c.104-.252-.037-1.144-1.318-2.347-.29-.272-8.219-6.655-8.219-6.655l-.085-.047c-.98-.55-1.73-1.392-1.934-1.53-.216-.146-5.54-3.646-5.834-3.761-.29-.114-.613-.071-.896.178-.284.251-.382 1.047-.091 1.668l.003.007c.148.315 2.003 2.477 4.105 4.97 1.591 1.886 2.423 2.81 2.423 2.81s.444-.496.467-.517c.118-.112.145-.248.035-.495-.195-.439-1.667-3.296-1.947-3.772-.281-.476-.489-1.118-.415-1.403l.008-.029c.116-.437 1.348-1.269 2.684-.575.669.348 1.136.708 1.136.708s-.593 1.553-1.123 2.641c-.267.548-.74 1.054-1.147 1.377-.406.324-3.798 3.077-5.037 4.092l-.039.031c-.31.256-.593.429-.593.429s-.377-.326-.391-.336c-.027-.018-2.456-1.86-2.456-1.86s-1.218-1.644-1.263-2.52c-.044-.864-.073-1.488-.073-2.078 0-6.626 5.373-12 12-12" />
    </svg>
  );
}