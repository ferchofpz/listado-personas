import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas:Persona[] = [
        new Persona('Juan','Perez'), 
        new Persona('Laura','Juarez'),
        new Persona('Carla','Lara')
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService){}

    agregarPersona(persona: Persona){
        this.loggingService.enviarMensajeAConsola("Se envia persona al arreglo: " + persona.nombre + ' ' + persona.apellido);
        this.personas.push(persona);
      }
}