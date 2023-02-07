import { Component, OnInit } from '@angular/core';
import { PersonasModel } from './personas.model';
import { ServicioDeDatosService } from '../../services/servicio-de-datos.service';

@Component({
  selector: 'app-servicos-tres',
  templateUrl: './servicos-tres.component.html',
  styleUrls: ['./servicos-tres.component.css']
})
export class ServicosTresComponent implements OnInit {
  title: string = 'Injectando servicios en servicios @Injectable()';
  personas: PersonasModel[] = [];
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;

  constructor(private serviciosPersonas: ServicioDeDatosService) { }

  ngOnInit(): void {
    this.personas = this.serviciosPersonas.personas;
  }

  addPersonaService(){
    this.serviciosPersonas.addPersonas(this.nombre, this.apellido, this.edad);
  }

}
