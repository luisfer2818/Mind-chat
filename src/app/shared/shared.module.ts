import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  declarations: [ToolbarTitleComponent],
  exports: [
    ToolbarTitleComponent,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
