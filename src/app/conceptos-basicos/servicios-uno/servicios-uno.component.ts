import { Component, OnInit } from '@angular/core';
import { MiPrimerServicioService } from '../../services/mi-primer-servicio.service';

@Component({
  selector: 'app-servicios-uno',
  templateUrl: './servicios-uno.component.html',
  styleUrls: ['./servicios-uno.component.css']
})
export class ServiciosUnoComponent implements OnInit {
  title: string = 'creando servicios';
  mensaje: string = '';

  constructor(private serviceAlert: MiPrimerServicioService) { }

  ngOnInit(): void {
  }

  activarServicio(){
    this.serviceAlert.alerta('tu mensaje es: ' + this.mensaje);
  }
}
