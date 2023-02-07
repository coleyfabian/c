import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticaDosComponent } from './practica-dos/practica-dos.component';
import { ComponentsModule } from "../components/components.module";
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        PracticaDosComponent
    ],
    exports: [
        PracticaDosComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule
    ]
})
export class PracticasModule { }
