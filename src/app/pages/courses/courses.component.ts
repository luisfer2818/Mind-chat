import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  constructor() {}

  openDialog() {
    // this.dialog.open(CoursesComponent);
  }

  ngOnInit(): void {}
}
