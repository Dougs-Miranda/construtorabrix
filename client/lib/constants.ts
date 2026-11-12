export const WHATSAPP_NUMBER = "5511999999999";
export const WHATSAPP_DISPLAY = "+55 (11) 99999-9999";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://instagram.com/construtorabrix";
export const LINKEDIN_URL = "https://linkedin.com/company/construtorabrix";
export const CONTACT_EMAIL = "contato@construtorabrix.com.br";
export const COMPANY_ADDRESS = "Av. das Nações Unidas, 1234 - São Paulo, SP";

export function getWhatsAppLink(message?: string): string {
  if (!message) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

/**
 * Lightweight SVG blur placeholder for next/image to eliminate CLS and provide smooth loading.
 */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwRjE3MkEiLz48L3N2Zz4=";
