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
      descricao: 'Aplicação web com integração direta à API do Google Books para busca e gestão de leituras.',
      tecnologias: ['Nodejs', 'API Rest', 'Web'],
      imagem: '/LeitorCritico.jpg',
      linkGithub: 'https://github.com/Gudereck/Leitor-critico-web'
    },
    {
      nome: 'Projeto de Geladeira em Java',
      descricao: 'Projeto de geladeira com interface gráfica e banco de dados estruturado em Memória.',
      tecnologias: ['Java', 'Spring Boot'],
      imagem: '/Geladeira.png', // <--- Minúsculo
      linkGithub: 'https://github.com/Gudereck/GeladeiraJava'
    },
    {
      nome: 'PVWORKS',
      descricao: 'Serviços de criação de sites, design de artes e edição de vídeos.',
      tecnologias: ['Design', 'Edição', 'Web Design'],
      imagem: '/pvworks.jpg',
      linkGithub: 'https://github.com/Gudereck'
    },
    {
      nome: 'Sistema de Controle Financeiro',
      descricao: 'Projeto desktop de gerenciamento financeiro...',
      tecnologias: ['Java', 'Swing', 'MySQL', 'Spring Boot'],
      imagem: '/Financeiro.png', // <--- Minúsculo e confira se é .png mesmo
      linkGithub: 'https://github.com/Gudereck/ProjetoFinanceiro'
    }
  ];
}