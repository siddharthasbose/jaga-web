export const WA_DEFAULT_MESSAGE =
  "Hi Sumira, I'd like to chat about home setup for my parent.";

export const WA_HELP_CHOOSE_MESSAGE =
  "Hi Sumira, I'd like help choosing the right package for my parent.";

export function waPackageMessage(packageName: string): string {
  return `Hi Sumira, I'm interested in the ${packageName} package.`;
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6589499681";

export function getWhatsAppUrl(prefilled?: string): string {
  if (!prefilled) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(prefilled)}`;
}
