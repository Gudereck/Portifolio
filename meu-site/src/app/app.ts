import { Component, HostListener, signal } from '@angular/core';

import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Sobre } from './sobre/sobre';
import { Trajetoria } from './trajetoria/trajetoria';
import { Projetos } from './projetos/projetos';
import { Contato } from './contato/contato';
import { Footer } from './footer/footer';
import { RevealDirective } from './shared/reveal.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Sobre, Trajetoria, Projetos, Contato, Footer, RevealDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-site');
  protected readonly progresso = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    const doc = document.documentElement;
    const total = doc.scrollHeight - doc.clientHeight;
    this.progresso.set(total > 0 ? (doc.scrollTop / total) * 100 : 0);
  }
}
