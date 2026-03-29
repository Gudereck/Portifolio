import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
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
      imagem: '/Financeiro.jpg', // Coloquei a foto do financeiro aqui só para não ficar vazio!
      linkGithub: 'https://github.com/Gudereck/GeladeiraJava'
    },
    {
      nome: 'PVWORKS',
      descricao: 'Serviços de criação de sites, design de artes e edição de vídeos.',
      tecnologias: ['Design', 'Edição', 'Web Design'],
      imagem: '/pvworks.jpg',
      linkGithub: 'https://github.com/Gudereck' // Ajustei para o seu GitHub
    },
    {
      nome: 'Sistema de Controle Financeiro',
      descricao: 'Projeto desktop de gerenciamento financeiro construído com arquitetura em camadas, unindo backend robusto e interface gráfica.',
      tecnologias: ['Java', 'Swing', 'MySQL', 'Spring Boot'],
      imagem: '/Financeiro.png',
      linkGithub: 'https://github.com/Gudereck/ProjetoFinanceiro'
    }
  ];
}