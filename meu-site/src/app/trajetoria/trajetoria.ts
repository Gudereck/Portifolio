import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ItemTimeline {
  periodo: string;
  titulo: string;
  local: string;
  descricao: string;
  tipo: 'formacao' | 'experiencia';
  atual?: boolean;
}

@Component({
  selector: 'app-trajetoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trajetoria.html',
  styleUrl: './trajetoria.css'
})
export class Trajetoria {
  itens: ItemTimeline[] = [
    {
      periodo: 'Atualmente',
      titulo: 'Graduação em Sistemas de Informação',
      local: 'Ensino Superior',
      descricao:
        'Aprofundando fundamentos de engenharia de software, estruturas de dados, banco de dados e arquitetura de sistemas.',
      tipo: 'formacao',
      atual: true
    },
    {
      periodo: 'Experiência',
      titulo: 'Manutenção e Suporte de TI',
      local: 'Área Técnica',
      descricao:
        'Base sólida de resolução de problemas, diagnóstico de hardware/software e atendimento técnico — a disciplina que hoje aplico ao código.',
      tipo: 'experiencia'
    },
    {
      periodo: 'Concluído',
      titulo: 'Técnico em Informática para Internet',
      local: 'Formação Técnica',
      descricao:
        'Primeiro contato estruturado com lógica de programação, desenvolvimento web e banco de dados.',
      tipo: 'formacao'
    }
  ];
}
