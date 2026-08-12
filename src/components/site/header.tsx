import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { clinic, nav, wazeUrl, whatsappUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WazeIcon } from "@/components/site/waze-icon";

const headerNav = nav.filter((item) => item.href !== "/#trabalhe-conosco");

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-250",
        scrolled
          ? "border-border bg-bg-elevated/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-bg/90 backdrop-blur-sm",
      )}
    >
      <div className="grid grid-cols-2 md:hidden">
        <a
          href={wazeUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 bg-[#33CCFF] px-3 text-sm font-semibold text-[#0B1B33]"
          aria-label="Como chegar na clínica pelo Waze"
        >
          <WazeIcon className="size-5" />
          Waze
        </a>
        <a
          href={whatsappUrl(clinic.phones.reception.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 bg-whatsapp px-3 text-sm font-semibold text-white"
          aria-label="Falar no WhatsApp da clínica"
        >
          <MessageCircle className="size-5" aria-hidden />
          WhatsApp
        </a>
      </div>
      <div className="hidden border-b border-border bg-bg-ink text-fg-on-ink md:block">
        <div className="container-site flex min-h-12 items-center justify-between gap-4 py-2.5">
          <p className="text-base font-semibold tracking-tight text-fg-on-ink md:text-lg">
            {clinic.locationNote}
            <span className="mx-2 font-normal text-fg-on-ink-muted">·</span>
            <span className="font-medium text-accent">{clinic.parking}</span>
          </p>
          <a
            href={`tel:${clinic.phones.main.tel}`}
            className="inline-flex shrink-0 items-center gap-2 text-base font-semibold text-fg-on-ink transition-opacity hover:opacity-80"
          >
            <Phone className="size-4" aria-hidden />
            {clinic.phones.main.number}
          </a>
        </div>
      </div>

      <div className="container-site flex h-[6.25rem] items-center justify-between gap-3 md:h-[7.5rem] lg:h-[8rem]">
        <a
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3 md:gap-4"
        >
          <img
            src="/clinic/logo-lg.png"
            alt={clinic.name}
            className="h-[5rem] w-auto max-w-[min(78vw,28rem)] object-contain object-left drop-shadow-sm md:h-[6rem] lg:h-[6.5rem]"
            width={785}
            height={280}
          />
          <span className="sr-only">{clinic.name}</span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {headerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl(clinic.phones.reception.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-fg-on-ink transition-[background-color,transform] duration-150 hover:bg-primary-hover active:scale-[0.98] sm:inline-flex"
          >
            Agendar consulta
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-bg-elevated text-fg xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg-elevated lg:hidden">
          <nav
            className="container-site flex max-h-[min(70dvh,28rem)] flex-col gap-1 overflow-y-auto py-4"
            aria-label="Mobile"
          >
            {headerNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-fg transition-colors hover:bg-bg-subtle"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl(clinic.phones.reception.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-base font-semibold text-fg-on-ink"
              onClick={() => setOpen(false)}
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
