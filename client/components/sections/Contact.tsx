"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import {
  COMPANY_ADDRESS,
  CONTACT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/constants";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contatoInfo = [
  { icon: MapPin, title: "Endereço", text: COMPANY_ADDRESS },
  { icon: Phone, title: "Telefone / WhatsApp", text: WHATSAPP_DISPLAY },
  { icon: Mail, title: "E-mail", text: CONTACT_EMAIL },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Informe seu nome completo.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Informe um e-mail válido.";
    }
    if (form.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Informe um telefone ou WhatsApp com DDD.";
    }
    if (form.message.trim().length < 5) {
      nextErrors.message = "Descreva brevemente seu interesse.";
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setForm(initialForm);
    }, 800);
  };

  if (isSent) {
    return (
      <section id="contato" className="py-24 bg-neutral-light">
        <div
          className="max-w-3xl mx-auto px-6 text-center"
          aria-live="polite"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-border"
          >
            <div className="w-16 h-16 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 mx-auto mb-6">
              <Send className="w-8 h-8" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-primary-900 mb-3">
              Mensagem enviada com sucesso!
            </h2>
            <p className="text-slate-600 mb-8">
              Obrigado pelo contato. Nossa equipe comercial e técnica retornará
              em breve.
            </p>
            <button
              type="button"
              onClick={() => setIsSent(false)}
              className="px-6 py-3 rounded-xl bg-primary-900 text-white text-sm font-semibold hover:bg-primary-800 transition-all active:scale-95"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-900/10 border border-primary-900/15 text-primary-900 text-xs font-semibold uppercase tracking-wider mb-4">
            Fale Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 tracking-tight">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário para receber uma apresentação ou fale
            diretamente com nossa equipe pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-sm space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-neutral-dark"
                >
                  Nome completo
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-neutral-dark focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-neutral-dark"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-neutral-dark focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-phone"
                className="block text-sm font-medium text-neutral-dark"
              >
                Telefone / WhatsApp
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-neutral-dark focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                placeholder="(11) 99999-9999"
              />
              {errors.phone && (
                <p className="text-xs text-red-600">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-neutral-dark"
              >
                Mensagem / Interesse
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-neutral-dark focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Conte sobre seu projeto ou empreendimento de interesse"
              />
              {errors.message && (
                <p className="text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-900 text-white font-bold text-base hover:bg-primary-800 transition-all active:scale-95 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary-900 mb-6">
                Informações de atendimento
              </h3>
              <div className="space-y-5">
                {contatoInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-900/10 flex items-center justify-center text-primary-900 shrink-0">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-900 rounded-2xl p-8 text-white shadow-md">
              <h3 className="text-xl font-bold mb-2">Prefere WhatsApp?</h3>
              <p className="text-slate-300 text-sm mb-6">
                Converse agora com um especialista da Construtora BRIX para
                tirar dúvidas sobre plantas, obras e investimentos.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-accent-500 text-white font-bold text-base hover:bg-accent-600 transition-all active:scale-95 shadow-lg shadow-accent-500/30"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Conversar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
