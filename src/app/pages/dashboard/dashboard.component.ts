import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor() {
    // @ViewChild('MeuCanvas', { static: true }) elemento: ElementRef;
    // let MeuCanvas = new Chart('MeuCanvas', {
    //   type: 'pie',
    //   data: {
    //     labels: ['Em aberto', 'Em andamento', 'Concluidas'],
    //     datasets: [
    //       {
    //         label: 'teste',
    //         data: [10, 15, 36],
    //       },
    //     ],
    //   },
    // });
    let panelOpenState = false;
  }

  ngOnInit(): void {
    // let ct = document.getElementById('MyChart');
    // let myCharts = new Chart(ct, {
    //   type: 'pie',
    //   data: {
    //     labels: ['Em aberto', 'Em andamento', 'Concluidas'],
    //     datasets: [],
    //   },
    // });
    //   let chart = new Chart('MyChart', {
    //     type: 'pie', //this denotes tha type of chart
    //     data: {
    //       labels: ['Em aberto', 'Em andamento', 'Concluidas'],
    //       datasets: [
    //         // {
    //         //   label: 'No of sales',
    //         //   data: {},
    //         //   backgroundColor: '',
    //         //   hoverOffset: 4,
    //         // },
    //       ],
    //     },
    //     options: {
    //       aspectRatio: 2,
    //     },
    //   });
  }
}
