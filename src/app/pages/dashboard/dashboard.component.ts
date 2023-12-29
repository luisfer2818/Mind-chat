import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
// const { Chart } = await import('chart.js');
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor() {
    let panelOpenState = false;
  }

  ngOnInit(): void {
    // let ctx = document.getElementById('MyChart');
    const chart = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['Em aberto', 'Em andamento', 'Concluidas'],
        datasets: [],
      },
    });
  }
}
