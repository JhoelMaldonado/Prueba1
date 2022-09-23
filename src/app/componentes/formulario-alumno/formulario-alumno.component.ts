import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output() public enviarAlumno = new EventEmitter<Alumno>();

  public nuevoAlumno: Alumno = {
    rut : '',
    nombre : '',
    apellido : '',
    edad : 0,
    seccion: {
      id: 0,
      nombreSeccion: ''
    }
  }

  public ingresarRut(rut : Event): void{
    const elemento = rut.target as HTMLInputElement;
    this.nuevoAlumno.rut = elemento.value;
  }
  public ingresarNombre(nombre : Event): void{
    const elemento = nombre.target as HTMLInputElement;
    this.nuevoAlumno.nombre = elemento.value;
  }
  public ingresarApellido(apellido : Event): void{
    const elemento = apellido.target as HTMLInputElement;
    this.nuevoAlumno.apellido = elemento.value;
  }
  public ingresarEdad(edad : Event): void{
    const elemento = edad.target as HTMLInputElement;
    this.nuevoAlumno.edad = Number.parseInt(elemento.value);
  }
  public guardarAlumno():void{
    const copia: Alumno = {
      ...this.nuevoAlumno
    }
    this.enviarAlumno.emit(copia);
    this.nuevoAlumno.rut = '';
    this.nuevoAlumno.nombre = '';
    this.nuevoAlumno.apellido = '';
    this.nuevoAlumno.edad = 0;
  }
}
