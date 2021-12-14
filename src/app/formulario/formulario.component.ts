import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  // Event binding de hijo hacia padre
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string='';
  apellidoInput:string='';

  agregarPersona():void{
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    // this.personas.push(persona1);
    this.personaCreada.emit(persona1);
  }

}
