import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { CoursesMaterialModule } from '@app/shared/materials/courses-mat.module';
import { SharedModule } from '@app/shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [CoursesComponent, CourseListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CoursesMaterialModule,
    SharedModule,
    MatTableModule,
  ],
})
export class CoursesModule {}
