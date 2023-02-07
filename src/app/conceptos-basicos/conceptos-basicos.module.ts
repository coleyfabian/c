import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NgClassStyleComponent } from './ng-class-style/ng-class-style.component';
import { ComunicandoComponentes1Component } from './comunicando-componentes1/comunicando-componentes1.component';
import { ComponenteHijoComponent } from './comunicando-componentes1/componente-hijo/componente-hijo.component';
import { ComunicandoComponentes2Component } from './comunicando-componentes2/comunicando-componentes2.component';
import { ComponenteHijo2Component } from './comunicando-componentes2/componente-hijo2/componente-hijo2.component';
import { ServiciosUnoComponent } from './servicios-uno/servicios-uno.component';
import { MiPrimerServicioService } from '../services/mi-primer-servicio.service';
import { ServiciosDosComponent } from './servicios-dos/servicios-dos.component';
import { ServicioDeDatosService } from '../services/servicio-de-datos.service';
import { ServicosTresComponent } from './servicos-tres/servicos-tres.component';
import { RoutingUnoComponent } from './routing-uno/routing-uno.component';
import { InicioComponent } from './routing-uno/inicio/inicio.component';
import { OtroComponent } from './routing-uno/otro/otro.component';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  {path: '', component: InicioComponent},
  {path: 'otro', component: OtroComponent}
];

@NgModule({
  declarations: [
    NuevoComponenteComponent,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgClassStyleComponent,
    ComunicandoComponentes1Component,
    ComponenteHijoComponent,
    ComunicandoComponentes2Component,
    ComponenteHijo2Component,
    ServiciosUnoComponent,
    ServiciosDosComponent,
    ServicosTresComponent,
    RoutingUnoComponent,
    InicioComponent,
    OtroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    NuevoComponenteComponent,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgClassStyleComponent,
    ComunicandoComponentes1Component,
    ComunicandoComponentes2Component,
    ServiciosUnoComponent,
    ServiciosDosComponent,
    ServicosTresComponent,
    RoutingUnoComponent,
  ],
  providers: [
    MiPrimerServicioService,
    ServicioDeDatosService
  ]
})
export class ConceptosBasicosModule { }
