import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { TeachersMaterialModule } from '@app/shared/materials/teachers-mat.module';
import { SharedModule } from '@app/shared/shared.module';
import { TeachersRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios.component';

@NgModule({
  declarations: [FuncionariosComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersMaterialModule,
    SharedModule,
    MatTableModule,
  ],
})
export class TeachersModule {}
