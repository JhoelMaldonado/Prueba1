import { Seccion } from 'src/app/modelos/seccion';
import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{
  @Output() enviarSeccion = new EventEmitter<Seccion>();

  public nuevaSeccion: Seccion = {
    nombreSeccion: ''
  }

  public nombreSeccion(evento : Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevaSeccion.nombreSeccion = elemento.value;
  }
  public enviar(): void {
    const copia: Seccion = {
      ...this.nuevaSeccion
    }
    this.enviarSeccion.emit(copia);
    this.nuevaSeccion.nombreSeccion= '';
  }
}
