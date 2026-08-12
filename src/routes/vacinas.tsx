import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, Syringe, X } from "lucide-react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import {
  clinic,
  vaccineAudiences,
  vaccines,
  whatsappUrl,
  type Vaccine,
  type VaccineAudience,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/vacinas")({
  component: VacinasPage,
  head: () => ({
    meta: [
      {
        title: "Vacinas | Centro Médico Mercês",
      },
      {
        name: "description",
        content:
          "Vacinas com registro na Anvisa e disponíveis para venda no Brasil. Unidade Santa Clara Vacinas no Centro Médico Mercês, Curitiba.",
      },
    ],
  }),
});

function VacinasPage() {
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState<VaccineAudience | "Todas">("Todas");
  const [selected, setSelected] = useState<Vaccine | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vaccines.filter((v) => {
      const matchesAudience =
        audience === "Todas" || v.audiences.includes(audience);
      const hay =
        `${v.name} ${v.protects} ${v.about} ${v.indications.join(" ")} ${v.notes ?? ""}`.toLowerCase();
      const matchesQuery = !q || hay.includes(q);
      return matchesAudience && matchesQuery;
    });
  }, [audience, query]);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-bg-ink text-fg-on-ink">
          <img
            src="/clinic/galeria-5.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #0c1a1c 0%, rgba(12,26,28,0.9) 55%, rgba(12,26,28,0.7) 100%)",
            }}
          />
          <div className="container-site relative py-14 md:py-20">
            <p className="mb-3 text-sm font-semibold tracking-[0.08em] text-accent uppercase">
              Santa Clara Vacinas · Terceiro andar
            </p>
            <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Vacinas disponíveis e liberadas para venda no Brasil
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-on-ink-muted">
              Toque no nome da vacina para ver o que ela é e para quem é
              indicada. Confirme o estoque do dia na Santa Clara Vacinas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(
                  clinic.phones.vacinas.whatsapp,
                  "Olá! Gostaria de informações sobre vacinas na Santa Clara Vacinas, no Centro Médico Mercês.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
              >
                WhatsApp das vacinas
              </a>
              <a
                href={`tel:${clinic.phones.vacinas.tel}`}
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 text-base font-semibold text-fg-on-ink transition-colors hover:bg-white/10"
              >
                Ligar {clinic.phones.vacinas.number}
              </a>
              <a
                href="/#contato"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 text-base font-semibold text-fg-on-ink transition-colors hover:bg-white/10"
              >
                Como chegar
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-site">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                  {filtered.length} imunizantes
                </p>
                <h2 className="font-display mt-1 text-3xl font-semibold tracking-tight">
                  Encontre a vacina
                </h2>
              </div>
              <label className="relative block w-full max-w-md">
                <span className="sr-only">Buscar vacina</span>
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-subtle"
                  aria-hidden
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por nome ou doença…"
                  className="h-11 w-full rounded-md border border-border bg-bg-elevated pr-3 pl-10 text-sm outline-none ring-primary/30 focus:ring-2"
                />
              </label>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {(["Todas", ...vaccineAudiences] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAudience(item)}
                  className={cn(
                    "h-9 rounded-full border px-3.5 text-sm font-medium transition-colors",
                    audience === item
                      ? "border-primary bg-primary text-fg-on-ink"
                      : "border-border bg-bg-elevated text-fg-muted hover:border-primary/40 hover:text-fg",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p className="rounded-xl border border-border bg-bg-subtle px-5 py-10 text-center text-fg-muted">
                Nenhuma vacina encontrada com esses filtros.
              </p>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((v) => (
                  <li key={v.name}>
                    <button
                      type="button"
                      onClick={() => setSelected(v)}
                      className="flex h-full w-full flex-col rounded-xl border border-border bg-bg-elevated p-5 text-left shadow-sm transition-[border-color,box-shadow,transform] duration-150 hover:border-primary/40 hover:shadow-md active:scale-[0.99]"
                    >
                      <div className="mb-3 inline-flex size-10 items-center justify-center rounded-md bg-primary-soft text-primary">
                        <Syringe className="size-5" aria-hidden />
                      </div>
                      <h3 className="font-semibold text-fg underline-offset-4 group-hover:underline">
                        {v.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                        {v.protects}
                      </p>
                      <span className="mt-4 text-sm font-semibold text-primary">
                        Ver o que é e as indicações
                      </span>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {v.audiences.map((a) => (
                          <span
                            key={a}
                            className="rounded-full bg-bg-subtle px-2 py-0.5 text-[11px] font-medium tracking-wide text-fg-muted uppercase"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-12 rounded-xl border border-border bg-bg-subtle p-6 md:p-8">
              <h2 className="font-display text-2xl font-semibold text-fg">
                Importante
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fg-muted">
                <li>
                  Lista das vacinas com registro na Anvisa e venda autorizada
                  em clínicas particulares no Brasil.
                </li>
                <li>
                  A disponibilidade no dia pode variar conforme lote e
                  sazonalidade (gripe, dengue, COVID-19 e VSR).
                </li>
                <li>
                  A indicação depende da idade, do histórico vacinal e da
                  avaliação profissional.
                </li>
                <li>
                  Atendimento na{" "}
                  <strong className="font-semibold text-fg">
                    Santa Clara Vacinas
                  </strong>
                  , no terceiro andar do Centro Médico Mercês.
                </li>
              </ul>
              <a
                href={whatsappUrl(
                  clinic.phones.vacinas.whatsapp,
                  "Olá! Quero agendar ou confirmar uma vacina na Santa Clara Vacinas.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      {selected ? (
        <VaccineDialog vaccine={selected} onClose={() => setSelected(null)} />
      ) : null}
    </div>
  );
}

function VaccineDialog({
  vaccine,
  onClose,
}: {
  vaccine: Vaccine;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-bg-ink/60 backdrop-blur-[2px]"
        aria-label="Fechar"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="vaccine-dialog-title"
        className="relative z-10 flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-border bg-bg-elevated shadow-lg sm:max-h-[85dvh] sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">
              Ficha da vacina
            </p>
            <h2
              id="vaccine-dialog-title"
              className="font-display mt-1 text-2xl font-semibold tracking-tight text-fg"
            >
              {vaccine.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-fg hover:bg-bg-subtle"
            aria-label="Fechar ficha"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5">
          <p className="text-sm font-semibold text-fg">O que é</p>
          <p className="mt-1.5 leading-relaxed text-fg-muted">{vaccine.about}</p>

          <p className="mt-6 text-sm font-semibold text-fg">Indicações</p>
          <ul className="mt-2 space-y-2">
            {vaccine.indications.map((item) => (
              <li key={item} className="flex gap-2.5 text-fg-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {vaccine.notes ? (
            <p className="mt-5 rounded-md bg-bg-subtle px-3 py-2.5 text-sm text-fg-muted">
              {vaccine.notes}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {vaccine.audiences.map((a) => (
              <span
                key={a}
                className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-medium text-primary-deep"
              >
                {a}
              </span>
            ))}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-fg-subtle">
            Informação geral, com base em calendários da SBIm e registros da
            Anvisa. A indicação individual depende de idade, caderneta e
            avaliação na Santa Clara Vacinas.
          </p>
        </div>

        <div className="border-t border-border px-5 py-4">
          <a
            href={whatsappUrl(
              clinic.phones.vacinas.whatsapp,
              `Olá! Quero informações e disponibilidade da vacina ${vaccine.name} na Santa Clara Vacinas.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
          >
            Consultar esta vacina no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
