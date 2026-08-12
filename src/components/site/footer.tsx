import { Clock, MapPin, Phone } from "lucide-react";
import { clinic, nav, wazeUrl } from "@/lib/site-data";
import { SocialIcons } from "@/components/site/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-ink text-fg-on-ink">
      <div className="container-site grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-5">
          <img
            src="/clinic/logo-lg.png"
            alt={clinic.name}
            className="mb-5 h-20 w-auto max-w-[16rem] object-contain brightness-0 invert md:h-24"
            width={948}
            height={477}
          />
          <p className="max-w-md text-fg-on-ink-muted leading-relaxed">
            {clinic.about}
          </p>
          <p className="mt-4 text-sm text-fg-on-ink-muted">
            {clinic.director.role}: {clinic.director.name} ·{" "}
            {clinic.director.crm}
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-fg-on-ink uppercase">
            Navegação
          </h3>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-fg-on-ink-muted transition-colors hover:text-fg-on-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-fg-on-ink uppercase">
            Contato
          </h3>
          <div className="flex gap-3 text-fg-on-ink-muted">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <p>
              {clinic.address.street}
              <br />
              {clinic.address.complement}
              <br />
              {clinic.address.neighborhood} — {clinic.address.city}/
              {clinic.address.state}
              <br />
              CEP {clinic.address.cep}
            </p>
          </div>
          <a
            href={wazeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#33CCFF] px-3 text-sm font-semibold text-[#0B1B33] transition-opacity hover:opacity-90"
          >
            Como chegar no Waze
          </a>
          <div className="flex gap-3 text-fg-on-ink-muted">
            <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <div className="space-y-1">
              <a
                href={`tel:${clinic.phones.main.tel}`}
                className="block hover:text-fg-on-ink"
              >
                {clinic.phones.main.number}
              </a>
              <a
                href={`tel:${clinic.phones.reception.tel}`}
                className="block hover:text-fg-on-ink"
              >
                {clinic.phones.reception.number}
              </a>
              <a
                href={`tel:${clinic.phones.vacinas.tel}`}
                className="block hover:text-fg-on-ink"
              >
                Vacinas {clinic.phones.vacinas.number}
              </a>
            </div>
          </div>
          <div className="flex gap-3 text-fg-on-ink-muted">
            <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
            <div>
              {clinic.hours.map((h) => (
                <p key={h.days}>
                  <span className="text-fg-on-ink">{h.days}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-8 md:py-10">
          <p className="mb-4 text-sm font-semibold tracking-wide text-fg-on-ink uppercase">
            Redes sociais
          </p>
          <SocialIcons variant="dark" labelFirst className="gap-3 sm:gap-4" />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-sm text-fg-on-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. Todos os direitos
            reservados.
          </p>
          <p>{clinic.parking} · Próximo à Torre Panorâmica</p>
        </div>
      </div>
    </footer>
  );
}
