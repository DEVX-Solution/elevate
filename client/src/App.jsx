import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Palette,
  Zap,
  ShoppingCart,
  BarChart3,
  Search,
  Wrench,
  Code2,
  Rocket,
  Layers,
  UploadCloud,
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const whatsappNumber = "5511999999999";
const email = "contato@elevate.com.br";
const instagramUrl = "https://www.instagram.com";
const linkedinUrl = "https://www.linkedin.com/";
const sections = ["servicos", "processo", "portfolio", "contato"];

const techs = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "AWS", "Vercel"];

const services = [
  {
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para transformar visitantes em clientes. Design focado em resultado.",
    Icon: Palette,
  },
  {
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade e posicionam sua marca como referência no mercado.",
    Icon: Zap,
  },
  {
    title: "E-commerce",
    description: "Lojas virtuais com checkout otimizado, integração de pagamento e painel administrativo completo.",
    Icon: ShoppingCart,
  },
  {
    title: "Dashboards & SaaS",
    description: "Aplicações web complexas com painéis analíticos, autenticação e integração com APIs externas.",
    Icon: BarChart3,
  },
  {
    title: "SEO Técnico",
    description: "Otimização completa para mecanismos de busca: velocidade, Core Web Vitals e estrutura semântica.",
    Icon: Search,
  },
  {
    title: "Manutenção & Suporte",
    description: "Cuidamos do seu site continuamente: atualizações, segurança, backups e suporte técnico 24/7.",
    Icon: Wrench,
  },
];

const processSteps = [
  {
    num: "01 / DESCOBERTA",
    title: "Briefing & Estratégia",
    description: "Entendemos seu negócio, público e objetivos para criar a estratégia digital certa.",
    Icon: Search,
  },
  {
    num: "02 / DESIGN",
    title: "Prototipagem Visual",
    description: "Criamos o design completo com foco em UX, conversão e identidade da marca.",
    Icon: Layers,
  },
  {
    num: "03 / DESENVOLVIMENTO",
    title: "Código de Qualidade",
    description: "Desenvolvemos com as melhores tecnologias, garantindo velocidade e escalabilidade.",
    Icon: Code2,
  },
  {
    num: "04 / ENTREGA",
    title: "Deploy & Suporte",
    description: "Publicamos, testamos e acompanhamos para garantir que tudo funcione perfeitamente.",
    Icon: UploadCloud,
  },
];

const portfolio = [
  { name: "Kairos", type: "Landing Page", result: "+240% conversão", url: "#contato" },
  { name: "MetricLab", type: "Dashboard SaaS", result: "99/100 performance", url: "#contato" },
  { name: "Nova Store", type: "E-commerce", result: "+72% vendas", url: "#contato" },
];

function getWhatsappLink(source = "site") {
  const message = `Olá, Elevate! Quero iniciar um projeto. Vim pelo ${source}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function Logo() {
  return (
    <a href="#" className="font-mono text-xl tracking-wide text-lightx">
      Elevate<span className="text-cyanx">.</span>
    </a>
  );
}

function NavLink({ id, active, children, onClick }) {
  return (
    <a
      href={`#${id}`}
      onClick={onClick}
      className={`relative text-sm font-medium tracking-wide transition ${
        active === id ? "text-cyanx" : "text-mutedx hover:text-cyanx"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-cyanx transition-all ${
          active === id ? "w-full" : "w-0"
        }`}
      />
    </a>
  );
}

function CodeMockup() {
  return (
    <div className="relative w-[340px] rounded border border-cyanx/15 bg-surface px-7 py-6 font-mono text-xs leading-7 shadow-cyan">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanx to-transparent" />
      <div className="mb-5 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28CA42]" />
      </div>

      <p className="text-slate-600">// elevate.config.js</p>
      <p><span className="text-cyanx">const</span> <span className="text-bluex">project</span> = {"{"}</p>
      <p>&nbsp;&nbsp;<span className="text-cyanx">performance</span>: <span className="text-pink-400">"99/100"</span>,</p>
      <p>&nbsp;&nbsp;<span className="text-cyanx">seo</span>: <span className="text-pink-400">"optimized"</span>,</p>
      <p>&nbsp;&nbsp;<span className="text-cyanx">design</span>: <span className="text-violet-400">"elite"</span>,</p>
      <p>&nbsp;&nbsp;<span className="text-cyanx">conversion</span>: <span className="text-pink-400">"+240%"</span></p>
      <p>{"}"}</p>
      <br />
      <p className="text-slate-600">// Result: your business grows.</p>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("servicos");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "servicos";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY + 180 >= section.offsetTop) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  function registerContact(source) {
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source }),
    }).catch(() => {});
  }

  return (
    <main className="min-h-screen bg-elevateBg text-textx">
      <nav className="fixed top-0 z-50 h-[70px] w-full border-b border-cyanx/10 bg-elevateBg/80 px-6 backdrop-blur-2xl md:px-16">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-10 lg:flex">
            <NavLink id="servicos" active={activeSection}>Serviços</NavLink>
            <NavLink id="processo" active={activeSection}>Processo</NavLink>
            <NavLink id="portfolio" active={activeSection}>Portfólio</NavLink>
          </div>

          <a
            href={getWhatsappLink("botão iniciar projeto")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => registerContact("nav")}
            className="hidden border border-cyanx/40 px-6 py-2 font-mono text-xs tracking-wider text-cyanx transition hover:border-cyanx hover:bg-cyanx/10 hover:shadow-cyan md:inline-flex"
          >
            Iniciar Projeto <ArrowRight size={14} className="ml-2" />
          </a>

          <button
            className="grid h-11 w-11 place-items-center border border-cyanx/30 text-cyanx lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="grid gap-5 border-t border-cyanx/10 bg-elevateBg/95 px-2 py-6 lg:hidden">
            <NavLink id="servicos" active={activeSection} onClick={closeMenu}>Serviços</NavLink>
            <NavLink id="processo" active={activeSection} onClick={closeMenu}>Processo</NavLink>
            <NavLink id="portfolio" active={activeSection} onClick={closeMenu}>Portfólio</NavLink>
            <NavLink id="contato" active={activeSection} onClick={closeMenu}>Contato</NavLink>
          </div>
        )}
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 md:px-16">
        <div className="animated-grid absolute inset-0" />
        <div className="absolute -right-24 -top-48 h-[600px] w-[600px] rounded-full bg-cyanx/5 blur-[100px]" />
        <div className="absolute bottom-[-100px] left-[30%] h-[400px] w-[400px] rounded-full bg-violetx/10 blur-[100px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1fr_.65fr]">
          <div className="max-w-3xl">
            <div className="slide-up mb-8 inline-flex items-center gap-3 rounded-full border border-cyanx/20 bg-cyanx/10 px-4 py-2 font-mono text-xs tracking-wider text-cyanx">
              <span className="pulse-dot h-2 w-2 rounded-full bg-cyanx" />
              Disponível para novos projetos
            </div>

            <h1 className="slide-up text-4xl font-bold leading-[1.05] tracking-[-.04em] text-lightx sm:text-5xl md:text-7xl lg:text-8xl">
              Construímos sites que{" "}
              <span className="gradient-text">vendem enquanto você dorme.</span>
            </h1>

            <p className="slide-up mt-7 max-w-xl text-lg leading-8 text-mutedx">
              Design estratégico e desenvolvimento de alta performance para marcas que querem crescer digitalmente.
            </p>

            <div className="slide-up mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href={getWhatsappLink("hero")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => registerContact("hero")}
                className="inline-flex justify-center items-center gap-3 rounded-sm bg-gradient-to-br from-cyanx2 to-bluex px-8 py-4 font-semibold text-white shadow-cyan transition hover:-translate-y-1 hover:shadow-cyanStrong"
              >
                Começar Projeto <ArrowRight size={18} />
              </a>

              <a
                href="#portfolio"
                className="inline-flex justify-center items-center gap-3 rounded-sm border border-cyanx/10 px-8 py-4 font-medium text-textx transition hover:border-cyanx/40 hover:text-cyanx"
              >
                Ver Portfólio
              </a>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <CodeMockup />
          </div>
        </div>
      </section>

      <section className="border-y border-cyanx/10 px-6 py-14 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-10">
          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[.2em] text-mutedx">
            Stack utilizado <ArrowRight size={14} className="inline" />
          </span>

          <div className="flex flex-wrap gap-4">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-slate-200/10 px-4 py-2 font-mono text-xs text-slate-300/40 transition hover:border-cyanx/40 hover:text-cyanx"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-28 md:px-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyanx">// O que construímos</p>
        <h2 className="mb-16 text-4xl font-bold leading-tight tracking-[-.03em] text-lightx md:text-6xl">
          Soluções digitais
          <br />
          de alta performance
        </h2>

        <div className="grid gap-px bg-cyanx/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden bg-elevateBg p-10 transition hover:bg-elevateBg2"
            >
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyanx to-bluex transition-all duration-500 group-hover:w-full" />

              <div className="mb-7 grid h-12 w-12 place-items-center rounded border border-cyanx/20 bg-cyanx/10 text-cyanx transition group-hover:border-cyanx/40 group-hover:shadow-cyan">
                <Icon size={25} />
              </div>

              <h3 className="text-xl font-semibold text-lightx">{title}</h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-mutedx">{description}</p>

              <a
                href="#portfolio"
                className="mt-7 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-cyanx opacity-0 transition group-hover:opacity-100"
              >
                Ver exemplos <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="processo" className="bg-elevateBg2 px-6 py-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyanx">// Como trabalhamos</p>
          <h2 className="text-4xl font-bold leading-tight tracking-[-.03em] text-lightx md:text-6xl">
            Do briefing ao ar
            <br />
            em 4 semanas
          </h2>

          <div className="mt-16 grid gap-px bg-cyanx/10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ num, title, description, Icon }, index) => (
              <article key={num} className="relative bg-elevateBg2 p-9">
                <span className="mb-6 block font-mono text-xs uppercase tracking-[.2em] text-cyanx">{num}</span>
                <div className="mb-6 grid h-12 w-12 place-items-center border border-cyanx/20 bg-cyanx/10 text-cyanx">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-lightx">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-mutedx">{description}</p>

                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute right-[-15px] top-1/2 z-10 hidden -translate-y-1/2 text-cyanx lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-28 md:px-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-cyanx">// Portfólio selecionado</p>
        <h2 className="mb-16 text-4xl font-bold leading-tight tracking-[-.03em] text-lightx md:text-6xl">
          Projetos criados
          <br />
          para vender mais
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {portfolio.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : undefined}
              rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded border border-cyanx/10 bg-surface p-7 transition hover:-translate-y-2 hover:border-cyanx/40 hover:shadow-cyan"
            >
              <div className="mb-10 flex justify-between">
                <span className="font-mono text-xs uppercase tracking-[.2em] text-mutedx">{item.type}</span>
                <ExternalLink className="text-cyanx opacity-40 transition group-hover:opacity-100" size={19} />
              </div>
              <h3 className="text-3xl font-bold text-lightx">{item.name}</h3>
              <p className="mt-3 text-cyanx">{item.result}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden px-6 py-28 text-center md:px-16">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanx/5 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold leading-tight tracking-[-.04em] text-lightx md:text-7xl">
            Pronto para <span className="gradient-text">elevar</span>
            <br />
            seu negócio?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-mutedx">
            Fale com a gente e receba um diagnóstico gratuito do seu projeto digital.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={getWhatsappLink("CTA final")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => registerContact("cta")}
              className="inline-flex justify-center items-center gap-3 rounded-sm bg-gradient-to-br from-cyanx2 to-bluex px-10 py-4 font-semibold text-white shadow-cyan transition hover:-translate-y-1 hover:shadow-cyanStrong"
            >
              <MessageCircle size={19} />
              Iniciar Conversa
            </a>

            <a
              href={`mailto:${email}?subject=Projeto com a Elevate`}
              className="inline-flex justify-center items-center gap-3 rounded-sm border border-cyanx/20 px-10 py-4 font-medium text-cyanx transition hover:bg-cyanx/10"
            >
              <Mail size={19} />
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-cyanx/10 px-6 py-14 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <Logo />
          <p className="font-mono text-xs tracking-wider text-mutedx">
            © 2024 Elevate. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-7">
            <a href="#" className="text-sm text-mutedx transition hover:text-cyanx">Privacidade</a>
            <a href="#" className="text-sm text-mutedx transition hover:text-cyanx">Termos</a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-mutedx transition hover:text-cyanx">
              <Instagram size={16} /> Instagram
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-mutedx transition hover:text-cyanx">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
