import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  email = 'gustavorezende307@gmail.com';
  caminhoCurriculo = '/Curriculo_Gustavo_de_Deus.pdf';
  nomeCurriculo = 'Gustavo de Deus.pdf';

  links = {
    linkedin: 'https://www.linkedin.com/in/gustavo-de-deus/',
    github: 'https://github.com/Gudereck',
    whatsapp: 'https://wa.me/5537988338421'
  };
}
