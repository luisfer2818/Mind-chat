import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface ColunasTabela {
  id: number;
  titulo: string;
  departamento: string;
  data: string;
  status: string;
}

const ELEMENT_DATA: ColunasTabela[] = [
  {
    id: 1,
    titulo: 'Site lento para acessar',
    departamento: 'Vendas',
    data: '22/12/2023',
    status: 'aberto',
  },
  {
    id: 2,
    titulo: 'Meu pc tá ruim',
    departamento: 'Tecnologia',
    data: '24/12/2023',
    status: 'em andamento',
  },
  {
    id: 3,
    titulo: 'Pc sem acesso a internet',
    departamento: 'Tecnologia',
    data: '26/12/2023',
    status: 'concluido',
  },
  {
    id: 4,
    titulo: 'Notebook sem som',
    departamento: 'Financeiro',
    data: '29/12/2023',
    status: 'concluido',
  },
  {
    id: 5,
    titulo: 'Instalação de software - Node.js(16.6)',
    departamento: 'Tecnologia',
    data: '30/12/2023',
    status: 'em andamento',
  },
  {
    id: 6,
    titulo: 'Pc com lentidão',
    departamento: 'Financeiro',
    data: '28/12/2022',
    status: 'aberto',
  },
  {
    id: 7,
    titulo: 'Pc com lentidão',
    departamento: 'Financeiro',
    data: '28/12/2022',
    status: 'aberto',
  },
  {
    id: 8,
    titulo: 'Pc lento',
    departamento: 'Financeiro',
    data: '28/12/2022',
    status: 'aberto',
  },
];

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  displayedColumns: string[] = [
    'id',
    'titulo',
    'departamento',
    'data',
    'status',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
