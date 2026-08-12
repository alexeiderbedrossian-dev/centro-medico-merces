import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  Clock,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
  X,
} from "lucide-react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { SectionHeading } from "@/components/site/section-heading";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";
import {
  checkupItems,
  clinic,
  convenios,
  exams,
  gallery,
  lanac,
  odontologia,
  specialties,
  wazeUrl,
  whatsappUrl,
  type Exam,
  type Specialty,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Specialties />
        <Exams />
        <Checkup />
        <Odontologia />
        <ServicesExtras />
        <Gallery />
        <Convenios />
        <Contact />
        <TrabalheConosco />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-bg-ink text-fg-on-ink"
    >
      <div className="absolute inset-0">
        <img
          src="/clinic/fachada-aerea.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, #0c1a1c 0%, rgba(12,26,28,0.92) 48%, rgba(12,26,28,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0c1a1c 0%, transparent 42%, rgba(12,26,28,0.35) 100%)",
          }}
        />
      </div>

      <div className="container-site relative grid items-center gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-20 lg:py-24">
        <div className="md:col-span-6 lg:col-span-6">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-fg-on-ink-muted backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent" />
            Desde {clinic.since}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Cuidado médico integrado no coração das Mercês
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-on-ink-muted">
            {clinic.tagline} Especialistas, exames e acompanhamento no mesmo
            lugar — com estacionamento amplo e gratuito.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl(clinic.phones.reception.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-fg-on-ink transition-[background-color,transform] duration-150 hover:bg-primary-hover active:scale-[0.98]"
            >
              Agendar consulta
            </a>
            <a
              href="#especialidades"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 text-base font-semibold text-fg-on-ink transition-colors hover:bg-white/10"
            >
              Ver especialidades
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3">
            {[
              {
                label: "Desde",
                value: String(clinic.since),
              },
              { label: "Especialidades", value: "25+" },
              { label: "Estacionamento", value: "Amplo e gratuito" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm sm:px-4"
              >
                <dt className="text-xs tracking-wide text-fg-on-ink-muted uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-6 lg:col-span-6">
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
            <img
              src="/clinic/fachada-aerea.jpg"
              alt="Vista aérea do Centro Médico Mercês"
              className="aspect-[4/3] w-full object-cover object-center"
              width={712}
              height={675}
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-accent">{clinic.slogan}</p>
              <p className="mt-1 text-sm text-fg-on-ink-muted">
                Atendimento integrado desde {clinic.since}
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-fg-on-ink">Horário</p>
              <p className="mt-1 text-sm text-fg-on-ink-muted">
                Seg–Sex {clinic.hours[0].time}
                <br />
                Sáb {clinic.hours[1].time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    {
      icon: Users,
      title: "Especialistas reunidos",
      text: "Diversas áreas da saúde no mesmo centro, com atendimento integrado.",
    },
    {
      icon: Microscope,
      title: "Exames no local",
      text: "Cardiologia, imagem, ultrassom e laboratório LANAC no prédio.",
    },
    {
      icon: Car,
      title: "Estacionamento gratuito",
      text: "Amplo estacionamento no local, entrada pela Rua Otávio do Amaral.",
    },
    {
      icon: ShieldCheck,
      title: "Prevenção e cuidado",
      text: "Foco em diagnóstico precoce, check-up e acompanhamento contínuo.",
    },
  ];

  return (
    <section className="border-b border-border bg-bg-elevated">
      <div className="container-site grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3">
            <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
              <item.icon className="size-5" aria-hidden />
            </div>
            <div>
              <h2 className="font-semibold text-fg">{item.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section-pad">
      <div className="container-site grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <img
            src="/clinic/fachada-aerea.jpg"
            alt="Vista aérea do Centro Médico Mercês"
            className="aspect-[4/3] w-full object-cover"
            width={712}
            height={675}
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Sobre nós"
            title="Mais de 25 anos cuidando de Curitiba"
            description={clinic.about}
            className="mb-6"
          />
          <div className="mb-6 rounded-xl border border-primary/25 bg-primary-soft px-5 py-5 md:px-6 md:py-6">
            <p className="flex items-start gap-3 font-display text-xl font-semibold leading-snug tracking-tight text-primary-deep sm:text-2xl md:text-[1.7rem]">
              <MapPin
                className="mt-1 size-6 shrink-0 text-primary sm:size-7"
                aria-hidden
              />
              <span>{clinic.locationNote}</span>
            </p>
          </div>
          <p className="text-fg-muted leading-relaxed">
            Contamos com estrutura completa para consultas, exames e
            acompanhamento multiprofissional — tudo pensado para facilitar a
            rotina do paciente e da família.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Atendimento integrado entre especialidades",
              "Exames de imagem e cardiológicos no centro",
              "Unidade de vacinas e laboratório no local",
              clinic.parking,
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-fg">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const [selected, setSelected] = useState<Specialty | null>(null);

  return (
    <section id="especialidades" className="section-pad bg-bg-subtle">
      <div className="container-site">
        <SectionHeading
          eyebrow="Especialidades e corpo clínico"
          title="Profissionais de diversas áreas médicas no mesmo local"
          description="Toque na especialidade para ver o que ela trata e as principais doenças. Os profissionais aparecem com o registro no conselho de classe."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {specialties.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setSelected(s)}
              className="flex flex-col rounded-lg border border-border bg-bg-elevated p-5 text-left transition-[border-color,box-shadow,transform] duration-150 hover:border-primary/40 hover:shadow-sm active:scale-[0.99]"
            >
              <div className="mb-3 inline-flex size-9 items-center justify-center rounded-sm bg-primary-soft text-primary">
                <Stethoscope className="size-4" aria-hidden />
              </div>
              <h3 className="font-semibold text-fg">{s.name}</h3>
              <p className="mt-1 text-sm text-fg-muted">{s.desc}</p>
              <span className="mt-3 text-sm font-semibold text-primary">
                Ver o que trata
              </span>
              <ul className="mt-4 space-y-3 border-t border-border pt-4">
                {s.doctors.map((doc) => (
                  <li key={`${s.name}-${doc.name}-${doc.registry}`}>
                    <p className="text-sm font-semibold text-fg">{doc.name}</p>
                    {doc.focus ? (
                      <p className="text-xs text-fg-muted">{doc.focus}</p>
                    ) : null}
                    <p className="mt-0.5 text-xs font-medium tracking-wide text-primary">
                      {doc.registry}
                    </p>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-border bg-bg-elevated p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-fg">
              Quer agendar com um especialista?
            </p>
            <p className="text-sm text-fg-muted">
              Nossa equipe indica a melhor agenda e os exames necessários.
            </p>
          </div>
          <a
            href={whatsappUrl(clinic.phones.reception.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
          >
            Falar com a recepção
          </a>
        </div>
      </div>
      {selected ? (
        <SpecialtyDialog
          specialty={selected}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </section>
  );
}

function SpecialtyDialog({
  specialty,
  onClose,
}: {
  specialty: Specialty;
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
        aria-labelledby="specialty-dialog-title"
        className="relative z-10 flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-border bg-bg-elevated shadow-lg sm:max-h-[85dvh] sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">
              Especialidade
            </p>
            <h2
              id="specialty-dialog-title"
              className="font-display mt-1 text-2xl font-semibold tracking-tight text-fg"
            >
              {specialty.name}
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
          <p className="text-sm font-semibold text-fg">O que trata</p>
          <p className="mt-1.5 leading-relaxed text-fg-muted">{specialty.about}</p>
          <p className="mt-6 text-sm font-semibold text-fg">
            Principais doenças e situações
          </p>
          <ul className="mt-2 space-y-2">
            {specialty.diseases.map((item) => (
              <li key={item} className="flex gap-2.5 text-fg-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-border pt-4">
            <p className="text-sm font-semibold text-fg">Profissionais</p>
            <ul className="mt-2 space-y-3">
              {specialty.doctors.map((doc) => (
                <li key={`${specialty.name}-${doc.registry}`}>
                  <p className="text-sm font-semibold text-fg">{doc.name}</p>
                  {doc.focus ? (
                    <p className="text-xs text-fg-muted">{doc.focus}</p>
                  ) : null}
                  <p className="mt-0.5 text-xs font-medium tracking-wide text-primary">
                    {doc.registry}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-fg-subtle">
            Informação geral da especialidade. O diagnóstico e o tratamento
            dependem da consulta com o profissional.
          </p>
        </div>
        <div className="border-t border-border px-5 py-4">
          <a
            href={whatsappUrl(
              clinic.phones.reception.whatsapp,
              `Olá! Gostaria de agendar uma consulta de ${specialty.name} no Centro Médico Mercês.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
          >
            Agendar esta especialidade
          </a>
        </div>
      </div>
    </div>
  );
}

function Exams() {
  const [selected, setSelected] = useState<Exam | null>(null);

  return (
    <section id="exames" className="section-pad">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Exames"
            title="Diagnóstico completo no centro médico"
            description="Clique no nome do exame para ver o que é, como é feito e para que serve. Cardiologia, ultrassom, Doppler e laboratório LANAC no prédio."
            className="mb-6"
          />
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <img
              src="/clinic/galeria-3.jpg"
              alt="Equipamentos e sala de exames do Centro Médico Mercês"
              className="aspect-video w-full object-cover"
              width={1024}
              height={576}
            />
          </div>
          <p className="mt-4 text-sm text-fg-muted">
            Agendamento de cardiologia e exames de imagem:{" "}
            <a
              href={`tel:${clinic.phones.cardio.tel}`}
              className="font-medium text-primary hover:underline"
            >
              {clinic.phones.cardio.number}
            </a>
          </p>
        </div>
        <div className="lg:col-span-7">
          <ul className="grid gap-2 sm:grid-cols-2">
            {exams.map((exam) => (
              <li key={exam.name}>
                <button
                  type="button"
                  onClick={() => setSelected(exam)}
                  className="flex w-full items-start gap-2.5 rounded-md border border-border bg-bg-elevated px-3.5 py-3 text-left text-sm text-fg transition-[border-color,box-shadow] duration-150 hover:border-primary/40 hover:shadow-sm"
                >
                  <Activity
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span>
                    <span className="font-medium">{exam.name}</span>
                    <span className="mt-0.5 block text-xs font-semibold text-primary">
                      {exam.name.includes("LANAC")
                        ? "Consulte o nome e código dos exames laboratoriais clicando aqui"
                        : "Ver detalhes"}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selected ? (
        <ExamDialog exam={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}

function ExamDialog({
  exam,
  onClose,
}: {
  exam: Exam;
  onClose: () => void;
}) {
  const [labQuery, setLabQuery] = useState("");

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

  const labTests = exam.labTests ?? [];
  const q = labQuery.trim().toLowerCase();
  const filteredLabs = q
    ? labTests.filter((t) =>
        `${t.code} ${t.name} ${t.detail ?? ""}`.toLowerCase().includes(q),
      )
    : labTests;
  const labGroups = filteredLabs.reduce<Record<string, typeof filteredLabs>>(
    (acc, test) => {
      (acc[test.group] ??= []).push(test);
      return acc;
    },
    {},
  );

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
        aria-labelledby="exam-dialog-title"
        className={`relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-border bg-bg-elevated shadow-lg sm:max-h-[85dvh] sm:rounded-2xl ${
          labTests.length ? "max-w-2xl" : "max-w-lg"
        }`}
      >
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">
              Exame
            </p>
            <h2
              id="exam-dialog-title"
              className="font-display mt-1 text-2xl font-semibold tracking-tight text-fg"
            >
              {exam.name}
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
          <p className="mt-1.5 leading-relaxed text-fg-muted">{exam.about}</p>

          <p className="mt-6 text-sm font-semibold text-fg">Como é feito</p>
          <p className="mt-1.5 leading-relaxed text-fg-muted">{exam.how}</p>

          <p className="mt-6 text-sm font-semibold text-fg">
            Para que serve, principalmente
          </p>
          <ul className="mt-2 space-y-2">
            {exam.purposes.map((item) => (
              <li key={item} className="flex gap-2.5 text-fg-muted">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {exam.notes ? (
            <div className="mt-6 rounded-md bg-bg-subtle px-3 py-3">
              <p className="text-sm font-semibold text-fg">
                Informações para o paciente
              </p>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                {exam.notes}
              </p>
            </div>
          ) : null}

          {labTests.length > 0 ? (
            <div className="mt-6 rounded-md border border-border px-3 py-3">
              <p className="text-sm font-semibold text-fg">
                Unidade de coleta LANAC
              </p>
              <p className="mt-1 text-sm text-fg-muted">
                {lanac.address.street} — {lanac.address.neighborhood},{" "}
                {lanac.address.city}/{lanac.address.state} — CEP{" "}
                {lanac.address.cep}
              </p>
              <p className="mt-2 text-sm">
                <a
                  href={`tel:${clinic.phones.lanac.tel}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {clinic.phones.lanac.number}
                </a>
              </p>
              <p className="mt-2 text-xs font-semibold tracking-wide text-fg-muted uppercase">
                Coleta e entrega de material
              </p>
              {lanac.collectionHours.map((h) => (
                <p key={h.days} className="text-sm text-fg-muted">
                  {h.days}: {h.time}
                </p>
              ))}
            </div>
          ) : null}

          {labTests.length > 0 ? (
            <div className="mt-8">
              <p className="text-sm font-semibold text-fg">
                Exames de sangue e urina (códigos de convênio)
              </p>
              <p className="mt-1 text-sm text-fg-muted">
                Códigos usados pelos laboratórios para autorização no convênio.
                A cobertura depende do plano e do pedido médico.
              </p>
              <input
                type="search"
                value={labQuery}
                onChange={(e) => setLabQuery(e.target.value)}
                placeholder="Buscar exame ou código…"
                className="mt-3 h-10 w-full rounded-md border border-border bg-bg px-3 text-sm outline-none ring-primary/30 focus:ring-2"
              />
              <p className="mt-2 text-xs text-fg-subtle">
                {filteredLabs.length} exames
              </p>
              {filteredLabs.length === 0 ? (
                <p className="mt-4 text-sm text-fg-muted">
                  Nenhum exame encontrado com essa busca.
                </p>
              ) : (
                <div className="mt-4 space-y-5">
                  {Object.entries(labGroups).map(([group, tests]) => (
                    <div key={group}>
                      <p className="mb-2 text-xs font-semibold tracking-wide text-primary uppercase">
                        {group}
                      </p>
                      <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border">
                        {tests.map((test) => (
                          <li
                            key={`${test.code}-${test.name}`}
                            className="flex gap-3 bg-bg-elevated px-3 py-2.5"
                          >
                            <span className="w-[5.75rem] shrink-0 font-mono text-xs font-semibold text-primary">
                              {test.code || "—"}
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-fg">
                                {test.name}
                              </span>
                              {test.detail ? (
                                <span className="mt-0.5 block text-xs leading-relaxed text-fg-muted">
                                  {test.detail}
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : null}

          <p className="mt-5 text-xs leading-relaxed text-fg-subtle">
            Informação geral para orientar o paciente. O preparo exato e a
            indicação vêm do pedido médico e da equipe no agendamento.
          </p>
        </div>

        <div className="border-t border-border px-5 py-4">
          <a
            href={
              exam.name.includes("LANAC")
                ? `tel:${clinic.phones.lanac.tel}`
                : whatsappUrl(
                    clinic.phones.cardio.whatsapp,
                    `Olá! Gostaria de agendar o exame ${exam.name} no Centro Médico Mercês.`,
                  )
            }
            target={exam.name.includes("LANAC") ? undefined : "_blank"}
            rel={exam.name.includes("LANAC") ? undefined : "noopener noreferrer"}
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
          >
            {exam.name.includes("LANAC")
              ? `Ligar para o LANAC · ${clinic.phones.lanac.number}`
              : "Agendar este exame"}
          </a>
        </div>
      </div>
    </div>
  );
}

function Checkup() {
  return (
    <section id="checkup" className="section-pad bg-bg-ink text-fg-on-ink">
      <div className="container-site">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              light
              eyebrow="Check-up"
              title="Realize seu check-up completo"
              description="Contamos com especialistas em diversas áreas para um check-up integrado — prevenção, diagnóstico e orientação em um só fluxo."
            />
            <a
              href={whatsappUrl(
                clinic.phones.reception.whatsapp,
                "Olá! Gostaria de informações sobre o check-up no Centro Médico Mercês.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
            >
              <CalendarCheck className="size-5" aria-hidden />
              Solicitar check-up
            </a>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {checkupItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-md border border-white/10 bg-white/5 px-3.5 py-3 text-sm"
              >
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Odontologia() {
  return (
    <section id="odontologia" className="section-pad">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Odontologia"
            title="Implantes, ortodontia, Invisalign® e tratamentos odontológicos completos no Centro Médico Mercês."
            description="A segurança de realizar seu tratamento odontológico em um centro médico com toda estrutura de suporte."
          />
          <ul className="mt-2 space-y-3">
            {odontologia.professionals.map((pro) => (
              <li key={pro.registry}>
                <p className="font-semibold text-fg">{pro.name}</p>
                <p className="text-sm text-fg-muted">{pro.focus}</p>
                <p className="text-xs font-medium tracking-wide text-primary">
                  {pro.registry}
                </p>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {odontologia.services.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-sm text-fg"
              >
                {s}
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl(
              clinic.phones.odontologia.whatsapp,
              "Olá! Gostaria de agendar um atendimento de odontologia no Centro Médico Mercês.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
          >
            WhatsApp Odontologia · {clinic.phones.odontologia.number}
          </a>
        </div>
        <div className="overflow-hidden rounded-xl border border-border shadow-md">
          <img
            src="/clinic/fachada-aerea.jpg"
            alt="Vista aérea do Centro Médico Mercês"
            className="aspect-video w-full object-cover"
            width={712}
            height={675}
          />
        </div>
      </div>
    </section>
  );
}

function ServicesExtras() {
  return (
    <section className="border-y border-border bg-bg-subtle">
      <div className="container-site grid gap-6 py-12 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-bg-elevated p-6 md:p-8">
          <div className="mb-4 inline-flex size-11 items-center justify-center rounded-md bg-primary-soft text-primary">
            <Syringe className="size-5" aria-hidden />
          </div>
          <h3 className="font-display text-2xl font-semibold text-fg">
            Vacinas
          </h3>
          <p className="mt-3 text-fg-muted leading-relaxed">
            O Centro Médico Mercês conta com unidade da{" "}
            <strong className="font-semibold text-fg">Santa Clara Vacinas</strong>
            , no terceiro andar, com vacinas para crianças, adultos e idosos.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/vacinas"
              className="inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Ver todas as vacinas
            </a>
            <a
              href={whatsappUrl(
                clinic.phones.vacinas.whatsapp,
                "Olá! Gostaria de informações sobre vacinas na Santa Clara Vacinas.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-primary hover:underline"
            >
              WhatsApp {clinic.phones.vacinas.number}
            </a>
          </div>
        </article>
        <article className="rounded-xl border border-border bg-bg-elevated p-6 md:p-8">
          <div className="mb-4 inline-flex size-11 items-center justify-center rounded-md bg-primary-soft text-primary">
            <Building2 className="size-5" aria-hidden />
          </div>
          <h3 className="font-display text-2xl font-semibold text-fg">
            Laboratório LANAC
          </h3>
          <p className="mt-3 text-fg-muted leading-relaxed">
            Unidade de coleta do laboratório LANAC no mesmo prédio do Centro
            Médico Mercês.
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="font-semibold text-fg">Endereço</dt>
              <dd className="text-fg-muted">
                {lanac.address.street}
                <br />
                {lanac.address.neighborhood} — {lanac.address.city} —{" "}
                {lanac.address.state}
                <br />
                CEP {lanac.address.cep}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-fg">Telefone</dt>
              <dd>
                <a
                  href={`tel:${clinic.phones.lanac.tel}`}
                  className="font-medium text-primary hover:underline"
                >
                  {clinic.phones.lanac.number}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-fg">Horário de atendimento</dt>
              <dd className="text-fg-muted">
                {lanac.hours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-fg">
                Coleta e entrega de material
              </dt>
              <dd className="text-fg-muted">
                {lanac.collectionHours.map((h) => (
                  <p key={h.days}>
                    {h.days}: {h.time}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
          <a
            href="#exames"
            className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            Consulte o nome e código dos exames laboratoriais clicando aqui
          </a>
        </article>
      </div>
    </section>
  );
}

function Gallery() {
  const regular = gallery.filter((item) => !item.highlight);
  const featured = gallery.filter((item) => item.highlight);

  return (
    <section className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Instalações"
          title="Conheça o nosso espaço"
          description="Ambientes pensados para o conforto do paciente, com fácil acesso e estacionamento no local."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regular.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-sm text-fg-muted">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        {featured.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featured.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="px-5 py-4">
                  {"title" in item && item.title ? (
                    <p className="font-display text-lg font-semibold text-fg">
                      {item.title}
                    </p>
                  ) : null}
                  <p className="mt-1 text-fg-muted">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Convenios() {
  return (
    <section id="convenios" className="section-pad bg-bg-subtle">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Convênios e Particular
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            Atendemos convênios e particular. A cobertura pode variar por
            especialidade e procedimento — confirme na recepção no momento do
            agendamento.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {convenios.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center rounded-xl border border-border bg-bg-elevated p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-16 w-full object-contain sm:h-20"
                width={320}
                height={140}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-fg-muted">
          Não encontrou seu plano? Ligue para{" "}
          <a
            href={`tel:${clinic.phones.main.tel}`}
            className="font-medium text-primary hover:underline"
          >
            {clinic.phones.main.number}
          </a>{" "}
          e confira a disponibilidade.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const channels = [
    clinic.phones.main,
    clinic.phones.reception,
    clinic.phones.vacinas,
    clinic.phones.lanac,
    clinic.phones.cardio,
    clinic.phones.ouvidoria,
    clinic.phones.odontologia,
  ];

  return (
    <section id="contato" className="section-pad">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contato e localização"
            title="Venha nos visitar"
            description="Fácil acesso no bairro Mercês, próximo à Torre Panorâmica e ao Parque Barigui."
            className="mb-6"
          />

          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin
                className="mt-1 size-5 shrink-0 text-primary"
                aria-hidden
              />
              <div>
                <p className="font-semibold text-fg">{clinic.address.street}</p>
                <p className="text-fg-muted">{clinic.address.complement}</p>
                <p className="text-fg-muted">
                  {clinic.address.neighborhood} — {clinic.address.city}/
                  {clinic.address.state}
                </p>
                <p className="text-fg-muted">CEP {clinic.address.cep}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={wazeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-md bg-[#33CCFF] px-3 text-sm font-semibold text-[#0B1B33] transition-opacity hover:opacity-90"
                  >
                    Abrir no Waze
                  </a>
                  <a
                    href={clinic.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-md border border-border px-3 text-sm font-semibold text-primary transition-colors hover:bg-bg-subtle"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div>
                {clinic.hours.map((h) => (
                  <p key={h.days} className="text-fg">
                    <span className="font-semibold">{h.days}:</span> {h.time}
                  </p>
                ))}
                <p className="mt-1 text-sm text-fg-muted">{clinic.parking}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-xl border border-border bg-bg-elevated p-6 shadow-sm md:p-8">
            <h3 className="font-display text-2xl font-semibold text-fg">
              Canais de atendimento
            </h3>
            <p className="mt-2 text-fg-muted">
              Escolha o telefone ou WhatsApp do setor que precisa.
            </p>
            <ul className="mt-6 divide-y divide-border">
              {channels.map((ch) => (
                <li
                  key={ch.number}
                  className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-sm text-fg-muted">{ch.label}</p>
                    <p className="text-lg font-semibold text-fg">{ch.number}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${ch.tel}`}
                      className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle"
                    >
                      <Phone className="size-4" aria-hidden />
                      Ligar
                    </a>
                    {"whatsapp" in ch && ch.whatsapp ? (
                      <a
                        href={whatsappUrl(ch.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-2 rounded-md bg-whatsapp px-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        WhatsApp
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-5 text-sm text-fg-muted">
              {clinic.director.role}: {clinic.director.name} ·{" "}
              {clinic.director.crm}
            </p>
          </div>
        </div>
      </div>

      <div className="container-site mt-10">
        <div className="overflow-hidden rounded-xl border border-border bg-bg-subtle">
          <iframe
            title="Mapa — Centro Médico Mercês"
            src="https://maps.google.com/maps?q=Rua%20Jacarezinho%20258%20Merces%20Curitiba&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="h-72 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function TrabalheConosco() {
  return (
    <section id="trabalhe-conosco" className="section-pad bg-bg-ink text-fg-on-ink">
      <div className="container-site grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-3 text-sm font-semibold tracking-[0.08em] text-accent uppercase">
            Carreiras
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Trabalhe conosco
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-on-ink-muted">
            Médicos, profissionais da saúde e equipes de apoio: envie seu
            currículo ou fale com a ouvidoria. Atendemos ligações e mensagens
            pelo WhatsApp.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <a
            href={`tel:${clinic.phones.ouvidoria.tel}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 text-base font-semibold text-fg-on-ink transition-colors hover:bg-white/10"
          >
            Ligar {clinic.phones.ouvidoria.number}
          </a>
          <a
            href={whatsappUrl(
              clinic.phones.ouvidoria.whatsapp,
              "Olá! Gostaria de enviar meu currículo / trabalhar no Centro Médico Mercês.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-fg-on-ink transition-colors hover:bg-primary-hover"
          >
            WhatsApp da ouvidoria
          </a>
        </div>
      </div>
    </section>
  );
}
