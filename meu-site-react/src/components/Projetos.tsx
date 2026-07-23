import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  nome: string;
  descricao: string;
  tecnologias: string[];
  linkGithub: string;
  imagem?: string;
  imagens?: string[];
  sector: string;
}

export default function Projetos() {
  const meusProjetos: Project[] = [
    {
      nome: 'Leitor Crítico Web',
      descricao: 'Aplicação web com integração direta à API do Google Books para busca e gestão de leituras.',
      tecnologias: ['Node.js', 'API Rest', 'CSS Grid', 'Google Books API'],
      imagem: '/LeitorCritico.jpg',
      linkGithub: 'https://github.com/Gudereck/Leitor-critico-web',
      sector: 'WEB_SERVICES',
    },
    {
      nome: 'AtivoFlow',
      descricao: 'Sistema de gestão de ativos de TI e suporte técnico (chamados). Desenvolvido com arquitetura organizada e banco de dados relacional.',
      tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST API'],
      imagens: ['/ativoflow1.png', '/ativoflow2.png', '/ativoflow3.png'],
      linkGithub: 'https://github.com/Gudereck/AtivoFlow',
      sector: 'ENTERPRISE_SYS',
    },
    {
      nome: 'PvBanks',
      descricao: 'Sistema bancário simulado e completo (FullStack) com painel de transações, gráficos de despesas e investimentos integrados à API do Banco Central.',
      tecnologias: ['Angular', 'Spring Boot', 'Java', 'Spring Security', 'ApexCharts'],
      imagens: ['/pvbanks1.png', '/pvbanks2.png', '/pvbanks3.png', '/pvbanks4.png'],
      linkGithub: 'https://github.com/Gudereck/PvBanks-FullStack',
      sector: 'FINANCIAL_CORE',
    },
    {
      nome: 'Sistema de Controle Financeiro',
      descricao: 'Projeto desktop de gerenciamento financeiro pessoal ou empresarial, com geração de relatórios estruturados e estruturação de tabelas relacionais.',
      tecnologias: ['Java', 'Swing', 'MySQL', 'Spring Boot', 'Hibernate'],
      imagem: '/Financeiro.png',
      linkGithub: 'https://github.com/Gudereck/ProjetoFinanceiro',
      sector: 'LOCAL_DESKTOP',
    },
  ];

  return (
    <section className="py-24 px-6 relative font-mono" id="projetos">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-widest text-red-500 uppercase mb-2"
          >
            // REGISTRY_QUERY --PROJECTS
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase"
          >
            Módulos de Sistema Desenvolvidos
          </motion.h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {meusProjetos.map((projeto, index) => (
            <ProjectCard key={projeto.nome} projeto={projeto} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ projeto, index }: { projeto: Project; index: number }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const isCarousel = !!projeto.imagens;
  const slideCount = projeto.imagens?.length || 0;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIdx((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveIdx((prev) => (prev + 1) % slideCount);
  };

  // Convert index into hexadecimal standard
  const moduleHex = `0${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring' as const,
        stiffness: 120,
        damping: 20,
        delay: index * 0.08,
      }}
      whileHover={{ y: -4 }}
      className="flex flex-col h-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950/60 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.05)] transition-all duration-300 corner-box card-scan-hover"
    >
      
      {/* Module HUD Header */}
      <div className="bg-zinc-900/40 border-b border-zinc-800 px-4 py-2 flex items-center justify-between text-[9px] tracking-widest text-zinc-500 select-none">
        <div className="data-flicker">
          MODULE_{moduleHex} // SECTOR: {projeto.sector}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-red-500 animate-ping" />
          <span className="text-red-500 data-flicker-2">ONLINE</span>
        </div>
      </div>

      {/* Project Media (Image / Carousel) */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800 group">
        {/* CRT Scanline simulator inside image */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-40" />

        {isCarousel ? (
          <div className="w-full h-full relative">
            {/* Carousel navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded border border-red-500/25 bg-black/80 text-red-500 hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95 transition-all z-20 flex items-center justify-center text-[10px]"
              aria-label="Foto anterior"
            >
              [
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded border border-red-500/25 bg-black/80 text-red-500 hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95 transition-all z-20 flex items-center justify-center text-[10px]"
              aria-label="Próxima foto"
            >
              ]
            </button>

            {/* Slide */}
            <div className="w-full h-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={projeto.imagens?.[activeIdx]}
                  alt={`Screenshot ${activeIdx + 1} do projeto ${projeto.nome}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-cover select-none brightness-[0.85] contrast-[1.05]"
                />
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {projeto.imagens?.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveIdx(idx);
                  }}
                  className={`h-1.5 transition-all duration-300 ${
                    idx === activeIdx ? 'w-4 bg-red-500' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <img
            src={projeto.imagem}
            alt={`Capa do projeto ${projeto.nome}`}
            className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] group-hover:scale-102 transition-transform duration-700 ease-out select-none"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white tracking-wide uppercase">{projeto.nome}</h3>
          <p className="text-zinc-400 text-xs font-light leading-relaxed text-justify">{projeto.descricao}</p>
        </div>

        <div className="space-y-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tech) => (
              <span
                key={tech}
                className="text-[9px] tracking-widest font-semibold px-2 py-0.5 rounded border border-zinc-800 bg-zinc-950 text-zinc-500 select-none"
              >
                {tech.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-zinc-800">
            <motion.a
              whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(239,68,68,0.2)' }}
              whileTap={{ scale: 0.98 }}
              href={projeto.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 w-full text-xs font-semibold rounded border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-500 hover:text-red-400 transition-all shadow-sm"
            >
              <i className="fa-brands fa-github text-sm"></i>
              CONNECT_UPLINK // GITHUB
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
