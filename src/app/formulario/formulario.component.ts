import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  // Event binding de hijo hacia padre
  // @Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput:string='';
  // apellidoInput:string='';

  // Se recupera la referencia definida en la plantilla
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  // DI (dependency injection): Angular automaticamente inyecta una instancia de la clase
  constructor(private personasService: PersonasService){
    
    // Suscripción al evento
    this.personasService.saludar.subscribe(
      (indice:number) => alert('El indice es: ' + indice)
    );
  }

  agregarPersona():void{
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);

    // this.loggingService.enviarMensajeAConsola("Enviamos persona: " + persona1.nombre + ' ' + persona1.apellido);
    // this.personaCreada.emit(persona1);

    this.personasService.agregarPersona(persona1);
  }

}
