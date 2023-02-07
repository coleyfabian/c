import { Component, OnInit } from '@angular/core';
import { ServicioDeDatosService } from '../../services/servicio-de-datos.service';
import { AplicacionModel } from './aplicacion.model';

@Component({
  selector: 'app-servicios-dos',
  templateUrl: './servicios-dos.component.html',
  styleUrls: ['./servicios-dos.component.css']
})
export class ServiciosDosComponent implements OnInit {
  title: string = 'Servicio de datos';
  aplicaciones: AplicacionModel[]=[];
  titulo: string = '';
  prioridad: string = '';

  constructor(private dataAplicaciones: ServicioDeDatosService) {
  }
  
  ngOnInit(): void {
    this.aplicaciones = this.dataAplicaciones.aplicaciones;
  }

  addAplicationes() {
    this.dataAplicaciones.addAplications(this.titulo, this.prioridad);
  }
}
