import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ColunasTabela {
  id: number;
  nome: string;
  email: string;
  cargo: string;
}

const ELEMENT_DATA: ColunasTabela[] = [
  {
    id: 1,
    nome: 'Antônio José',
    email: 'antonio@corporativo.com.br',
    cargo: 'Técnico de Suporte II',
  },
  {
    id: 2,
    nome: 'Maria de Oliveira',
    email: 'maria@corporativo.com.br',
    cargo: 'Analista de sistemas',
  },
  {
    id: 3,
    nome: 'Olário Pinto',
    email: 'olario@corporativo.com.br',
    cargo: 'Analista de sistemas II',
  },
  {
    id: 4,
    nome: 'Mariana de Jesus',
    email: 'mari@corporativo.com.br',
    cargo: 'Técnico de suporte I',
  },
  {
    id: 5,
    nome: 'Edvaldo José',
    email: 'ed@corporativo.com.br',
    cargo: 'Analista de requisitos',
  },
];

@Component({
  selector: 'app-teachers',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ['id', 'nome', 'email', 'cargo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {}
}
