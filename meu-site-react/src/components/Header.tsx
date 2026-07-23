import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre');

  // Detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['sobre', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'SOBRE_MIM', href: '#sobre', id: 'sobre', num: '01' },
    { label: 'PROJETOS', href: '#projetos', id: 'projetos', num: '02' },
    { label: 'CONTATO', href: '#contato', id: 'contato', num: '03' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-45 backdrop-blur-md bg-[#050505]/80 border-b border-red-500/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between font-mono">
        
        {/* Logo / System Status */}
        <div className="flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <span className="text-sm font-extrabold tracking-widest text-red-500 glitch-hover">
              GUSTAVO://CORE
            </span>
            <span className="text-[8px] text-zinc-500 tracking-wider">
              PORT: 5173 // TCP_IP
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-2 border-l border-zinc-800 pl-6 text-[10px] tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500">SYS_STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`text-xs tracking-widest px-4 py-2 block transition-all duration-200 glitch-hover ${
                    activeSection === item.id 
                      ? 'text-red-500 font-bold border-b border-red-500/50' 
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span className="opacity-45 text-[9px] mr-1.5">{item.num}</span>
                  {activeSection === item.id ? `[ ${item.label} ]` : item.label}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(239,68,68,0.3)' }}
            whileTap={{ scale: 0.98 }}
            href="/Curriculo_Gustavo_de_Deus.docx"
            download="Curriculo_Gustavo_de_Deus.docx"
            className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-widest rounded border border-red-500/25 bg-red-500/5 hover:bg-red-500/10 text-red-500 transition-all shadow-sm"
          >
            <i className="fa-solid fa-download"></i>
            GET /CURRICULO.docx
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="/Curriculo_Gustavo_de_Deus.docx"
            download="Curriculo_Gustavo_de_Deus.docx"
            className="p-2.5 rounded border border-red-500/10 bg-red-500/5 text-red-500"
            aria-label="Baixar CV"
          >
            <i className="fa-solid fa-download"></i>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded border border-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <i className="fa-solid fa-xmark text-sm"></i> : <i className="fa-solid fa-bars text-sm"></i>}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-red-500/10 bg-[#050505] font-mono"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              <ul className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xs tracking-widest block py-2.5 ${
                        activeSection === item.id
                          ? 'text-red-500 font-bold'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <span className="opacity-45 text-[9px] mr-1.5">{item.num}</span>
                      {activeSection === item.id ? `[ ${item.label} ]` : item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
