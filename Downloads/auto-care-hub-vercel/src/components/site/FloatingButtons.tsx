import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      <a
        href="tel:9843777729"
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-40 flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-primary text-primary-foreground shadow-elevated animate-pulse-ring-orange hover:scale-110 transition-transform"
      >
        <Phone size={24} />
      </a>
      <a
        href="https://wa.me/919843777729"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp us"
        className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-whatsapp text-white shadow-elevated animate-pulse-ring hover:scale-110 transition-transform"
        style={{ width: 60, height: 60 }}
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}
