import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {
  email = 'seu-email@exemplo.com';
  // O caminho começa com / pois o arquivo está na raiz da pasta public
  caminhoCurriculo = '/curriculo-gustavo.pdf';

  links = {
    linkedin: 'https://linkedin.com/in/seu-perfil',
    github: 'https://github.com/Gudereck',
    whatsapp: 'https://wa.me/5537999999999' // Substitua pelo seu número
  };
}