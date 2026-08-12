import { MessageCircle } from "lucide-react";
import { clinic, wazeUrl, whatsappUrl } from "@/lib/site-data";
import { WazeIcon } from "@/components/site/waze-icon";

export function WhatsAppFloat() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={wazeUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#33CCFF] px-4 py-3.5 text-sm font-semibold text-[#0B1B33] shadow-lg transition-[transform,box-shadow] duration-150 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
        aria-label="Como chegar no Waze"
        title="Como chegar no Waze"
      >
        <WazeIcon className="size-5" />
        <span className="hidden sm:inline">Waze</span>
      </a>
      <a
        href={whatsappUrl(clinic.phones.reception.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-sm font-semibold text-white shadow-lg transition-[transform,box-shadow] duration-150 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
        aria-label="Agendar pelo WhatsApp"
      >
        <MessageCircle className="size-5" aria-hidden />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}