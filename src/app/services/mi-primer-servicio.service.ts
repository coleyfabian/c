import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiPrimerServicioService {

  constructor() { }

  alerta(mensaje: string) {
    alert(mensaje);
  }
}
