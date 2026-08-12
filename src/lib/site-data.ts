export const clinic = {
  name: "Centro Médico Mercês",
  legalName: "Centro Médico Mercês",
  tagline: "Tudo no mesmo lugar. Maior integração. Melhores resultados.",
  since: 1999,
  slogan: "Estaremos aqui. Pode contar conosco, SEMPRE!",
  about:
    "Fundado em 1999, o Centro Médico Mercês dispõe de ampla estrutura e reúne especialistas médicos e profissionais da saúde em diversas áreas. Oferecemos atendimento integrado, com foco na prevenção, diagnóstico e cuidado contínuo aos nossos pacientes.",
  locationNote:
    "Localizado no bairro Mercês, próximo à Torre Panorâmica e ao Parque Barigui.",
  parking: "Estacionamento amplo e gratuito",
  director: {
    name: "Dr. Agajan A. Der Bedrossian",
    crm: "CRM-PR 15746",
    role: "Diretor Médico Técnico",
  },
  address: {
    street: "Rua Jacarezinho, nº 258",
    complement:
      "Esquina com a Rua Otávio do Amaral, nº 1291 (entrada do estacionamento)",
    neighborhood: "Mercês",
    city: "Curitiba",
    state: "PR",
    cep: "80710-150",
    full: "Rua Jacarezinho, 258 — Mercês, Curitiba/PR — CEP 80710-150",
    mapsQuery: "Centro Médico Mercês, Rua Jacarezinho 258, Mercês, Curitiba PR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+Jacarezinho+258+Merces+Curitiba+PR",
    lat: -25.4228553,
    lng: -49.2980544,
  },
  hours: [
    { days: "Segunda a Sexta", time: "07:15 às 19:30" },
    { days: "Sábado", time: "07:15 às 13:00" },
  ],
  phones: {
    main: {
      label: "Agendamentos",
      number: "(41) 3029-2030",
      tel: "+554130292030",
    },
    reception: {
      label: "Recepção principal",
      number: "(41) 99290-0778",
      tel: "+5541992900778",
      whatsapp: "5541992900778",
    },
    cardio: {
      label: "Cardiologia e exames de imagem",
      number: "(41) 99721-6000",
      tel: "+5541997216000",
      whatsapp: "5541997216000",
    },
    ouvidoria: {
      label: "Ouvidoria",
      number: "(41) 99218-7078",
      tel: "+5541992187078",
      whatsapp: "5541992187078",
    },
    odontologia: {
      label: "Odontologia",
      number: "(41) 98897-1506",
      tel: "+5541988971506",
      whatsapp: "5541988971506",
    },
    vacinas: {
      label: "Vacinas — Santa Clara Vacinas",
      number: "(41) 99271-2930",
      tel: "+5541992712930",
      whatsapp: "5541992712930",
    },
    lanac: {
      label: "LANAC — Unidade Mercês",
      number: "(41) 3024-2030",
      tel: "+554130242030",
    },
  },
  socials: {
    instagram: {
      label: "Instagram da clínica",
      url: "https://www.instagram.com/centromedicomerces/",
      handle: "@centromedicomerces",
    },
    instagramCardio: {
      label: "Instagram da cardiologia",
      url: "https://www.instagram.com/cardiocentromerces/",
      handle: "@cardiocentromerces",
    },
  },
} as const;

export const lanac = {
  name: "LANAC — Unidade Centro Médico Mercês",
  address: {
    street: "Rua Jacarezinho, 258",
    neighborhood: "Mercês",
    city: "Curitiba",
    state: "PR",
    cep: "80710-150",
  },
  hours: [
    { days: "Segunda a sexta", time: "7h às 12h — 13h às 16h" },
    { days: "Sábado", time: "7h às 11h" },
  ],
  collectionHours: [
    { days: "Segunda a sexta", time: "7h às 12h — 13h às 16h" },
    { days: "Sábado", time: "7h às 11h" },
  ],
} as const;

export type Doctor = {
  name: string;
  registry: string;
  focus?: string;
};

export type Specialty = {
  name: string;
  desc: string;
  about: string;
  diseases: string[];
  doctors: Doctor[];
};

export const specialties: Specialty[] = [
  {
    name: "Endocrinologia",
    desc: "Tireoide, diabetes, metabolismo e hormônios",
    about:
      "Cuida das glândulas e dos hormônios que regulam metabolismo, crescimento, energia e reprodução. Acompanha diabetes, tireoide, peso e outros distúrbios hormonais, em geral com exames e orientação de longo prazo.",
    diseases: [
      "Diabetes tipo 1 e tipo 2",
      "Hipotireoidismo e hipertireoidismo",
      "Nódulos de tireoide",
      "Obesidade e resistência à insulina",
      "Síndrome dos ovários policísticos",
      "Osteoporose e deficiência de vitamina D",
      "Distúrbios da hipófise e das adrenais",
    ],
    doctors: [
      {
        name: "Dr. Agajan A. Der Bedrossian",
        registry: "CRM-PR 15746",
        focus: "Endocrinologia · Clínica Médica",
      },
    ],
  },
  {
    name: "Cardiologia",
    desc: "Consultas, prevenção e exames cardiológicos",
    about:
      "Avalia o coração e a circulação. Faz prevenção, diagnóstico e acompanhamento de doenças cardiovasculares, com eletrocardiograma, ecocardiograma, teste ergométrico e outros exames no próprio centro.",
    diseases: [
      "Hipertensão arterial",
      "Infarto e angina",
      "Arritmias e palpitações",
      "Insuficiência cardíaca",
      "Sopros e doenças das válvulas",
      "Colesterol alto e prevenção em quem tem histórico familiar",
      "Check-up cardiológico",
    ],
    doctors: [
      {
        name: "Dr. Alexei A. Der Bedrossian",
        registry: "CRM-PR 16700",
        focus: "Cardiologia · Clínica Médica · Medicina Interna",
      },
      {
        name: "Dr. Nicki Mallmann",
        registry: "CRM-PR 22768",
        focus: "Cardiologia · Ecocardiografia",
      },
      {
        name: "Dr. Marcelo Meller Garcez",
        registry: "CRM-PR 43.032",
        focus: "Cardiologia RQE 36.346 · Ergometria RQE 38.125",
      },
      {
        name: "Dr. José Eduardo Marquesini",
        registry: "CRM 21.420",
        focus: "Cardiologista · RQE 26161",
      },
    ],
  },
  {
    name: "Dermatologia",
    desc: "Pele, cabelos, unhas e cirurgia dermatológica",
    about:
      "Trata pele, cabelos e unhas — de problemas comuns a lesões que pedem cirurgia ou laser. Também faz prevenção e acompanhamento de câncer de pele e mapeamento de pintas.",
    diseases: [
      "Acne e rosácea",
      "Dermatites e alergias de pele",
      "Psoríase",
      "Micoses e infecções de pele",
      "Queda de cabelo",
      "Pintas, manchas e câncer de pele",
      "Unhas encravadas, herpes e urticária",
    ],
    doctors: [
      {
        name: "Dr. Andranik A. D. Bedrossian",
        registry: "CRM-PR 18559",
        focus: "Dermatologia · Cirurgia dermatológica · Laser",
      },
    ],
  },
  {
    name: "Clínica Médica",
    desc: "Avaliação geral, prevenção e cuidado integrado",
    about:
      "É a porta de entrada do cuidado: avalia sintomas gerais, organiza o diagnóstico e encaminha às especialidades quando preciso. Também acompanha doenças crônicas do dia a dia.",
    diseases: [
      "Check-up e prevenção",
      "Hipertensão e diabetes em acompanhamento clínico",
      "Infecções comuns e febre",
      "Cansaço, dor e sintomas ainda sem diagnóstico",
      "Acompanhamento de doenças crônicas",
      "Avaliação antes de exames e procedimentos",
    ],
    doctors: [
      {
        name: "Dr. Agajan A. Der Bedrossian",
        registry: "CRM-PR 15746",
        focus: "Clínica Médica · Endocrinologia",
      },
      {
        name: "Dr. Alexei A. Der Bedrossian",
        registry: "CRM-PR 16700",
        focus: "Clínica Médica · Cardiologia",
      },
      {
        name: "Dr. João Luiz S. Carneiro",
        registry: "CRM-PR 13008",
        focus: "Clínica Médica",
      },
    ],
  },
  {
    name: "Otorrinolaringologia",
    desc: "Ouvido, nariz e garganta",
    about:
      "Cuida de ouvido, nariz, seios da face, garganta e estruturas próximas da cabeça e do pescoço — da sinusite ao zumbido e à apneia do sono.",
    diseases: [
      "Sinusite e rinite",
      "Otite, perda de audição e zumbido",
      "Amigdalite e faringite de repetição",
      "Desvio de septo e obstrução nasal",
      "Apneia do sono e ronco",
      "Rouquidão e nódulos de prega vocal",
      "Tontura e vertigem",
    ],
    doctors: [
      {
        name: "Dra. Andrea M. S. Zraik",
        registry: "CRM-PR 23883",
        focus: "Otorrinolaringologia",
      },
    ],
  },
  {
    name: "Nutrição",
    desc: "Avaliação nutricional e orientação alimentar",
    about:
      "Avalia o estado nutricional e monta um plano alimentar para saúde, desempenho e tratamento de doenças, em geral junto com o médico da especialidade.",
    diseases: [
      "Obesidade e sobrepeso",
      "Diabetes e resistência à insulina",
      "Colesterol e triglicerídeos altos",
      "Intolerâncias e alergias alimentares",
      "Anemia e deficiências de vitaminas",
      "Acompanhamento pré e pós-cirurgia bariátrica",
      "Nutrição na gestação e no envelhecimento",
    ],
    doctors: [
      {
        name: "Dra. Andressa C. Cardoso",
        registry: "CRN-PR 2303",
        focus: "Nutrição",
      },
    ],
  },
  {
    name: "Urologia",
    desc: "Trato urinário e saúde do homem",
    about:
      "Cuida do aparelho urinário de homens e mulheres e da saúde sexual e reprodutiva do homem (andrologia) — da infecção urinária à próstata.",
    diseases: [
      "Infecção urinária de repetição",
      "Cálculo renal",
      "Hiperplasia e câncer de próstata",
      "Disfunção erétil e infertilidade masculina",
      "Incontinência urinária",
      "Sangue na urina",
      "Fimose e outras alterações genitais",
    ],
    doctors: [
      {
        name: "Dr. Dilermando P. A. Neto",
        registry: "CRM-PR 17617",
        focus: "Urologia · Andrologia",
      },
    ],
  },
  {
    name: "Nefrologia",
    desc: "Rins e hipertensão",
    about:
      "Trata os rins e o equilíbrio de água, sais e pressão ligados à função renal. Acompanha quem tem creatinina alterada, hipertensão de difícil controle ou doença renal crônica.",
    diseases: [
      "Doença renal crônica",
      "Infecção renal e pielonefrite",
      "Cálculos e cistos renais",
      "Proteinúria e sangue na urina",
      "Hipertensão de origem renal",
      "Rins policísticos",
      "Preparação para diálise, quando necessário",
    ],
    doctors: [
      {
        name: "Dr. João Luiz S. Carneiro",
        registry: "CRM-PR 13008",
        focus: "Nefrologia",
      },
    ],
  },
  {
    name: "Ginecologia e Obstetrícia",
    desc: "Saúde da mulher, pré-natal e acompanhamento ginecológico",
    about:
      "Acompanha a saúde da mulher em todas as fases: preventivo, ciclo menstrual, contracepção, pré-natal e climatério.",
    diseases: [
      "Infecções ginecológicas e corrimento",
      "Endometriose e mioma",
      "Irregularidade menstrual e SOP",
      "Menopausa e climatério",
      "Pré-natal e acompanhamento da gestação",
      "HPV e prevenção do câncer de colo do útero",
      "Infertilidade",
    ],
    doctors: [
      {
        name: "Dra. Luciana B. P. Bedrossian",
        registry: "CRM-PR 16510",
        focus: "Ginecologia · Obstetrícia",
      },
      {
        name: "Dra. Lara Sodré Cardoso Xavier",
        registry: "CRM-PR 46.576",
        focus: "Ginecologia e Obstetrícia",
      },
    ],
  },
  {
    name: "Reumatologia",
    desc: "Doenças reumáticas e articulares",
    about:
      "Trata inflamações e doenças autoimunes que atingem articulações, músculos, ossos e tecido conjuntivo. A dor crônica e o inchaço articular são motivos frequentes de consulta.",
    diseases: [
      "Artrite reumatoide",
      "Lúpus",
      "Artrose",
      "Gota",
      "Fibromialgia",
      "Espondilite e outras dores na coluna inflamatórias",
      "Osteoporose e síndrome de Sjögren",
    ],
    doctors: [
      {
        name: "Dra. Ludmila A. R. C. Mori",
        registry: "CRM-PR 21715",
        focus: "Reumatologia",
      },
    ],
  },
  {
    name: "Cirurgia Vascular",
    desc: "Veias, artérias e circulação",
    about:
      "Avalia veias, artérias e circulação. Trata varizes, tromboses e problemas de fluxo sanguíneo; o Doppler vascular pode ser feito no próprio centro.",
    diseases: [
      "Varizes e vasinhos",
      "Insuficiência venosa e pernas pesadas",
      "Trombose venosa",
      "Úlceras de perna",
      "Doença arterial periférica (má circulação)",
      "Estenose de carótidas e aneurismas",
      "Linfedema",
    ],
    doctors: [
      {
        name: "Dr. Rodrigo Piccione Colatusso",
        registry: "CRM-PR 22.753",
        focus: "Cirurgião Vascular · RQE 1405",
      },
    ],
  },
  {
    name: "Ortopedia",
    desc: "Ossos, articulações e aparelho locomotor",
    about:
      "Cuida de ossos, articulações, músculos, tendões e coluna — de uma entorse aguda à dor crônica que limita o dia a dia.",
    diseases: [
      "Artrose",
      "Hérnia de disco e dor na coluna",
      "Tendinite e bursite",
      "Entorses e fraturas",
      "Dor no joelho, no ombro e no quadril",
      "Joanete e túnel do carpo",
      "Lesões esportivas",
    ],
    doctors: [
      {
        name: "Dr. Marcus R. G. Schiavon",
        registry: "CRM-PR 16546",
        focus: "Ortopedia",
      },
    ],
  },
  {
    name: "Psicologia",
    desc: "Acompanhamento psicológico e psicoterapias",
    about:
      "Oferece escuta e psicoterapia para sofrimento emocional, relações e mudanças de vida. Não substitui a avaliação médica quando há indicação de medicamento.",
    diseases: [
      "Ansiedade e crises de pânico",
      "Depressão e luto",
      "Estresse e esgotamento",
      "Conflitos familiares e de relacionamento",
      "Questões de autoestima",
      "Fobias",
      "Apoio em doenças crônicas",
    ],
    doctors: [
      {
        name: "Dra. Marianne Guimarães",
        registry: "CRP 06705",
        focus: "Psicologia · Psicoterapias",
      },
    ],
  },
  {
    name: "Cirurgia Digestiva e Bariátrica",
    desc: "Cirurgia do aparelho digestivo, metabólica e obesidade",
    about:
      "Avalia e trata cirurgicamente doenças do aparelho digestivo e a obesidade grave (cirurgia bariátrica e metabólica), em geral junto com endocrinologia e nutrição.",
    diseases: [
      "Obesidade grave com indicação de cirurgia bariátrica",
      "Cálculo na vesícula",
      "Hérnias da parede abdominal",
      "Refluxo grave",
      "Doenças do estômago e do intestino com indicação operatória",
      "Apendicite e urgências digestivas selecionadas",
      "Alguns tumores do aparelho digestivo",
    ],
    doctors: [
      {
        name: "Dr. Marlus Moreira",
        registry: "CRM-PR 17551",
        focus: "Cirurgia Digestiva · Metabólica · Bariátrica · Gastroenterologia",
      },
    ],
  },
  {
    name: "Hematologia e Oncologia",
    desc: "Sangue, anemias e acompanhamento oncológico",
    about:
      "Avalia doenças do sangue e acompanha pacientes com diagnóstico oncológico, em conjunto com exames laboratoriais e as demais especialidades do centro.",
    diseases: [
      "Anemias e alterações do hemograma",
      "Distúrbios de coagulação",
      "Aumento de gânglios e investigação de tumores hematológicos",
      "Acompanhamento oncológico clínico",
      "Alterações de plaquetas e glóbulos brancos",
    ],
    doctors: [
      {
        name: "Dra. Isadora Yasbick Spricido",
        registry: "CRM/PR 64053",
        focus: "Hematologia e Oncologia",
      },
    ],
  },
  {
    name: "Radiologia e Ultrassonografia",
    desc: "Diagnóstico por imagem no próprio centro",
    about:
      "Faz o diagnóstico por imagem no prédio, apoiando as outras especialidades. O exame não substitui a consulta: ajuda a confirmar nódulos, cálculos, inflamações e alterações de órgãos e vasos.",
    diseases: [
      "Nódulos de tireoide",
      "Cálculos e cistos de rins e vias urinárias",
      "Alterações do fígado, vesícula e abdome",
      "Trombose e avaliação de veias e artérias (Doppler)",
      "Investigação de dor abdominal e pélvica",
      "Avaliação de pele, subcutâneo e pintas",
      "Acompanhamento de lesões já conhecidas",
    ],
    doctors: [
      {
        name: "Dr. Ralff Mallmann",
        registry: "CRM-PR 25980",
        focus: "Radiologia · Ultrassonografia",
      },
    ],
  },
];

export type LabTest = {
  code: string;
  name: string;
  detail?: string;
  group: string;
};

export type Exam = {
  name: string;
  about: string;
  how: string;
  purposes: string[];
  notes?: string;
  labTests?: LabTest[];
};

export const lanacLabTests: LabTest[] = [
  {
    code: "40302750",
    name: "Lipidograma completo",
    detail:
      "Colesterol total, triglicerídeos, VLDL, não HDL, LDL calculado, HDL e relação colesterol total/HDL",
    group: "Metabolismo e rotina",
  },
  {
    code: "40304361",
    name: "Hemograma completo",
    detail:
      "Eritrócitos, hematócrito, hemoglobina, VCM, HCM, CHCM, RDW, leucócitos, segmentados, eosinófilos, basófilos, monócitos, linfócitos e plaquetas",
    group: "Metabolismo e rotina",
  },
  {
    code: "40302040",
    name: "Glicemia em jejum",
    group: "Metabolismo e rotina",
  },
  {
    code: "40302040",
    name: "Glicemia pós-prandial",
    group: "Metabolismo e rotina",
  },
  {
    code: "40302075",
    name: "Hemoglobina glicada (glicemia média)",
    group: "Metabolismo e rotina",
  },
  {
    code: "40316360",
    name: "Insulina",
    group: "Metabolismo e rotina",
  },
  {
    code: "40302164",
    name: "Prova de tolerância à lactose",
    group: "Metabolismo e rotina",
  },
  {
    code: "40301150",
    name: "Ácido úrico sérico",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40301630",
    name: "Creatinina sérica",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40302580",
    name: "Ureia",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40302318",
    name: "Potássio sérico",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40302423",
    name: "Sódio",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40302237",
    name: "Magnésio",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40301931",
    name: "Fósforo",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40301400",
    name: "Cálcio",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40301419",
    name: "Cálcio iônico",
    group: "Função renal e eletrólitos",
  },
  {
    code: "40302504",
    name: "TGO — transaminase glutâmico-oxalacética",
    group: "Fígado e pâncreas",
  },
  {
    code: "40302512",
    name: "TGP — transaminase glutâmico-pirúvica",
    group: "Fígado e pâncreas",
  },
  {
    code: "40301990",
    name: "Gama-glutamil transferase (GGT)",
    group: "Fígado e pâncreas",
  },
  {
    code: "40312151",
    name: "Provas de função hepática",
    group: "Fígado e pâncreas",
  },
  {
    code: "40301281",
    name: "Amilase",
    group: "Fígado e pâncreas",
  },
  {
    code: "40302199",
    name: "Lipase",
    group: "Fígado e pâncreas",
  },
  {
    code: "40301354",
    name: "Lipoproteína (a)",
    group: "Metabolismo e rotina",
  },
  {
    code: "40316270",
    name: "Ferritina sérica",
    group: "Ferro e anemias",
  },
  {
    code: "40301842",
    name: "Ferro sérico",
    group: "Ferro e anemias",
  },
  {
    code: "40302520",
    name: "Saturação de transferrina",
    group: "Ferro e anemias",
  },
  {
    code: "40304370",
    name: "VHS",
    group: "Ferro e anemias",
  },
  {
    code: "40308391",
    name: "PCR — proteína C reativa",
    group: "Ferro e anemias",
  },
  {
    code: "40316521",
    name: "TSH — hormônio tireoestimulante",
    group: "Tireoide",
  },
  {
    code: "40316491",
    name: "T4 livre",
    group: "Tireoide",
  },
  {
    code: "40316467",
    name: "T3 livre",
    group: "Tireoide",
  },
  {
    code: "40316530",
    name: "Tireoglobulina",
    group: "Tireoide",
  },
  {
    code: "40316106",
    name: "Anti-tireoglobulina",
    group: "Tireoide",
  },
  {
    code: "40304671",
    name: "Anticorpo antiperoxidase",
    group: "Tireoide",
  },
  {
    code: "40306348",
    name: "Anti-TPO",
    group: "Tireoide",
  },
  {
    code: "40305465",
    name: "Paratormônio (PTH)",
    group: "Tireoide",
  },
  {
    code: "40316505",
    name: "Testosterona livre",
    group: "Hormônios",
  },
  {
    code: "40316513",
    name: "Testosterona total",
    group: "Hormônios",
  },
  {
    code: "40316190",
    name: "Cortisol",
    group: "Hormônios",
  },
  {
    code: "40316262",
    name: "Estrona",
    group: "Hormônios",
  },
  {
    code: "40316246",
    name: "Estradiol",
    group: "Hormônios",
  },
  {
    code: "40316416",
    name: "Prolactina",
    group: "Hormônios",
  },
  {
    code: "40316408",
    name: "Progesterona",
    group: "Hormônios",
  },
  {
    code: "40316289",
    name: "FSH",
    group: "Hormônios",
  },
  {
    code: "40316335",
    name: "LH",
    group: "Hormônios",
  },
  {
    code: "",
    name: "Sulfato de dehidroepiandrosterona (DHEA-S)",
    group: "Hormônios",
  },
  {
    code: "40316203",
    name: "GH",
    group: "Hormônios",
  },
  {
    code: "40316327",
    name: "Beta HCG",
    group: "Hormônios",
  },
  {
    code: "40302830",
    name: "Vitamina D 25-OH",
    group: "Vitaminas e minerais",
  },
  {
    code: "40316572",
    name: "Vitamina B12",
    group: "Vitaminas e minerais",
  },
  {
    code: "40301087",
    name: "Ácido fólico",
    group: "Vitaminas e minerais",
  },
  {
    code: "40313328",
    name: "Zinco",
    group: "Vitaminas e minerais",
  },
  {
    code: "40313255",
    name: "Selênio",
    group: "Vitaminas e minerais",
  },
  {
    code: "40301567",
    name: "Cobre",
    group: "Vitaminas e minerais",
  },
  {
    code: "40301273",
    name: "Alumínio",
    group: "Vitaminas e minerais",
  },
  {
    code: "40301648",
    name: "CPK — creatinofosfoquinase",
    group: "Coração e músculos",
  },
  {
    code: "40301664",
    name: "CK-MB massa",
    group: "Coração e músculos",
  },
  {
    code: "40302571",
    name: "Troponina",
    group: "Coração e músculos",
  },
  {
    code: "40302776",
    name: "NT-proBNP",
    group: "Coração e músculos",
  },
  {
    code: "40302113",
    name: "Homocisteína",
    group: "Coração e músculos",
  },
  {
    code: "40304922",
    name: "Coagulograma",
    group: "Coagulação",
  },
  {
    code: "40304590",
    name: "TAP / INR",
    group: "Coagulação",
  },
  {
    code: "40304264",
    name: "Fibrinogênio",
    group: "Coagulação",
  },
  {
    code: "40304906",
    name: "D-dímero",
    group: "Coagulação",
  },
  {
    code: "40304299",
    name: "Tipagem sanguínea ABO e Rh",
    group: "Coagulação",
  },
  {
    code: "40302016",
    name: "Gasometria venosa",
    group: "Coagulação",
  },
  {
    code: "20302016",
    name: "Gasometria arterial",
    group: "Coagulação",
  },
  {
    code: "40307182",
    name: "Sorologia HIV",
    group: "Sorologias",
  },
  {
    code: "40306992",
    name: "Sorologia hepatite B",
    group: "Sorologias",
  },
  {
    code: "40307026",
    name: "Sorologia hepatite C",
    group: "Sorologias",
  },
  {
    code: "40307760",
    name: "VDRL",
    group: "Sorologias",
  },
  {
    code: "40307743",
    name: "FTA-ABS IgM",
    group: "Sorologias",
  },
  {
    code: "40307735",
    name: "FTA-ABS IgG",
    group: "Sorologias",
  },
  {
    code: "40306615",
    name: "Sorologia Chagas IgG",
    group: "Sorologias",
  },
  {
    code: "40306623",
    name: "Sorologia Chagas IgM",
    group: "Sorologias",
  },
  {
    code: "40307107",
    name: "Pesquisa IgG herpes-zóster",
    group: "Sorologias",
  },
  {
    code: "40308030",
    name: "Fator reumatoide",
    group: "Autoimunidade",
  },
  {
    code: "40306852",
    name: "FAN",
    group: "Autoimunidade",
  },
  {
    code: "40316149",
    name: "PSA",
    group: "Marcadores tumorais",
  },
  {
    code: "40316130",
    name: "PSA livre",
    group: "Marcadores tumorais",
  },
  {
    code: "40316122",
    name: "CEA — antígeno carcinoembriogênico",
    group: "Marcadores tumorais",
  },
  {
    code: "40316378",
    name: "CA 19-9 (marcador de pâncreas)",
    group: "Marcadores tumorais",
  },
  {
    code: "40316378",
    name: "Marcador tumoral CA 125",
    group: "Marcadores tumorais",
  },
  {
    code: "40316378",
    name: "Marcador tumoral CA 15-3",
    group: "Marcadores tumorais",
  },
  {
    code: "40302229",
    name: "Lítio",
    group: "Outros",
  },
  {
    code: "40305112",
    name: "Serotonina",
    group: "Outros",
  },
  {
    code: "40311210",
    name: "Urinálise",
    group: "Urina",
  },
  {
    code: "40310213",
    name: "Urocultura e antibiograma",
    group: "Urina",
  },
  {
    code: "40311171",
    name: "Microalbuminúria (amostra isolada)",
    group: "Urina",
  },
];


export const exams: Exam[] = [
  {
    name: "Eletrocardiograma",
    about:
      "Registro da atividade elétrica do coração, feito com adesivos no peito, nos braços e nas pernas. É rápido, indolor e um dos exames mais usados em check-up e em quem tem dor no peito, palpitações ou falta de ar.",
    how: "Você deita e permanece alguns minutos em repouso. Os eletrodos captam o ritmo e o traçado do coração. Não usa contraste nem radiação. Em geral leva menos de 10 minutos.",
    purposes: [
      "Avaliar o ritmo cardíaco e detectar arritmias",
      "Investigar dor no peito, palpitações e falta de ar",
      "Acompanhar hipertensão, infarto prévio e uso de alguns medicamentos",
      "Fazer parte do check-up e da liberação para atividade física",
    ],
    notes: "Evite cremes no peito no dia do exame. Leve exames anteriores, se tiver.",
  },
  {
    name: "Ecocardiograma",
    about:
      "Ultrassom do coração. Mostra o tamanho das câmaras, o funcionamento das válvulas e a força de contração, sem usar radiação.",
    how: "Você deita de lado. O médico desliza um transdutor com gel no peito. Pode pedir para prender a respiração por instantes. Dura em média 20 a 40 minutos.",
    purposes: [
      "Avaliar sopros, falta de ar e inchaço",
      "Investigar doenças das válvulas e do músculo cardíaco",
      "Acompanhar hipertensão, infarto e insuficiência cardíaca",
      "Complementar o eletrocardiograma no check-up",
    ],
    notes: "Use roupa fácil de abrir na frente do peito. Não precisa de jejum na maioria dos casos.",
  },
  {
    name: "Doppler de carótidas",
    about:
      "Ultrassom com Doppler das artérias do pescoço que levam sangue ao cérebro. Avalia placas de gordura, estreitamentos e o fluxo sanguíneo.",
    how: "Você deita com o pescoço um pouco estendido. O examinador passa o transdutor com gel nas laterais do pescoço. É indolor e dura cerca de 20 a 30 minutos.",
    purposes: [
      "Investigar risco de AVC e sopro no pescoço",
      "Avaliar placas de aterosclerose nas carótidas",
      "Acompanhar quem tem hipertensão, diabetes ou colesterol alto",
      "Controle após procedimentos vasculares",
    ],
    notes: "Evite colares. Não é necessário jejum.",
  },
  {
    name: "Teste ergométrico",
    about:
      "Exame de esforço em esteira (ou bicicleta). O coração é observado enquanto você caminha com intensidade crescente, para ver como reage ao exercício.",
    how: "Colocam-se eletrodos no peito e um aparelho de pressão no braço. Você caminha na esteira em etapas. O exame é interrompido se aparecer cansaço importante, alteração no traçado ou por decisão médica. Reserve cerca de 40 minutos.",
    purposes: [
      "Investigar dor no peito e falta de ar aos esforços",
      "Avaliar arritmias desencadeadas pelo exercício",
      "Acompanhar quem já tem doença do coração",
      "Liberar atividade física e estimar capacidade cardíaca",
    ],
    notes:
      "Use tênis e roupa confortável. Evite refeição pesada e, em geral, cafeína antes. Pergunte se deve suspender algum remédio do coração.",
  },
  {
    name: "Ecocardiograma com estresse físico",
    about:
      "Ultrassom do coração feito em repouso e depois do esforço (esteira ou bicicleta). Mostra se alguma área do músculo deixa de contrair bem quando o coração trabalha mais — sinal possível de falta de sangue (isquemia).",
    how: "Primeiro se faz o eco em repouso. Em seguida você se exercita. Logo após o esforço, as imagens são repetidas para comparar. Leva mais tempo que o eco comum.",
    purposes: [
      "Investigar isquemia e doença das coronárias",
      "Avaliar falta de ar ou dor no peito aos esforços",
      "Complementar o teste ergométrico quando a imagem do coração é necessária",
      "Acompanhar pacientes com doença cardíaca conhecida",
    ],
    notes:
      "Siga a mesma preparação do teste de esforço: roupa esportiva, tênis e orientação sobre medicamentos.",
  },
  {
    name: "Ecocardiograma Doppler bidimensional",
    about:
      "É o ecocardiograma padrão, em duas dimensões, com Doppler. Além da imagem do coração, o Doppler mostra a direção e a velocidade do sangue nas válvulas e nas câmaras.",
    how: "Igual ao eco transtorácico: gel no peito, imagens em diferentes ângulos e análise do fluxo com Doppler colorido. Dura em média 20 a 40 minutos.",
    purposes: [
      "Medir a função de bombeamento (fração de ejeção)",
      "Avaliar estreitamento ou refluxo das válvulas",
      "Investigar sopros, falta de ar e hipertensão",
      "Acompanhar tratamento cardiológico",
    ],
  },
  {
    name: "Ecocardiograma 3D",
    about:
      "Versão do ultrassom do coração que monta imagens em três dimensões. Ajuda a ver válvulas e cavidades com mais detalhe, quando o eco 2D não é suficiente.",
    how: "Semelhante ao eco convencional, com um transdutor capaz de captar volume. Pode levar um pouco mais de tempo. Continua sendo indolor e sem radiação.",
    purposes: [
      "Detalhar doenças complexas das válvulas",
      "Planejar procedimentos e cirurgias cardíacas",
      "Avaliar melhor o volume das câmaras",
      "Complementar o eco bidimensional em casos selecionados",
    ],
    notes: "A indicação costuma vir do cardiologista. Leve exames de imagem anteriores.",
  },
  {
    name: "Holter eletrocardiograma 24 horas",
    about:
      "Eletrocardiograma contínuo, em geral por 24 horas. Um gravador portátil registra o ritmo do coração enquanto você vive o dia normal — inclusive o sono.",
    how: "Eletrodos são colados no peito e ligados a um aparelho pequeno na cintura. Você volta para casa e anota horários de sintomas, esforço e medicamentos. No dia seguinte o aparelho é retirado e o registro é analisado.",
    purposes: [
      "Investigar palpitações, tontura e desmaios",
      "Detectar arritmias que não aparecem no ECG de consultório",
      "Avaliar o coração durante o sono e as atividades do dia",
      "Acompanhar o efeito de medicamentos para o ritmo",
    ],
    notes:
      "Não molhe o aparelho. Evite ímãs e exames de ressonância enquanto estiver com o Holter. Vista roupa folgada.",
  },
  {
    name: "MAPA (monitoramento da pressão arterial por 24 horas)",
    about:
      "Aparelho que mede a pressão automaticamente ao longo de 24 horas, de dia e de noite. Mostra a pressão real do cotidiano, não só a do consultório.",
    how: "Uma braçadeira no braço infla em intervalos programados. Você segue a rotina, anota horários de remédio, exercício e sintomas, e devolve o aparelho no dia seguinte.",
    purposes: [
      "Confirmar ou afastar hipertensão, inclusive a do avental branco",
      "Ver se a pressão baixa à noite (padrão normal)",
      "Ajustar o tratamento da pressão alta",
      "Investigar tontura, picos de pressão e falta de controle com remédios",
    ],
    notes:
      "Use camisa de manga folgada. Evite banho com o aparelho. Não retire a braçadeira, salvo orientação da equipe.",
  },
  {
    name: "Ultrassonografia abdominal",
    about:
      "Exame de imagem com ultrassom do abdome — fígado, vesícula, pâncreas, baço, rins e grandes vasos. Não usa radiação.",
    how: "Você deita e o examinador passa o transdutor com gel na barriga, às vezes pedindo para prender a respiração. Costuma durar 15 a 30 minutos.",
    purposes: [
      "Investigar dor abdominal, gases e má digestão persistente",
      "Avaliar fígado gorduroso, cistos e nódulos",
      "Detectar cálculo na vesícula",
      "Acompanhar alterações já conhecidas no check-up",
    ],
    notes:
      "Em geral pede-se jejum de 6 a 8 horas. Confirme na hora de agendar. Bexiga cheia só se o exame incluir a pelve.",
  },
  {
    name: "Ultrassonografia de rins e vias urinárias",
    about:
      "Ultrassom focado nos rins, ureteres e bexiga. Avalia tamanho, cistos, cálculos e esvaziamento da bexiga.",
    how: "Gel no abdome e na região pélvica. Pode ser pedido que a bexiga esteja cheia e, depois, que você urine para ver o residual. Dura cerca de 15 a 25 minutos.",
    purposes: [
      "Investigar dor lombar, infecção urinária de repetição e sangue na urina",
      "Procurar cálculos e hidronefrose (dilatação)",
      "Acompanhar cistos, nódulos e doença renal crônica",
      "Avaliar o esvaziamento da bexiga",
    ],
    notes: "Beba água antes se a equipe pedir bexiga cheia. Não esvazie até a orientação.",
  },
  {
    name: "Ultrassonografia de tireoide",
    about:
      "Imagem da glândula tireoide e, em geral, dos gânglios próximos. Mostra nódulos, tamanho e características que ajudam a decidir o acompanhamento.",
    how: "Você deita com o pescoço um pouco estendido. O transdutor passa na frente do pescoço com gel. É rápido (cerca de 10 a 20 minutos) e indolor.",
    purposes: [
      "Avaliar nódulos e aumento da tireoide (bócio)",
      "Acompanhar nódulos já conhecidos",
      "Apoiar o endocrinologista no diagnóstico de hipotireoidismo e hipertireoidismo",
      "Guiar punção, quando indicada",
    ],
    notes: "Evite colares. Não precisa de jejum. Leve exames e laudos anteriores da tireoide.",
  },
  {
    name: "Ultrassonografia de região cervical",
    about:
      "Ultrassom do pescoço além da tireoide: gânglios, glândulas salivares e partes moles. Ajuda a investigar inchaços e nódulos cervicais.",
    how: "Semelhante ao da tireoide: deitado, gel no pescoço, imagens dos dois lados. Dura em geral 15 a 25 minutos.",
    purposes: [
      "Investigar ínguas e nódulos no pescoço",
      "Avaliar glândulas salivares (parótida e submandibular)",
      "Acompanhar gânglios aumentados após infecção",
      "Complementar a avaliação da tireoide",
    ],
    notes: "Evite colares e golas altas. Não precisa de jejum.",
  },
  {
    name: "Ultrassonografia de pele e subcutâneo",
    about:
      "Ultrassom de alta frequência da pele e da camada abaixo dela. Avalia nódulos, cistos, lipomas e algumas lesões que o dermatologista quer medir ou localizar.",
    how: "Gel sobre a região indicada. O exame é pontual, rápido e sem preparo especial, salvo orientação contrária.",
    purposes: [
      "Caracterizar nódulos, cistos e lipomas",
      "Medir profundidade de lesões de pele",
      "Ajudar a planejar procedimento dermatológico ou cirúrgico",
      "Acompanhar lesões já conhecidas",
    ],
    notes: "Mostre ao examinador exatamente o local marcado pelo médico.",
  },
  {
    name: "Doppler venoso de membros inferiores e superiores",
    about:
      "Ultrassom com Doppler das veias dos braços ou das pernas. Avalia trombose, varizes e o funcionamento das válvulas venosas.",
    how: "Você pode ficar deitado ou em pé, conforme o protocolo. O transdutor percorre a perna ou o braço; às vezes se aperta suavemente a panturrilha. Dura cerca de 20 a 40 minutos.",
    purposes: [
      "Investigar trombose venosa (inchaço, dor súbita, vermelhidão)",
      "Avaliar varizes e insuficiência venosa",
      "Acompanhar quem já teve trombose",
      "Planejar tratamento vascular",
    ],
    notes:
      "Use roupa que permita expor as pernas ou os braços. Informe se usa meia elástica ou anticoagulante.",
  },
  {
    name: "Doppler arterial de membros inferiores e superiores",
    about:
      "Ultrassom com Doppler das artérias dos braços ou das pernas. Avalia estreitamentos, placas e a qualidade do pulso — importante na má circulação.",
    how: "Deitado, com gel ao longo do membro. O examinador mede o fluxo em vários pontos. Pode comparar a pressão do tornozelo com a do braço. Dura cerca de 20 a 40 minutos.",
    purposes: [
      "Investigar dor nas pernas ao caminhar (claudicação)",
      "Avaliar má circulação e feridas que cicatrizam mal",
      "Acompanhar diabetes, tabagismo e doença arterial",
      "Controle após cirurgia ou angioplastia",
    ],
    notes: "Evite cremes nas pernas no dia. Informe sintomas e cirurgias vasculares prévias.",
  },
  {
    name: "Bioimpedanciometria",
    about:
      "Avaliação da composição corporal: massa gorda, massa magra, água e, em alguns aparelhos, metabolismo. Complementa o peso da balança.",
    how: "Você sobe na balança ou segura sensores com as mãos e os pés. Uma corrente elétrica fraca, indolor, estima a composição. Leva poucos minutos.",
    purposes: [
      "Acompanhar emagrecimento e ganho de massa muscular",
      "Apoiar nutrição, endocrinologia e check-up",
      "Avaliar retenção de líquido",
      "Monitorar tratamento de obesidade e pós-bariátrica",
    ],
    notes:
      "Evite exercício intenso, refeição pesada e, se possível, esteja com a bexiga confortável. Quem tem marca-passo deve avisar antes.",
  },
  {
    name: "Mapeamento dermatológico de pintas",
    about:
      "Exame das pintas e manchas da pele, muitas vezes com dermatoscópio (lupa com luz). Documenta lesões para comparar em consultas futuras e rastrear câncer de pele.",
    how: "O dermatologista examina o corpo de forma sistemática. Lesões suspeitas são fotografadas ou descritas. Pode durar 20 a 40 minutos, conforme o número de pintas.",
    purposes: [
      "Rastrear melanoma e outros cânceres de pele",
      "Acompanhar pintas que mudam de cor, forma ou tamanho",
      "Avaliar quem tem muitas pintas ou histórico familiar",
      "Decidir se alguma lesão precisa de biópsia",
    ],
    notes:
      "Evite esmalte escuro e maquiagem pesada. Avise pintas que coçam, sangram ou cresceram. Leve fotos antigas, se tiver.",
  },
  {
    name: "Exames laboratoriais (unidade LANAC)",
    about:
      "Coletas de sangue, urina e outros materiais na unidade do laboratório LANAC, no mesmo prédio. Os resultados apoiam diagnóstico e acompanhamento de praticamente todas as especialidades.",
    how: "A coleta de sangue é feita por punção venosa no braço. Urina e outros materiais seguem o frasco e o horário pedidos. O tempo no local costuma ser curto; o prazo do resultado varia conforme o exame.",
    purposes: [
      "Check-up (hemograma, glicose, colesterol, função renal e hepática)",
      "Acompanhar tireoide, diabetes, anemia e infecções",
      "Avaliar hormônios, vitaminas e marcadores pedidos pelo médico",
      "Preparar consultas e cirurgias",
    ],
    notes:
      "Muitos exames pedem jejum. Confirme no agendamento. Leve pedido médico e documento. Hidrate-se, salvo orientação contrária.",
    labTests: lanacLabTests,
  },
];

export const checkupItems = [
  "Eletrocardiograma",
  "Ecocardiograma",
  "Teste ergométrico",
  "Exames vasculares",
  "Ultrassonografia abdominal total",
  "Ultrassonografia de tireoide",
  "Exames laboratoriais de sangue",
  "Exames de urina",
  "Bioimpedanciometria",
  "Avaliação de lesões de pele",
  "Avaliação de função renal",
  "Avaliação nutricional",
] as const;

export const odontologia = {
  professionals: [
    {
      name: "Dr. Cleuber Peixoto",
      registry: "CRO-PR 7036",
      focus: "Odontologia · Implantodontia",
    },
    {
      name: "Dra. Janaína F. S. Peixoto",
      registry: "CRO-PR 3657",
      focus: "Odontologia · Ortodontia",
    },
  ],
  services: [
    "Implantes dentários",
    "Tratamentos odontológicos",
    "Invisalign®",
    "Aparelhos ortodônticos",
  ],
};

export const convenios = [
  { name: "Unimed", logo: "/clinic/convenios/unimed.svg" },
  { name: "Geap Saúde", logo: "/clinic/convenios/geap-saude.svg" },
  { name: "Care Plus", logo: "/clinic/convenios/care-plus.svg" },
  { name: "Postal Saúde", logo: "/clinic/convenios/postal-saude.svg" },
  { name: "Caixa", logo: "/clinic/convenios/caixa.svg" },
  { name: "Banco Central", logo: "/clinic/convenios/banco-central.svg" },
  { name: "Sanepar", logo: "/clinic/convenios/sanepar.svg" },
  { name: "Copel", logo: "/clinic/convenios/copel.svg" },
  { name: "Sinam", logo: "/clinic/convenios/sinam.svg" },
  { name: "Amil", logo: "/clinic/convenios/amil.svg" },
  { name: "SulAmérica", logo: "/clinic/convenios/sulamerica.svg" },
  { name: "Bradesco Saúde", logo: "/clinic/convenios/bradesco-saude.svg" },
] as const;

export const gallery = [
  {
    src: "/clinic/fachada-aerea.jpg",
    alt: "Vista aérea do Centro Médico Mercês",
    caption: "Fachada e estacionamento",
    highlight: false,
  },
  {
    src: "/clinic/galeria-2.jpg",
    alt: "Corredor e área de atendimento",
    caption: "Áreas de atendimento",
    highlight: false,
  },
  {
    src: "/clinic/galeria-3.jpg",
    alt: "Sala de ultrassom e exames",
    caption: "Sala de exames",
    highlight: false,
  },
  {
    src: "/clinic/galeria-5.jpg",
    alt: "Sala de procedimentos",
    caption: "Procedimentos",
    highlight: false,
  },
  {
    src: "/clinic/galeria-6.jpg",
    alt: "Corredor das especialidades",
    caption: "Especialidades",
    highlight: false,
  },
  {
    src: "/clinic/galeria-7.jpg",
    alt: "Área de espera",
    caption: "Ambiente confortável",
    highlight: false,
  },
  {
    src: "/clinic/torre-panoramica.jpg",
    alt: "Torre Panorâmica das Mercês, em Curitiba",
    title: "Ficamos a 200 metros da Torre Panorâmica das Mercês",
    caption: "Ponto Turístico em Curitiba",
    highlight: true,
  },
  {
    src: "/clinic/parque-barigui.jpg",
    alt: "Vista aérea do Parque Barigui, em Curitiba",
    caption: "Próximo ao Parque Barigui",
    highlight: true,
  },
] as const;

export const nav = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#exames", label: "Exames" },
  { href: "/vacinas", label: "Vacinas" },
  { href: "/#checkup", label: "Check-up" },
  { href: "/#convenios", label: "Convênios" },
  { href: "/#contato", label: "Contato" },
  { href: "/#trabalhe-conosco", label: "Trabalhe conosco" },
] as const;

export function whatsappUrl(number: string, text?: string) {
  const msg = text
    ? `?text=${encodeURIComponent(text)}`
    : `?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta no Centro Médico Mercês.")}`;
  return `https://wa.me/${number}${msg}`;
}

export function wazeUrl() {
  const { lat, lng } = clinic.address;
  const q = encodeURIComponent("Centro Médico Mercês");
  return `https://waze.com/ul?ll=${lat},${lng}&q=${q}&navigate=yes&zoom=17`;
}

export const vaccineAudiences = [
  "Crianças",
  "Adolescentes",
  "Adultos",
  "Idosos",
  "Gestantes",
  "Viajantes",
] as const;

export type VaccineAudience = (typeof vaccineAudiences)[number];

export type Vaccine = {
  name: string;
  protects: string;
  about: string;
  indications: string[];
  audiences: VaccineAudience[];
  notes?: string;
};

/** Imunizantes com registro na Anvisa e comercialização na rede privada no Brasil. */
export const vaccines: Vaccine[] = [
  {
    name: "BCG",
    protects: "Formas graves de tuberculose",
    about:
      "Vacina de bactéria viva atenuada (Mycobacterium bovis) que estimula a defesa contra a tuberculose. Não impede toda infecção, mas reduz o risco das formas graves na infância, como a meníngea e a miliar.",
    indications: [
      "Recém-nascidos, de preferência ainda na maternidade",
      "Crianças sem comprovação de dose e sem contraindicação",
      "Não é rotina para adolescentes e adultos saudáveis",
    ],
    audiences: ["Crianças"],
    notes: "Aplicada ao nascer, em geral na maternidade.",
  },
  {
    name: "Hepatite B",
    protects: "Hepatite B",
    about:
      "Vacina recombinante contra o vírus da hepatite B, que pode causar hepatite aguda, infecção crônica, cirrose e câncer de fígado. É uma das vacinas mais usadas na rotina e na proteção de adultos não imunizados.",
    indications: [
      "Recém-nascidos nas primeiras horas de vida",
      "Crianças, adolescentes e adultos sem esquema completo",
      "Gestantes não vacinadas",
      "Profissionais de saúde e pessoas com exposição ocupacional ou sexual",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Gestantes"],
  },
  {
    name: "Hexavalente acelular",
    protects:
      "Difteria, tétano, coqueluche, Haemophilus influenzae B, poliomielite e hepatite B",
    about:
      "Vacina combinada da rede particular que, em uma só aplicação, protege contra seis doenças. Usa componente acelular da coqueluche, em geral com menos reações locais e febre do que as formulações de células inteiras.",
    indications: [
      "Bebês a partir de 2 meses, no esquema primário da rede privada",
      "Reforços do primeiro ano, conforme calendário SBIm",
      "Crianças que precisam atualizar várias vacinas de rotina de uma vez",
    ],
    audiences: ["Crianças"],
    notes: "Combinação usada na rede particular para reduzir o número de injeções.",
  },
  {
    name: "Pentavalente acelular",
    protects:
      "Difteria, tétano, coqueluche, Haemophilus influenzae B e poliomielite",
    about:
      "Vacina combinada acelular que protege contra cinco doenças. É usada na infância, inclusive como reforço, quando a hepatite B já foi coberta em outra vacina.",
    indications: [
      "Bebês e crianças no esquema de rotina da rede privada",
      "Reforço por volta dos 15 meses, conforme orientação do serviço",
      "Atualização de caderneta quando faltam essas doses",
    ],
    audiences: ["Crianças"],
  },
  {
    name: "DTPa infantil",
    protects: "Difteria, tétano e coqueluche (acelular)",
    about:
      "Tríplice bacteriana acelular para crianças. Previne difteria, tétano e coqueluche (pertussis), infecção respiratória que ainda causa surtos e é grave em lactentes.",
    indications: [
      "Crianças no esquema primário e nos reforços da infância",
      "Reforço por volta dos 4 a 6 anos",
      "Quem precisa completar o esquema de tríplice bacteriana",
    ],
    audiences: ["Crianças"],
  },
  {
    name: "dTpa adulto",
    protects: "Difteria, tétano e coqueluche (acelular)",
    about:
      "Versão da tríplice bacteriana com doses ajustadas para adolescentes e adultos. Além de proteger quem toma, reduz a transmissão da coqueluche para bebês.",
    indications: [
      "Adolescentes e adultos a cada 10 anos, no lugar da dT",
      "Toda gestação, a partir da 20ª semana (idealmente 27–36 semanas)",
      "Contatos de recém-nascidos (estratégia do ninho)",
      "Profissionais de saúde e cuidadores de lactentes",
    ],
    audiences: ["Adolescentes", "Adultos", "Idosos", "Gestantes"],
    notes: "Reforço recomendado a cada 10 anos e em toda gestação.",
  },
  {
    name: "dT (dupla adulto)",
    protects: "Difteria e tétano",
    about:
      "Vacina contra difteria e tétano para quem já passou da infância. O tétano não se transmite de pessoa para pessoa: a proteção depende da vacina e de reforços ao longo da vida.",
    indications: [
      "Reforço a cada 10 anos em adolescentes e adultos",
      "Ferimentos de risco, se a última dose tiver mais de 5 anos",
      "Pessoas que nunca completaram o esquema de tétano e difteria",
    ],
    audiences: ["Adolescentes", "Adultos", "Idosos"],
  },
  {
    name: "Poliomielite inativada (VIP)",
    protects: "Poliomielite",
    about:
      "Vacina inativada injetável contra os poliovírus. Substitui a gotinha (vírus vivo) na rede privada e protege contra a paralisia infantil, ainda alvo de vigilância mundial.",
    indications: [
      "Bebês e crianças no esquema de rotina",
      "Reforços da infância",
      "Adultos e viajantes sem comprovação de doses, especialmente para áreas de risco",
    ],
    audiences: ["Crianças", "Adultos", "Viajantes"],
  },
  {
    name: "Rotavírus pentavalente",
    protects: "Gastroenterite por rotavírus (5 sorotipos)",
    about:
      "Vacina oral que protege contra cinco tipos de rotavírus, principal causa de diarreia grave em bebês. A versão pentavalente é a mais usada em clínicas particulares.",
    indications: [
      "Bebês a partir de 2 meses, em esquema de 3 doses",
      "Primeira dose o mais cedo possível, dentro da idade máxima da bula",
      "Não se inicia o esquema após a idade-limite recomendada",
    ],
    audiences: ["Crianças"],
  },
  {
    name: "Rotavírus monovalente",
    protects: "Gastroenterite por rotavírus",
    about:
      "Vacina oral de 2 doses contra o rotavírus. Também previne internamentos por gastroenterite grave no primeiro ano de vida.",
    indications: [
      "Bebês a partir de 2 meses, em 2 doses",
      "Respeito rigoroso à idade máxima para iniciar e terminar o esquema",
      "Alternativa à pentavalente, conforme disponibilidade e orientação",
    ],
    audiences: ["Crianças"],
  },
  {
    name: "Haemophilus influenzae tipo b (Hib)",
    protects: "Meningite, pneumonia e outras infecções por Hib",
    about:
      "Vacina conjugada contra a bactéria Haemophilus influenzae tipo b, que pode causar meningite, epiglotite e pneumonia em crianças pequenas. Em geral já vem nas combinações penta e hexa.",
    indications: [
      "Bebês no primeiro ano de vida",
      "Crianças sem as doses da combinação (penta/hexa)",
      "Pessoas com asplenia ou imunodeficiência, conforme avaliação",
    ],
    audiences: ["Crianças"],
  },
  {
    name: "Pneumocócica conjugada 13-valente (VPC13)",
    protects: "Doença pneumocócica (13 sorotipos)",
    about:
      "Vacina conjugada contra 13 sorotipos de Streptococcus pneumoniae, bactéria da pneumonia, otite, sinusite, meningite e sepse. Foi a principal opção conjugada da rede privada por muitos anos.",
    indications: [
      "Crianças no esquema de rotina, quando essa for a vacina disponível",
      "Adultos e idosos, sozinha ou antes da VPP23",
      "Pessoas com doença crônica, imunossupressão ou sem baço",
    ],
    audiences: ["Crianças", "Adultos", "Idosos"],
  },
  {
    name: "Pneumocócica conjugada 15-valente (VPC15)",
    protects: "Doença pneumocócica (15 sorotipos)",
    about:
      "Vacina conjugada de cobertura ampliada (15 sorotipos). Na rede privada costuma substituir a VPC13 no calendário infantil e em adultos.",
    indications: [
      "Bebês e crianças no esquema conjugado da rede particular",
      "Adultos e idosos que ainda não tomaram vacina pneumocócica conjugada",
      "Grupos de risco para pneumonia e doença invasiva",
    ],
    audiences: ["Crianças", "Adultos", "Idosos"],
  },
  {
    name: "Pneumocócica conjugada 20-valente (VPC20)",
    protects: "Doença pneumocócica (20 sorotipos)",
    about:
      "Vacina conjugada com a maior cobertura de sorotipos entre as conjugadas disponíveis no Brasil. Previne pneumonia e formas invasivas causadas por 20 tipos do pneumococo.",
    indications: [
      "Crianças, conforme calendário atualizado da SBIm/SBP",
      "Adultos e idosos, inclusive como dose única em muitos esquemas",
      "Pessoas com comorbidades respiratórias, cardíacas, diabete ou imunossupressão",
    ],
    audiences: ["Crianças", "Adultos", "Idosos"],
  },
  {
    name: "Pneumocócica 23-valente (VPP23)",
    protects: "Doença pneumocócica (23 sorotipos)",
    about:
      "Vacina polissacarídica com 23 sorotipos. Não substitui a conjugada: amplia a cobertura depois da VPC13, VPC15 ou VPC20, principalmente em idosos e grupos de risco.",
    indications: [
      "Idosos, após a vacina conjugada, conforme o esquema escolhido",
      "Adultos com doença crônica, asplenia ou imunossupressão",
      "Reforço em situações específicas, com intervalo definido pelo serviço",
    ],
    audiences: ["Adultos", "Idosos"],
    notes:
      "Complementa o esquema com vacina conjugada em grupos de risco e idosos.",
  },
  {
    name: "Meningocócica C conjugada",
    protects: "Meningite meningocócica do sorogrupo C",
    about:
      "Vacina conjugada contra o meningococo C, causa clássica de meningite e meningococcemia. Na rede privada, muita gente prefere a ACWY, de cobertura mais ampla.",
    indications: [
      "Lactentes no primeiro ano, se essa for a vacina do esquema",
      "Crianças e adolescentes sem dose prévia contra o sorogrupo C",
      "Situações de surto do sorogrupo C, conforme orientação sanitária",
    ],
    audiences: ["Crianças", "Adolescentes"],
  },
  {
    name: "Meningocócica ACWY",
    protects: "Meningite meningocócica dos sorogrupos A, C, W e Y",
    about:
      "Vacina conjugada contra quatro sorogrupos do meningococo. É a preferida da rede privada para crianças, adolescentes, viajantes e quem vai a grandes aglomerações.",
    indications: [
      "Bebês a partir de 3 meses, com reforços na infância",
      "Adolescentes, mesmo quem já tomou a meningocócica C",
      "Viajantes para áreas de risco ou eventos de massa (peregrinações, acampamentos)",
      "Pessoas com asplenia ou deficiência de complemento",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Viajantes"],
  },
  {
    name: "Meningocócica B",
    protects: "Meningite meningocócica do sorogrupo B",
    about:
      "Vacina contra o meningococo B, um dos sorogrupos mais frequentes de doença meningocócica no Brasil. Não está no calendário universal do SUS para todas as idades; é muito procurada na rede privada.",
    indications: [
      "Bebês a partir de 2–3 meses, com esquema de 2 ou 3 doses e reforço",
      "Crianças e adolescentes não vacinados",
      "Adultos em risco (asplenia, surtos, laboratoristas, alguns viajantes)",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
  },
  {
    name: "Tríplice viral (SCR)",
    protects: "Sarampo, caxumba e rubéola",
    about:
      "Vacina de vírus vivos atenuados contra sarampo, caxumba e rubéola. Duas doses na vida são o padrão para proteção duradoura. Essencial em surtos de sarampo.",
    indications: [
      "Crianças aos 12 meses e reforço aos 15 meses ou 4–6 anos",
      "Adolescentes e adultos sem 2 doses documentadas",
      "Quem vai viajar ou está em área com circulação de sarampo",
      "Não indicada na gestação (vacina de vírus vivo)",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
  },
  {
    name: "Tetraviral (SCR-V)",
    protects: "Sarampo, caxumba, rubéola e varicela",
    about:
      "Combina a tríplice viral com a varicela em uma só injeção. Usada na rede privada para reduzir picadas no segundo ano de vida.",
    indications: [
      "Crianças a partir de 12 meses, como alternativa à SCR + varicela separadas",
      "Reforço do esquema de sarampo/caxumba/rubéola e catapora",
      "Não indicada na gestação",
    ],
    audiences: ["Crianças"],
  },
  {
    name: "Varicela (catapora)",
    protects: "Varicela",
    about:
      "Vacina de vírus vivo atenuado contra o vírus da catapora. Duas doses previnem a doença e suas complicações (infecção de pele, pneumonia, encefalite) e reduzem o risco futuro de herpes-zóster.",
    indications: [
      "Crianças a partir de 12 meses, em 2 doses",
      "Adolescentes e adultos que nunca tiveram catapora nem se vacinaram",
      "Contactantes de pessoas de risco, se ainda suscetíveis",
      "Contraindicada na gestação",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
  },
  {
    name: "Hepatite A",
    protects: "Hepatite A",
    about:
      "Vacina inativada contra o vírus da hepatite A, transmitido por água e alimentos contaminados. A doença costuma ser mais grave em adolescentes e adultos do que em crianças pequenas.",
    indications: [
      "Crianças a partir de 12 meses, em 2 doses na rede privada",
      "Adolescentes e adultos sem história de vacina ou de doença",
      "Viajantes, profissionais de alimentos e pessoas com doença hepática",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Viajantes"],
  },
  {
    name: "Hepatite A + B",
    protects: "Hepatite A e hepatite B",
    about:
      "Vacina combinada para quem precisa se proteger das duas hepatites virais de uma vez. Prática para adolescentes, adultos e viajantes com esquema incompleto.",
    indications: [
      "Adolescentes e adultos sem vacinação prévia contra A e B",
      "Viajantes e pessoas com exposição ocupacional",
      "Pacientes com hepatopatia crônica, após avaliação",
    ],
    audiences: ["Adolescentes", "Adultos", "Viajantes"],
  },
  {
    name: "HPV 9-valente",
    protects: "Infecção pelo HPV e cânceres associados (9 tipos)",
    about:
      "Vacina contra nove tipos do papilomavírus humano, responsáveis pela maior parte dos casos de câncer de colo do útero, além de verrugas genitais e outros cânceres anogenitais e de orofaringe. Funciona melhor antes do início da vida sexual, mas também pode ser indicada depois.",
    indications: [
      "Meninas e meninos a partir dos 9 anos",
      "Adolescentes no esquema de 2 doses (conforme idade)",
      "Adultos até a idade da bula, em 3 doses se iniciado mais tarde",
      "Pessoas com maior risco de doença por HPV, após avaliação",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
    notes: "Recomendada a partir dos 9 anos, para meninas e meninos.",
  },
  {
    name: "Febre amarela",
    protects: "Febre amarela",
    about:
      "Vacina de vírus vivo atenuado contra a febre amarela, doença grave transmitida por mosquitos. Uma dose costuma valer para a vida toda em quem tem boa resposta imune. Exigida ou recomendada em várias regiões do Brasil e em viagens.",
    indications: [
      "Crianças a partir dos 9 meses (e reforço em algumas situações)",
      "Adolescentes e adultos que nunca se vacinaram",
      "Viajantes para áreas de risco no Brasil e no exterior",
      "Contraindicada em gestantes, lactantes de recém-nascidos e imunossuprimidos, salvo avaliação especial",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Viajantes"],
  },
  {
    name: "Influenza tetravalente (gripe)",
    protects: "Gripe (4 cepas da temporada)",
    about:
      "Vacina inativada atualizada todo ano contra quatro cepas do vírus influenza (duas A e duas B). Reduz gripe, pneumonia, internamentos e complicações cardíacas. Na rede privada fica disponível praticamente o ano todo, com a fórmula da temporada.",
    indications: [
      "Todas as pessoas a partir dos 6 meses de idade",
      "Gestantes, puérperas, idosos e pessoas com doença crônica (prioridade)",
      "Profissionais de saúde e quem convive com grupos de risco",
      "Dose anual, de preferência antes do inverno",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Idosos", "Gestantes"],
    notes:
      "Composição atualizada anualmente. Disponível o ano todo na rede privada.",
  },
  {
    name: "Influenza de alta dose (idosos)",
    protects: "Gripe, com formulação reforçada para a terceira idade",
    about:
      "Vacina de gripe com maior quantidade de antígeno, desenvolvida para a resposta imune mais fraca do idoso. Quando disponível, é uma opção da rede privada para a terceira idade.",
    indications: [
      "Pessoas a partir de 60 ou 65 anos, conforme a bula do produto",
      "Idosos que buscam proteção reforçada na temporada de gripe",
      "Dose anual, no lugar da tetravalente padrão nessa faixa etária",
    ],
    audiences: ["Idosos"],
  },
  {
    name: "COVID-19 (composição atualizada)",
    protects: "COVID-19, conforme cepa vigente autorizada pela Anvisa",
    about:
      "Vacinas contra o SARS-CoV-2 com a cepa atualizada pela Anvisa e pelo Ministério da Saúde. Reduzem formas graves, internamentos e mortes, mesmo em quem já teve a doença ou se vacinou em anos anteriores.",
    indications: [
      "Crianças, adolescentes, adultos e idosos conforme a bula vigente",
      "Gestantes e puérperas",
      "Pessoas com comorbidade ou imunossupressão (prioridade de reforço)",
      "Reforços periódicos quando houver nova composição autorizada",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Idosos", "Gestantes"],
  },
  {
    name: "Dengue (Qdenga)",
    protects: "Dengue (quatro sorotipos)",
    about:
      "Vacina viva atenuada tetravalente contra os quatro sorotipos do vírus da dengue. Ajuda a prevenir dengue sintomática e formas graves. A indicação depende da idade da bula e da avaliação clínica.",
    indications: [
      "Pessoas a partir dos 4 anos, até o limite de idade da bula",
      "Quem vive ou viaja para áreas com circulação de dengue",
      "Esquema de 2 doses, com intervalo definido pelo fabricante",
      "Não indicada na gestação nem em imunossuprimidos",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos"],
    notes: "Indicada a partir dos 4 anos, conforme bula e avaliação médica.",
  },
  {
    name: "Herpes-zóster (recombinante)",
    protects: "Herpes-zóster (cobreiro) e neuralgia pós-herpética",
    about:
      "Vacina recombinante (não viva) contra a reativação do vírus da varicela, que causa o cobreiro. A complicação mais temida é a dor persistente (neuralgia pós-herpética), especialmente após os 50 anos.",
    indications: [
      "Adultos a partir dos 50 anos, mesmo quem já teve cobreiro",
      "Pessoas imunocomprometidas a partir dos 18 anos, conforme bula",
      "Esquema de 2 doses",
      "Quem já teve catapora ou se vacinou contra varicela no passado",
    ],
    audiences: ["Adultos", "Idosos"],
    notes: "Indicada a partir dos 50 anos, ou antes em imunossuprimidos.",
  },
  {
    name: "VSR — Arexvy",
    protects:
      "Doença do trato respiratório inferior pelo vírus sincicial respiratório",
    about:
      "Vacina contra o vírus sincicial respiratório (VSR), causa de bronquiolite em bebês e de pneumonia grave em adultos. A Arexvy foi a primeira registrada no Brasil; a Anvisa ampliou o uso para adultos a partir de 18 anos.",
    indications: [
      "Adultos a partir de 18 anos, especialmente com comorbidade",
      "Idosos, faixa em que o VSR mais internamento provoca",
      "Pessoas com doença cardíaca, pulmonar, renal ou imunossupressão",
      "Dose única, conforme orientação do serviço",
    ],
    audiences: ["Adultos", "Idosos"],
    notes:
      "Registrada pela Anvisa; indicação ampliada para adultos a partir de 18 anos.",
  },
  {
    name: "VSR — Abrysvo",
    protects: "VSR no recém-nascido (via gestante) e em adultos",
    about:
      "Vacina contra o VSR usada em gestantes para transferir anticorpos ao bebê e protegê-lo nos primeiros meses, quando a bronquiolite é mais perigosa. Também tem indicação em alguns adultos.",
    indications: [
      "Gestantes, em geral a partir da 24ª semana (idealmente 28–36)",
      "Proteção passiva do recém-nascido até cerca de 6 meses",
      "Alguns adultos, conforme bula e avaliação médica",
      "Uma dose por gestação, se indicada",
    ],
    audiences: ["Adultos", "Gestantes"],
    notes: "Usada na gestação para proteger o bebê nos primeiros meses de vida.",
  },
  {
    name: "Nirsevimabe (imunização contra VSR)",
    protects: "Formas graves de VSR em lactentes",
    about:
      "Não é vacina clássica: é um anticorpo monoclonal de longa duração aplicado no bebê para bloquear o VSR. Usado em clínicas de imunização para reduzir bronquiolite grave no primeiro ano, principalmente na temporada do vírus.",
    indications: [
      "Recém-nascidos e lactentes na temporada de VSR",
      "Bebês prematuros e crianças com doença cardíaca ou pulmonar",
      "Complementa (não substitui) a vacina da gestante, quando esta não foi feita",
      "Dose única intramuscular, conforme peso e bula",
    ],
    audiences: ["Crianças"],
    notes:
      "Anticorpo monoclonal (não é vacina clássica), comercializado em clínicas de imunização.",
  },
  {
    name: "Raiva",
    protects: "Raiva (pré e pós-exposição)",
    about:
      "Vacina inativada contra o vírus da raiva, doença quase sempre fatal depois que os sintomas começam. Pode ser usada antes da exposição (viajantes, profissionais) ou depois de mordedura/arranhas de animal, junto com o soro quando indicado.",
    indications: [
      "Pós-exposição: após mordedura, arranhão ou lambedura de mucosa por animal suspeito",
      "Pré-exposição: veterinários, biólogos, viajantes longos a áreas de risco",
      "Esquema e necessidade de soro antirrábico definidos pelo serviço de saúde",
      "Urgência: quanto antes após o acidente, melhor",
    ],
    audiences: ["Crianças", "Adolescentes", "Adultos", "Viajantes"],
  },
  {
    name: "Febre tifoide",
    protects: "Febre tifoide",
    about:
      "Vacina contra Salmonella Typhi, bactéria da febre tifoide, ligada a água e alimentos contaminados. Indicada sobretudo para viagem a países com saneamento precário.",
    indications: [
      "Viajantes para áreas endêmicas da Ásia, África e América Latina",
      "Pessoas que ficarão em condições de higiene limitada",
      "Profissionais de laboratório com exposição à Salmonella Typhi",
      "Reforço periódico se o risco continuar",
    ],
    audiences: ["Adolescentes", "Adultos", "Viajantes"],
  },
  {
    name: "Cólera (oral)",
    protects: "Cólera",
    about:
      "Vacina oral contra o Vibrio cholerae. Não substitui água tratada e higiene, mas reduz o risco de cólera em viajantes e em situações de surto.",
    indications: [
      "Viajantes para áreas com epidemia ou saneamento muito precário",
      "Equipes de ajuda humanitária e profissionais de saúde em surtos",
      "Adultos, conforme a bula do produto disponível",
      "Esquema oral de 2 doses, antes da viagem",
    ],
    audiences: ["Adultos", "Viajantes"],
  },
];
