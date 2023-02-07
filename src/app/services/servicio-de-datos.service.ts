import { Injectable } from '@angular/core';
import { AplicacionModel } from '../conceptos-basicos/servicios-dos/aplicacion.model';
import { PersonasModel } from '../conceptos-basicos/servicos-tres/personas.model';
import { MiPrimerServicioService } from './mi-primer-servicio.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeDatosService {
  aplicaciones: AplicacionModel[]=[
    new AplicacionModel('Slack', 'alta'),
    new AplicacionModel('Whatsapp', 'media'),
    new AplicacionModel('Clash Royale', 'baja')
  ];

  personas: PersonasModel[] = [
    new PersonasModel('Marieth','Diaz',22),
    new PersonasModel('Sandra','lozano',59),
    new PersonasModel('Marly','lastre',28),
  ];

  constructor(private señoraGritona: MiPrimerServicioService) {
  }

  addAplications(titulo: string, prioridad: string){
    this.aplicaciones.push(new AplicacionModel(titulo, prioridad));
  }

  addPersonas(nombre: string, apellido: string, edad: number) {
    this.personas.push(new PersonasModel(nombre, apellido, edad));
    this.señoraGritona.alerta('La Señora Isabel Severichi grita que llegó ' + nombre + apellido + edad);
  }

}