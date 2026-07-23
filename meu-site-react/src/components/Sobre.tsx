import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  nome: string;
  icone: string;
  pct: number; // 0–100
}

export default function Sobre() {
  const nome = 'Gustavo de Deus';
  const tituloText = 'Desenvolvedor Back-end | DevOps';
  const fotoPerfil = '/foto-perfil.jpg';
  const resumo =
    'Atualmente cursando Sistemas de Informação e com formação técnica em Informática para Internet, construí uma base sólida de resolução de problemas atuando com manutenção de TI. Meu foco absoluto é o desenvolvimento back-end, criando arquiteturas escaláveis, estruturação de bancos de dados e integrações eficientes utilizando Java. Sou apaixonado por lógica e estou em busca da minha primeira oportunidade oficial como desenvolvedor ou estagiário back-end para agregar valor a projetos reais.';

  const habilidadesPrincipais: Skill[] = [
    { nome: 'Java',        icone: 'devicon-java-plain',       pct: 88 },
    { nome: 'Spring Boot', icone: 'devicon-spring-plain',     pct: 80 },
    { nome: 'Node.js',     icone: 'devicon-nodejs-plain',     pct: 72 },
    { nome: 'Angular',     icone: 'devicon-angularjs-plain',  pct: 68 },
    { nome: 'MongoDB',     icone: 'devicon-mongodb-plain',    pct: 65 },
    { nome: 'MySQL',       icone: 'devicon-mysql-plain',      pct: 75 },
    { nome: 'Docker',      icone: 'devicon-docker-plain',     pct: 70 },
    { nome: 'Linux',       icone: 'devicon-linux-plain',      pct: 78 },
  ];

  // Typewriter effect
  const [typedText, setTypedText] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + tituloText.charAt(index));
      index++;
      if (index >= tituloText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Skill bar intersection trigger
  const skillsRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsVisible(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1, y: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-20 px-6 font-mono" id="sobre">
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Sci-Fi Photo Scanner */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative p-4 border border-red-500/20 bg-zinc-950/60 corner-box neon-pulse-border">
              {/* HUD Scanner lines */}
              <div className="absolute top-2 left-2 text-[7px] text-red-500/40 select-none data-flicker">
                TARGET_SCANNER_V3
              </div>
              <div className="absolute bottom-2 right-2 text-[7px] text-red-500/40 select-none data-flicker-2">
                LOCK_ACQUIRED
              </div>

              {/* Radial target sweep */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 overflow-hidden border border-red-500/10">
                <img
                  src={fotoPerfil}
                  alt="Foto de Perfil do Gustavo"
                  className="w-full h-full object-cover hover:scale-102 transition-all duration-700 select-none"
                  onError={(e) => {
                    e.currentTarget.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=Gustavo';
                  }}
                />
                {/* Horizontal scanning line */}
                <motion.div
                  className="absolute inset-x-0 h-[2px] bg-red-500 shadow-[0_0_8px_#ef4444] z-10"
                  animate={{ y: [0, 256, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              {/* Coordinates tags */}
              <div className="absolute -bottom-6 left-0 text-[8px] text-zinc-500 tracking-widest data-flicker">
                LAT: 37.7749 // LON: -122.4194
              </div>
            </div>

            {/* Social Uplinks */}
            <div className="flex gap-4 mt-12 w-full max-w-[250px]">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/Gudereck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded border border-zinc-800 bg-zinc-950/40 text-xs text-zinc-400 hover:text-white transition-all shadow-md font-mono"
              >
                <i className="fa-brands fa-github text-sm" />
                GITHUB
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/gustavo-de-deus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded border border-zinc-800 bg-zinc-950/40 text-xs text-zinc-400 hover:text-white transition-all shadow-md font-mono"
              >
                <i className="fa-brands fa-linkedin text-sm" />
                LINKEDIN
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Terminal Profile Log */}
          <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col space-y-6">
            {/* Terminal Window Header */}
            <div className="border border-red-500/10 bg-zinc-950/65 rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-zinc-900/60 px-4 py-2 border-b border-red-500/10 flex items-center justify-between text-xs select-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="ml-2 text-zinc-400 text-[10px] tracking-widest font-bold data-flicker">GUSTAVO@TERMINAL:~</span>
                </div>
                <span className="text-[9px] text-zinc-600">UTF-8</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 space-y-4 text-xs md:text-sm">
                <div>
                  <span className="text-zinc-500">$ cat gustavo_name.sh</span>
                  <p className="text-white text-lg md:text-xl font-bold mt-1 tracking-tight glitch-periodic">
                    &gt; <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">{nome}</span>
                  </p>
                </div>

                <div>
                  <span className="text-zinc-500">$ query --occupation</span>
                  <div className="h-6 flex items-center mt-1">
                    <span className="text-orange-500/90 cursor-blink pr-1 tracking-wide font-semibold">
                      &gt; {typedText}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500">$ cat profile_bio.txt</span>
                  <p className="text-zinc-300 font-light leading-relaxed mt-2 text-justify">
                    {resumo}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills: Terminal Initializer Packages with skill bars */}
            <div ref={skillsRef} className="border border-red-500/10 bg-zinc-950/40 rounded-lg p-5">
              <div className="text-[10px] text-red-500/50 mb-4 tracking-widest uppercase data-flicker-2">
                // SYSTEM_MODULES // INSTALLED_PACKAGES
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {habilidadesPrincipais.map((hab, idx) => (
                  <motion.div
                    key={hab.nome}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ scale: 1.03, borderColor: 'rgba(239, 68, 68, 0.4)' }}
                    className="flex flex-col gap-1.5 px-3 py-2.5 rounded border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white transition-all cursor-default select-none"
                  >
                    <div className="flex items-center gap-2">
                      <i className={`${hab.icone} text-base text-zinc-500`} />
                      <span className="text-[10px] font-bold tracking-widest">{hab.nome.toUpperCase()}</span>
                    </div>
                    {/* Skill bar */}
                    <div className="skill-bar w-full">
                      <div
                        className={`skill-bar-fill ${barsVisible ? 'animate' : ''}`}
                        style={{
                          '--skill-pct': `${hab.pct}%`,
                          animationDelay: `${idx * 60}ms`,
                        } as React.CSSProperties}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
