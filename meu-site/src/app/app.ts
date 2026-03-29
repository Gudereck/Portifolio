import { Component, signal } from '@angular/core';

import { Header } from './header/header';
import { Sobre } from './sobre/sobre';
import { Projetos } from './projetos/projetos';
import { Contato } from './contato/contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Sobre, Projetos, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-site');
}