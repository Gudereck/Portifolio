import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GrupoSkill {
  categoria: string;
  icone: string;
  skills: { nome: string; icone: string }[];
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {
  nome = 'Gustavo';
  titulo = 'Desenvolvedor Back-end | DevOps';
  fotoPerfil = '/foto-perfil.jpg';
  resumo =
    'Atualmente cursando Sistemas de Informação e com formação técnica em Informática para Internet, construí uma base sólida de resolução de problemas atuando com manutenção de TI. Meu foco absoluto é o desenvolvimento back-end, criando arquiteturas escaláveis, estruturação de bancos de dados e integrações eficientes utilizando Java. Sou apaixonado por lógica e estou em busca da minha primeira oportunidade oficial como desenvolvedor ou estagiário back-end para agregar valor a projetos reais.';

  estatisticas = [
    { valor: '4+', label: 'Projetos construídos' },
    { valor: '12+', label: 'Tecnologias' },
    { valor: '2', label: 'Formações em TI' },
    { valor: '∞', label: 'Vontade de aprender' }
  ];

  gruposSkills: GrupoSkill[] = [
    {
      categoria: 'Back-end',
      icone: 'fa-solid fa-server',
      skills: [
        { nome: 'Java', icone: 'devicon-java-plain' },
        { nome: 'Spring Boot', icone: 'devicon-spring-plain' },
        { nome: 'Node.js', icone: 'devicon-nodejs-plain' }
      ]
    },
    {
      categoria: 'Front-end',
      icone: 'fa-solid fa-palette',
      skills: [
        { nome: 'Angular', icone: 'devicon-angularjs-plain' },
        { nome: 'TypeScript', icone: 'devicon-typescript-plain' },
        { nome: 'HTML5', icone: 'devicon-html5-plain' }
      ]
    },
    {
      categoria: 'Banco de Dados',
      icone: 'fa-solid fa-database',
      skills: [
        { nome: 'MySQL', icone: 'devicon-mysql-plain' },
        { nome: 'PostgreSQL', icone: 'devicon-postgresql-plain' },
        { nome: 'MongoDB', icone: 'devicon-mongodb-plain' }
      ]
    },
    {
      categoria: 'DevOps & Ferramentas',
      icone: 'fa-solid fa-gears',
      skills: [
        { nome: 'Docker', icone: 'devicon-docker-plain' },
        { nome: 'Linux', icone: 'devicon-linux-plain' },
        { nome: 'Git', icone: 'devicon-git-plain' }
      ]
    }
  ];
}
