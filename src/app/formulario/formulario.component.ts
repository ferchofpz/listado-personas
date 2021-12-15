import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  // Event binding de hijo hacia padre
  @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string='';
  // apellidoInput:string='';

  // Se recupera la referencia definida en la plantilla
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  agregarPersona():void{
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    // this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  }

}
