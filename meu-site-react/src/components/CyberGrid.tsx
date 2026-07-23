import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CyberGrid() {
  const [hudTime, setHudTime] = useState('');

  // Clock in the HUD background
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const pad = (n: number) => n.toString().padStart(2, '0');
      setHudTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fictional floating code strings
  const floatingLines = [
    { text: 'SYS_BOOT: OK', top: '15%', left: '8%', delay: 1 },
    { text: 'PORT_5173 // ACTIVE', top: '75%', left: '85%', delay: 4 },
    { text: 'DB_CONN: SECURE', top: '22%', left: '78%', delay: 2 },
    { text: 'DEVOPS_NODE_09', top: '82%', left: '12%', delay: 5 },
    { text: 'DOCKER_DAEMON_ONLINE', top: '48%', left: '90%', delay: 3 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#030303] select-none">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* CRT scanlines */}
      <div className="crt-overlay" />

      {/* Futuristic Vignette / Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Ambient background glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full filter blur-[150px] bg-red-950/15"
        animate={{
          x: [-100, 100, -100],
          y: [-100, 100, -100],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ top: '10%', left: '15%' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full filter blur-[150px] bg-orange-950/10"
        animate={{
          x: [100, -100, 100],
          y: [100, -100, 100],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{ bottom: '15%', right: '15%' }}
      />

      {/* Floating HUD code indicators */}
      {floatingLines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.25, 0.1, 0.25, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: line.delay,
            ease: 'easeInOut',
          }}
          className="absolute font-mono text-[9px] tracking-widest text-red-500/35 hidden lg:block"
          style={{ top: line.top, left: line.left }}
        >
          {line.text}
        </motion.div>
      ))}

      {/* HUD Border Brackets around the viewport */}
      <div className="absolute top-4 left-6 font-mono text-[9px] tracking-wider text-red-500/20 hidden md:block">
        [ SYSTEM: GUSTAVO_CORE_V15 ]
      </div>
      <div className="absolute top-4 right-6 font-mono text-[9px] tracking-wider text-red-500/20 hidden md:block">
        [ TIME: {hudTime} ]
      </div>
      <div className="absolute bottom-4 left-6 font-mono text-[9px] tracking-wider text-red-500/20 hidden md:block">
        [ STATUS: INTRUSION_PREVENTION_ENABLED ]
      </div>
    </div>
  );
}
