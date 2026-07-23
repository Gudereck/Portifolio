import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  nome = 'Gustavo de Deus';
  cargo = 'Desenvolvedor Back-end';
}
