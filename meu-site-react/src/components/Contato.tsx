import { motion } from 'framer-motion';

export default function Contato() {
  const email = 'Gustavorezende307@gmail.com';
  const caminhoCurriculo = '/Curriculo_Gustavo_de_Deus.docx';

  const links = {
    linkedin: 'https://www.linkedin.com/in/gustavo-de-deus/',
    github: 'https://github.com/Gudereck',
    whatsapp: 'https://wa.me/5537999999999', // Substitua pelo número real futuramente
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 20 },
    },
  };

  return (
    <section className="py-24 px-6 relative font-mono" id="contato">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-widest text-red-500 uppercase mb-2 data-flicker"
          >
            // ESTABLISH_COMMUNICATION_PROTOCOL
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase mb-4"
          >
            Uplink de Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-zinc-500 text-xs tracking-wider max-w-xl mx-auto"
          >
            Terminal aguardando sinais de entrada para oportunidades, parcerias ou contatos diretos.
          </motion.p>
        </div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* CV Node (Standout) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="relative flex flex-col items-center text-center p-8 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950/60 hover:border-red-500/35 transition-all duration-300 group corner-box"
          >
            {/* Visual Red line on top */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-red-500" />
            
            <motion.div
              whileHover={{ rotate: 6, scale: 1.12 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 15 }}
              className="w-12 h-12 rounded border border-red-500/10 bg-red-500/5 text-red-500 flex items-center justify-center mb-6"
            >
              <i className="fa-solid fa-file-arrow-down text-lg" />
            </motion.div>

            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-2">FILE_TRANSFER: CV</h3>
            <p className="text-zinc-500 text-[10px] tracking-wider mb-6">Acesse os dados e a trajetória profissional completa do Gustavo.</p>

            <motion.a
              whileHover={{ scale: 1.02, boxShadow: '0 0 12px rgba(239, 68, 68, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              href={caminhoCurriculo}
              download={caminhoCurriculo}
              className="mt-auto flex items-center justify-center gap-2 px-5 py-2.5 w-full rounded border border-red-500 bg-red-500/10 hover:bg-red-500 text-white font-bold text-xs tracking-widest transition-all"
            >
              <i className="fa-solid fa-download"></i>
              INITIALIZE_DOWNLOAD
            </motion.a>
          </motion.div>

          {/* Social Links Node */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center text-center p-8 rounded-lg border border-zinc-800 bg-zinc-950/60 hover:border-orange-500/35 transition-all duration-300 group corner-box"
          >
            {/* Visual Orange line on top */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-orange-500" />

            <motion.div
              whileHover={{ rotate: -6, scale: 1.12 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 15 }}
              className="w-12 h-12 rounded border border-orange-500/10 bg-orange-500/5 text-orange-500 flex items-center justify-center mb-6"
            >
              <i className="fa-solid fa-network-wired text-lg" />
            </motion.div>

            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-2">SELECT_NODE: LINKS</h3>
            <p className="text-zinc-500 text-[10px] tracking-wider mb-6">Pontos de presença online e repositórios de código ativo.</p>

            <div className="flex flex-col gap-2.5 w-full mt-auto">
              <motion.a
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-[10px] font-bold rounded border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-[#0077B5]/40 transition-all text-left"
              >
                <i className="fa-brands fa-linkedin text-sm text-[#0077B5]"></i>
                CONNECT /LINKEDIN
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-[10px] font-bold rounded border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-left"
              >
                <i className="fa-brands fa-github text-sm text-zinc-200"></i>
                CONNECT /GITHUB
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-[10px] font-bold rounded border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-[#25D366]/40 transition-all text-left"
              >
                <i className="fa-brands fa-whatsapp text-sm text-[#25D366]"></i>
                CONNECT /WHATSAPP
              </motion.a>
            </div>
          </motion.div>

          {/* Email Node */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center text-center p-8 rounded-lg border border-zinc-800 bg-zinc-950/60 hover:border-red-500/25 transition-all duration-300 group corner-box"
          >
            {/* Visual Red line on top */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-red-500" />

            <motion.div
              whileHover={{ rotate: 6, scale: 1.12 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 15 }}
              className="w-12 h-12 rounded border border-red-500/10 bg-red-500/5 text-red-500 flex items-center justify-center mb-6"
            >
              <i className="fa-solid fa-envelope-open-text text-lg" />
            </motion.div>

            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-2">SEND_SIGNAL: EMAIL</h3>
            <p className="text-zinc-500 text-[10px] tracking-wider mb-6">Inicialize o protocolo de envio de mensagens diretas por correio eletrônico.</p>

            <motion.a
              whileHover={{ scale: 1.02, borderColor: 'rgba(239, 68, 68, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${email}`}
              className="mt-auto px-3 py-2.5 w-full rounded border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 text-red-500 hover:text-red-400 text-[10px] tracking-tighter transition-all select-all truncate block"
            >
              MAILTO: {email.toUpperCase()}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
