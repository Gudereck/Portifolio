import CyberGrid from './components/CyberGrid';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Cyber Grid & CRT Overlay */}
      <CyberGrid />

      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="pt-20">
        <Sobre />
        <Projetos />
        <Contato />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 bg-[#030303] text-center text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} GUSTAVO // ALL_RIGHTS_RESERVED // SYSTEM_ONLINE</p>
      </footer>
    </div>
  );
}

export default App;
