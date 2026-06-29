import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  meusProjetos = [
    {
      nome: 'Leitor Crítico Web',
      descricao: 'Aplicação web com integration direta à API do Google Books para busca e gestão de leituras.',
      tecnologias: ['Nodejs', 'API Rest', 'Web'],
      imagem: '/LeitorCritico.jpg',
      linkGithub: 'https://github.com/Gudereck/Leitor-critico-web'
    },
    {
      nome: 'AtivoFlow',
      descricao: 'Sistema de gestão de ativos de TI e suporte técnico (chamados). Desenvolvido com arquitetura organizada e banco de dados relacional.',
      tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      imagens: ['/ativoflow1.png', '/ativoflow2.png', '/ativoflow3.png'],
      activeImageIndex: 0,
      linkGithub: 'https://github.com/Gudereck/AtivoFlow'
    },
    {
      nome: 'PvBanks',
      descricao: 'Sistema bancário simulado e completo (FullStack) com painel de transações, gráficos de despesas e investimentos integrados à API do Banco Central.',
      tecnologias: ['Angular', 'Spring Boot', 'Java', 'Spring Security'],
      imagens: ['/pvbanks1.png', '/pvbanks2.png', '/pvbanks3.png', '/pvbanks4.png'],
      activeImageIndex: 0,
      linkGithub: 'https://github.com/Gudereck/PvBanks-FullStack'
    },
    {
      nome: 'Sistema de Controle Financeiro',
      descricao: 'Projeto desktop de gerenciamento financeiro...',
      tecnologias: ['Java', 'Swing', 'MySQL', 'Spring Boot'],
      imagem: '/Financeiro.png', // <--- Minúsculo e confira se é .png mesmo
      linkGithub: 'https://github.com/Gudereck/ProjetoFinanceiro'
    }
  ];

  prevImage(projeto: any) {
    if (projeto.imagens) {
      projeto.activeImageIndex = (projeto.activeImageIndex - 1 + projeto.imagens.length) % projeto.imagens.length;
    }
  }

  nextImage(projeto: any) {
    if (projeto.imagens) {
      projeto.activeImageIndex = (projeto.activeImageIndex + 1) % projeto.imagens.length;
    }
  }

  setSlide(projeto: any, index: number) {
    if (projeto.imagens) {
      projeto.activeImageIndex = index;
    }
  }
}