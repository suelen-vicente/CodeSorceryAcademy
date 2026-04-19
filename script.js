// Language translations (used by any element with `data-i18n="<key>"`)
const translations = {
  en: {
    brand: "Code Sorcery Academy",
    nav_home: "Home",
    nav_portfolio: "Portfolio",
    nav_tutorials: "Tutorials",
    nav_blog: "Blog",
    footer: "© 2026 Code Sorcery Academy — Forged in Canada 🇨🇦",

    home_hero_title: "Code like a mage — with AI, not magic tricks.",
    home_hero_desc:
      "AI can speed up your first steps. Fundamentals and systems thinking are what make you competent: you understand how things connect, you can question AI output, and you can level up your career.",
    home_cta_primary: "Explore the Path",
    home_cta_secondary: "Get In Touch",

    home_why_title: "The Wand and the Grimoire",
    home_why_desc:
      "AI is a powerful wand. But the grimoire is still yours: how HTTP, databases, queues, caches, and deployment fit together. That’s what turns copy‑paste into engineering.",

    home_pillars_title: "The Four Pillars",
    home_pillars_desc:
      "Speed is useful. Power comes from fundamentals — and from seeing the system as a connected whole.",

    home_pillar_1_title: "AI as an Apprentice",
    home_pillar_1_desc:
      "Use AI to draft, explore, and accelerate — then review with intent, tests, and constraints.",
    home_pillar_2_title: "Know the Mechanics",
    home_pillar_2_desc:
      "Data flows, boundaries, failures, trade-offs. You can’t debug what you don’t understand.",
    home_pillar_3_title: "Connect the System",
    home_pillar_3_desc:
      "Architecture is the map. You learn where each piece belongs and why.",
    home_pillar_4_title: "Career Leverage",
    home_pillar_4_desc:
      "When you can question the output, you can improve it — and lead the direction.",

    home_path_title: "Your Learning Path",
    home_path_desc:
      "A sequence of scrolls focused on building real backend intuition — with AI as support, not a crutch.",
    home_path_1_title: "Scroll I — Foundations",
    home_path_1_desc: "Language, OOP, data structures, and debugging habits.",
    home_path_2_title: "Scroll II — APIs & Web",
    home_path_2_desc: "HTTP, REST, auth, validation, and error handling.",
    home_path_3_title: "Scroll III — Data & Persistence",
    home_path_3_desc: "SQL, modeling, JPA, performance, and migrations.",
    home_path_4_title: "Scroll IV — Cloud & Delivery",
    home_path_4_desc: "Docker, CI/CD, deployment, and environment strategy.",
    home_path_5_title: "Scroll V — Scale & Reliability",
    home_path_5_desc: "Caching, async, observability, and resilience patterns.",
    home_path_cta: "Open the Scrolls",

    home_about_title: "How I Teach",
    home_about_desc:
      "Clear mental models, practical projects, and the habit of explaining “why”. AI is part of the workflow — but you stay in control, from requirements to trade-offs.",

    contact_title: "Get In Touch",
    contact_desc:
      "Want to collaborate, get feedback, or talk backend? Send a message.",

    portfolio_title: "Portfolio of Spells",
    portfolio_desc:
      "Case studies and backend artifacts: systems thinking, trade-offs, and the discipline to review AI-generated code.",
    portfolio_real_title: "Case Studies",
    portfolio_card1_title: "Auth & Permissions Blueprint",
    portfolio_card1_desc:
      "JWT sessions, roles, policy checks, and safe defaults. Designed to be readable — and reviewable.",
    portfolio_card1_stack: "Focus: Spring Security, threat modeling, tests",
    portfolio_card2_title: "Event-Driven Pipeline",
    portfolio_card2_desc:
      "Queues, retries, idempotency, and dead-letter strategies. Built to survive real failures.",
    portfolio_card2_stack: "Focus: messaging, async flow, backpressure",
    portfolio_card3_title: "Observability Grimoire",
    portfolio_card3_desc:
      "Structured logs, metrics, traces, and alerting rules that actually catch incidents.",
    portfolio_card3_stack: "Focus: telemetry, SLOs, debugging workflows",
    portfolio_card4_title: "AI-Assisted Refactor (Safely)",
    portfolio_card4_desc:
      "Using AI to speed up changes without breaking behavior: tests first, small diffs, strong review.",
    portfolio_card4_stack: "Focus: TDD, reviews, incremental design",
    portfolio_view_repo: "View repo",

    tutorials_title: "Ancient Scrolls",
    tutorials_desc:
      "Tutorials designed to make the connections click. Use AI to practice — but learn the mechanisms that make you dangerous (in a good way).",
    tutorials_scroll1_title: "Scroll I — Foundations",
    tutorials_scroll1_desc:
      "Core language skills, OOP, collections, and the debugging mindset that pays forever.",
    tutorials_scroll1_tag1: "OOP",
    tutorials_scroll1_tag2: "Collections",
    tutorials_scroll1_tag3: "Debugging",
    tutorials_scroll1_cta: "Start here →",
    tutorials_scroll2_title: "Scroll II — APIs & Web",
    tutorials_scroll2_desc:
      "HTTP, REST, auth, validation, errors. Where most “AI code” breaks first.",
    tutorials_scroll2_tag1: "HTTP",
    tutorials_scroll2_tag2: "Auth",
    tutorials_scroll2_tag3: "Validation",
    tutorials_scroll2_cta: "Build APIs →",
    tutorials_scroll3_title: "Scroll III — Data & Persistence",
    tutorials_scroll3_desc:
      "SQL, modeling, JPA/Hibernate, query performance, migrations — and real trade-offs.",
    tutorials_scroll3_tag1: "SQL",
    tutorials_scroll3_tag2: "JPA",
    tutorials_scroll3_tag3: "Modeling",
    tutorials_scroll3_cta: "Master data →",
    tutorials_scroll4_title: "Scroll IV — Cloud & Delivery",
    tutorials_scroll4_desc:
      "Docker, CI/CD, deploy strategies, environments, and how to ship without fear.",
    tutorials_scroll4_tag1: "Docker",
    tutorials_scroll4_tag2: "CI/CD",
    tutorials_scroll4_tag3: "Deploy",
    tutorials_scroll4_cta: "Ship it →",
    tutorials_scroll5_title: "Scroll V — Scale & Reliability",
    tutorials_scroll5_desc:
      "Caching, async processing, observability, and resilience patterns.",
    tutorials_scroll5_tag1: "Caching",
    tutorials_scroll5_tag2: "Async",
    tutorials_scroll5_tag3: "Observability",
    tutorials_scroll5_cta: "Scale up →",

    blog_title: "Mage Chronicles",
    blog_desc:
      "Stories from real engineering: building systems, reviewing AI output, and growing from apprentice to senior.",
    blog_post1_date: "April 15, 2026",
    blog_post1_tag: "Philosophy",
    blog_post1_title: "AI Is a Wand, Not a Brain",
    blog_post1_desc:
      "How to use AI daily without losing your fundamentals — and why “understanding the connections” is the real multiplier.",
    blog_post1_cta: "Read the chronicle →",
    blog_post2_date: "March 28, 2026",
    blog_post2_tag: "Deep Dive",
    blog_post2_title: "How to Review AI-Generated Code",
    blog_post2_desc:
      "A pragmatic checklist: correctness, security, performance, maintainability, and the missing tests.",
    blog_post2_cta: "Open the checklist →",
    blog_post3_date: "March 10, 2026",
    blog_post3_tag: "Career",
    blog_post3_title: "From Junior to Competent",
    blog_post3_desc:
      "Skills that compound: mental models, system maps, and learning to ask better questions than the tool.",
    blog_post3_cta: "Follow the path →",
    blog_post4_date: "February 22, 2026",
    blog_post4_tag: "Architecture",
    blog_post4_title: "Monolith, Modular Monolith, Microservices",
    blog_post4_desc:
      "Choosing complexity on purpose: boundaries, deployability, and the cost of “distributed magic”.",
    blog_post4_cta: "Compare trade-offs →",
    blog_post5_date: "February 5, 2026",
    blog_post5_tag: "DevOps",
    blog_post5_title: "Shipping Rituals That Work",
    blog_post5_desc:
      "CI/CD practices that keep teams fast: small batches, observability, and rollback strategies.",
    blog_post5_cta: "Learn the rituals →"
  },
  pt: {
    brand: "Code Sorcery Academy",
    nav_home: "Início",
    nav_portfolio: "Portfólio",
    nav_tutorials: "Tutoriais",
    nav_blog: "Blog",
    footer: "© 2026 Code Sorcery Academy — Forjada no Canadá 🇨🇦",

    home_hero_title: "Codifique como um mago — com IA, sem truque.",
    home_hero_desc:
      "A IA acelera seus primeiros passos. Fundamentos e visão de sistemas te tornam competente: você entende como as coisas se conectam, questiona o código gerado e sobe o nível da sua carreira.",
    home_cta_primary: "Ver a Trilha",
    home_cta_secondary: "Entrar em Contato",

    home_why_title: "A Varinha e o Grimório",
    home_why_desc:
      "IA é uma varinha poderosa. Mas o grimório ainda é seu: como HTTP, banco, filas, cache e deploy se encaixam. Isso é o que transforma copy‑paste em engenharia.",

    home_pillars_title: "Os Quatro Pilares",
    home_pillars_desc:
      "Velocidade ajuda. Poder vem de fundamentos — e de enxergar o sistema como um todo conectado.",

    home_pillar_1_title: "IA como Aprendiz",
    home_pillar_1_desc:
      "Use IA para rascunhar e explorar — depois revise com intenção, testes e restrições reais.",
    home_pillar_2_title: "Entenda a Mecânica",
    home_pillar_2_desc:
      "Fluxo de dados, limites, falhas, trade-offs. Você não debuga o que não entende.",
    home_pillar_3_title: "Conecte o Sistema",
    home_pillar_3_desc:
      "Arquitetura é o mapa. Você aprende onde cada peça mora e por quê.",
    home_pillar_4_title: "Alavanca de Carreira",
    home_pillar_4_desc:
      "Quando você questiona a saída, você melhora o sistema — e guia a direção.",

    home_path_title: "Sua Trilha",
    home_path_desc:
      "Uma sequência de pergaminhos para construir intuição real de backend — com IA como apoio, não muleta.",
    home_path_1_title: "Pergaminho I — Fundamentos",
    home_path_1_desc: "Linguagem, OOP, estruturas e hábitos de debug.",
    home_path_2_title: "Pergaminho II — APIs & Web",
    home_path_2_desc: "HTTP, REST, auth, validação e erros.",
    home_path_3_title: "Pergaminho III — Dados & Persistência",
    home_path_3_desc: "SQL, modelagem, JPA, performance e migrações.",
    home_path_4_title: "Pergaminho IV — Cloud & Entrega",
    home_path_4_desc: "Docker, CI/CD, deploy e estratégia de ambientes.",
    home_path_5_title: "Pergaminho V — Escala & Confiabilidade",
    home_path_5_desc: "Cache, async, observabilidade e resiliência.",
    home_path_cta: "Abrir os Pergaminhos",

    home_about_title: "Como Eu Ensino",
    home_about_desc:
      "Modelos mentais claros, projetos práticos e o hábito de explicar o “por quê”. IA faz parte do fluxo — mas você fica no controle, do requisito ao trade-off.",

    contact_title: "Entre em Contato",
    contact_desc:
      "Quer colaborar, pedir feedback ou falar sobre backend? Manda uma mensagem.",

    portfolio_title: "Portfólio de Feitiços",
    portfolio_desc:
      "Estudos de caso e artefatos de backend: visão de sistemas, trade-offs e disciplina para revisar código gerado por IA.",
    portfolio_real_title: "Estudos de Caso",
    portfolio_card1_title: "Blueprint de Auth & Permissões",
    portfolio_card1_desc:
      "Sessões JWT, roles, checagem de políticas e defaults seguros. Feito para ser legível — e revisável.",
    portfolio_card1_stack: "Foco: Spring Security, threat modeling, testes",
    portfolio_card2_title: "Pipeline Orientado a Eventos",
    portfolio_card2_desc:
      "Filas, retries, idempotência e estratégias de dead-letter. Construído para aguentar falhas reais.",
    portfolio_card2_stack: "Foco: mensageria, fluxo async, backpressure",
    portfolio_card3_title: "Grimório de Observabilidade",
    portfolio_card3_desc:
      "Logs estruturados, métricas, traces e alertas que pegam incidente de verdade.",
    portfolio_card3_stack: "Foco: telemetria, SLOs, debug em produção",
    portfolio_card4_title: "Refatoração com IA (Com Segurança)",
    portfolio_card4_desc:
      "Usando IA para acelerar mudanças sem quebrar comportamento: testes primeiro, diffs pequenos, review forte.",
    portfolio_card4_stack: "Foco: TDD, revisão, design incremental",
    portfolio_view_repo: "Ver repo",

    tutorials_title: "Pergaminhos Antigos",
    tutorials_desc:
      "Tutoriais para fazer as conexões “clicarem”. Use IA para praticar — mas aprenda a mecânica que te dá poder.",
    tutorials_scroll1_title: "Pergaminho I — Fundamentos",
    tutorials_scroll1_desc:
      "Base de linguagem, OOP, collections e a mentalidade de debug que rende para sempre.",
    tutorials_scroll1_tag1: "OOP",
    tutorials_scroll1_tag2: "Collections",
    tutorials_scroll1_tag3: "Debug",
    tutorials_scroll1_cta: "Começar →",
    tutorials_scroll2_title: "Pergaminho II — APIs & Web",
    tutorials_scroll2_desc:
      "HTTP, REST, auth, validação, erros. Onde a maioria do “código de IA” quebra primeiro.",
    tutorials_scroll2_tag1: "HTTP",
    tutorials_scroll2_tag2: "Auth",
    tutorials_scroll2_tag3: "Validação",
    tutorials_scroll2_cta: "Construir APIs →",
    tutorials_scroll3_title: "Pergaminho III — Dados & Persistência",
    tutorials_scroll3_desc:
      "SQL, modelagem, JPA/Hibernate, performance de query, migrações — e trade-offs reais.",
    tutorials_scroll3_tag1: "SQL",
    tutorials_scroll3_tag2: "JPA",
    tutorials_scroll3_tag3: "Modelagem",
    tutorials_scroll3_cta: "Dominar dados →",
    tutorials_scroll4_title: "Pergaminho IV — Cloud & Entrega",
    tutorials_scroll4_desc:
      "Docker, CI/CD, estratégias de deploy, ambientes, e como entregar sem medo.",
    tutorials_scroll4_tag1: "Docker",
    tutorials_scroll4_tag2: "CI/CD",
    tutorials_scroll4_tag3: "Deploy",
    tutorials_scroll4_cta: "Entregar →",
    tutorials_scroll5_title: "Pergaminho V — Escala & Confiabilidade",
    tutorials_scroll5_desc:
      "Cache, processamento assíncrono, observabilidade e padrões de resiliência.",
    tutorials_scroll5_tag1: "Cache",
    tutorials_scroll5_tag2: "Async",
    tutorials_scroll5_tag3: "Observabilidade",
    tutorials_scroll5_cta: "Escalar →",

    blog_title: "Crônicas do Mago",
    blog_desc:
      "Histórias de engenharia real: construir sistemas, revisar saída de IA e crescer de aprendiz a sênior.",
    blog_post1_date: "15 de abril de 2026",
    blog_post1_tag: "Filosofia",
    blog_post1_title: "IA É Varinha, Não Cérebro",
    blog_post1_desc:
      "Como usar IA todo dia sem perder fundamentos — e por que “entender as conexões” é o multiplicador.",
    blog_post1_cta: "Ler crônica →",
    blog_post2_date: "28 de março de 2026",
    blog_post2_tag: "Deep Dive",
    blog_post2_title: "Como Revisar Código Gerado por IA",
    blog_post2_desc:
      "Checklist pragmática: corretude, segurança, performance, manutenção e os testes que faltam.",
    blog_post2_cta: "Abrir checklist →",
    blog_post3_date: "10 de março de 2026",
    blog_post3_tag: "Carreira",
    blog_post3_title: "De Júnior a Competente",
    blog_post3_desc:
      "Habilidades que acumulam: modelos mentais, mapa do sistema e aprender a perguntar melhor que a ferramenta.",
    blog_post3_cta: "Seguir caminho →",
    blog_post4_date: "22 de fevereiro de 2026",
    blog_post4_tag: "Arquitetura",
    blog_post4_title: "Monólito, Monólito Modular, Microsserviços",
    blog_post4_desc:
      "Escolhendo complexidade de propósito: limites, deploy e o custo da “magia distribuída”.",
    blog_post4_cta: "Comparar trade-offs →",
    blog_post5_date: "5 de fevereiro de 2026",
    blog_post5_tag: "DevOps",
    blog_post5_title: "Rituais de Entrega que Funcionam",
    blog_post5_desc:
      "Práticas de CI/CD que mantêm o time rápido: lotes pequenos, observabilidade e rollback.",
    blog_post5_cta: "Aprender rituais →"
  }
};

// Current language
let currentLang = localStorage.getItem('lang');
if (!currentLang) {
  const browserLang = (navigator.language || '').toLowerCase();
  currentLang = browserLang.startsWith('pt') ? 'pt' : 'en';
}

// Function to switch language
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  updateLanguage();
}

// Function to update text based on language
function updateLanguage() {
  const t = translations[currentLang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = t[key];
    if (typeof val === 'string') el.textContent = val;
  });

  // Update document lang
  document.documentElement.lang = currentLang;

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = currentLang === 'en' ? '🇧🇷' : '🇺🇸';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Language toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      switchLanguage(currentLang === 'en' ? 'pt' : 'en');
    });
  }
  updateLanguage();
});

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
