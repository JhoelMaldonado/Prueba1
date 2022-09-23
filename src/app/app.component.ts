import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';
import { RegistroHistorial } from './modelos/registro-historial';
import { Seccion } from './modelos/seccion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba1';
  public opcionSeleccionada: number = 0;
  public elementosGuardadosSeccion: Array<Seccion> = [];
  public elementosGuardadosAlumno: Array<Alumno> = [];
  public seccionSeleccionada: Seccion = {
    id: 0,
    nombreSeccion: ''
  }
  public elementosGuardadosHistorial: Array<RegistroHistorial> = [];
  public hora1!:Date
  public fecha1!:Date
  public nuevoHistorialRegistro: RegistroHistorial = {
    fecha: new Date(),
    hora: new Date(),
    alumno: {
      rut : '',
      nombre : '',
      apellido: '',
      edad: 0,
      seccion:  {
        id: 0,
        nombreSeccion: ''
      }
    }
  }
  public agregarSeccion(seccion: Seccion):void{
    const id: number = this.elementosGuardadosSeccion.length + 1;
    seccion.id = id;
    this.elementosGuardadosSeccion.push(seccion);
  }
  public guardarSeccion():void{
    const copia = this.opcionSeleccionada
    this.seccionSeleccionada = this.elementosGuardadosSeccion[copia - 1]
  }
  public agregarAlumno(evento: Alumno):void{
    evento.seccion = this.seccionSeleccionada
    this.elementosGuardadosAlumno.push(evento);
    this.hora1 = new Date();
    this.fecha1 = new Date();
    this.nuevoHistorialRegistro.alumno = evento
    this.nuevoHistorialRegistro.hora = this.hora1
    this.nuevoHistorialRegistro.fecha = this.fecha1
    this.elementosGuardadosHistorial.push(this.nuevoHistorialRegistro)
  }

  public today: Date = new Date();

}
