import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projeto {
  nome: string;
  descricao: string;
  tecnologias: string[];
  linkGithub: string;
  linkDemo?: string;
  imagem?: string;
  imagens?: string[];
  activeImageIndex: number;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  meusProjetos: Projeto[] = [
    {
      nome: 'PvBanks',
      descricao: 'Sistema bancário simulado completo (FullStack) com painel de transações, gráficos de despesas e investimentos integrados à API do Banco Central. Autenticação e autorização via Spring Security.',
      tecnologias: ['Angular', 'Spring Boot', 'Java', 'Spring Security'],
      imagens: ['/pvbanks1.png', '/pvbanks2.png', '/pvbanks3.png', '/pvbanks4.png'],
      activeImageIndex: 0,
      linkGithub: 'https://github.com/Gudereck/PvBanks-FullStack'
    },
    {
      nome: 'AtivoFlow',
      descricao: 'Sistema de gestão de ativos de TI e suporte técnico (chamados), desenvolvido com arquitetura em camadas e banco de dados relacional. Ambiente containerizado com Docker.',
      tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      imagens: ['/ativoflow1.png', '/ativoflow2.png', '/ativoflow3.png'],
      activeImageIndex: 0,
      linkGithub: 'https://github.com/Gudereck/AtivoFlow'
    },
    {
      nome: 'Leitor Crítico Web',
      descricao: 'Aplicação web com integração direta à API do Google Books para busca, avaliação e gestão de leituras pessoais.',
      tecnologias: ['Node.js', 'REST API', 'Web'],
      imagem: '/LeitorCritico.jpg',
      activeImageIndex: 0,
      linkGithub: 'https://github.com/Gudereck/Leitor-critico-web'
    },
    {
      nome: 'Controle Financeiro',
      descricao: 'Aplicação desktop para gerenciamento de finanças pessoais, com cadastro de receitas e despesas, categorias e persistência em banco de dados relacional.',
      tecnologias: ['Java', 'Swing', 'MySQL', 'Spring Boot'],
      imagem: '/Financeiro.png',
      activeImageIndex: 0,
      linkGithub: 'https://github.com/Gudereck/ProjetoFinanceiro'
    }
  ];

  prevImage(projeto: Projeto) {
    if (projeto.imagens) {
      projeto.activeImageIndex =
        (projeto.activeImageIndex - 1 + projeto.imagens.length) % projeto.imagens.length;
    }
  }

  nextImage(projeto: Projeto) {
    if (projeto.imagens) {
      projeto.activeImageIndex = (projeto.activeImageIndex + 1) % projeto.imagens.length;
    }
  }

  setSlide(projeto: Projeto, index: number) {
    if (projeto.imagens) {
      projeto.activeImageIndex = index;
    }
  }
}
