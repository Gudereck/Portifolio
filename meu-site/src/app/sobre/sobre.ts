import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {
  nome = 'Gustavo';
  titulo = 'Desenvolvedor Back-end | Foco em Java';
  fotoPerfil = '/foto-perfil.jpg';
  resumo = 'Atualmente cursando Sistemas de Informação e com formação técnica em Informática para Internet, construí uma base sólida de resolução de problemas atuando com manutenção de TI. Meu foco absoluto é o desenvolvimento back-end, criando arquiteturas escaláveis, estruturação de bancos de dados e integrações eficientes utilizando Java. Sou apaixonado por lógica e estou em busca da minha primeira oportunidade oficial como desenvolvedor ou estagiário back-end para agregar valor a projetos reais.';

  // No seu sobre.ts
  habilidadesPrincipais = [
    { nome: 'Java', icone: 'devicon-java-plain' },
    { nome: 'Spring Boot', icone: 'devicon-spring-plain' },
    { nome: 'Node.js', icone: 'devicon-nodejs-plain' },
    { nome: 'Angular', icone: 'devicon-angularjs-plain' },
    { nome: 'MongoDB', icone: 'devicon-mongodb-plain' },
    { nome: 'MySQL', icone: 'devicon-mysql-plain' }
  ];
}