"use client";
import { trackEvent } from "@/lib/analytics";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text: string;
  prefilledMessage: string;
  variant?: "outline" | "filled";
  className?: string;
}

export function WhatsAppButton({
  text,
  prefilledMessage,
  variant = "outline",
  className = "",
}: WhatsAppButtonProps) {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: text })}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
        variant === "filled"
          ? "bg-green text-white hover:bg-green-dark"
          : "border border-brown-light/40 text-brown hover:border-brown hover:text-text"
      } ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {text}
    </a>
  );
}
