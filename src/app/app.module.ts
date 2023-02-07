import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ConceptosBasicosModule } from './conceptos-basicos/conceptos-basicos.module';
import { DirectivasModule } from './conceptos-basicos/directivas/directivas.module';
import { PracticasModule } from './practicas/practicas.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        DirectivasModule,
        ComponentsModule,
        ConceptosBasicosModule,
        PracticasModule
    ]
})
export class AppModule { }
