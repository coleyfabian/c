import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivaNgforComponent } from './directiva-ngfor/directiva-ngfor.component';
import { DirectivaNgifComponent } from './directiva-ngif/directiva-ngif.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    DirectivaNgforComponent,
    DirectivaNgifComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    DirectivaNgforComponent,
    DirectivaNgifComponent
  ]
})
export class DirectivasModule { }
