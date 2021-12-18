import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
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

    constructor(
        private loggingService: LoggingService,
        private dataService: DataServices
        ){}

    agregarPersona(persona: Persona){
        this.loggingService.enviarMensajeAConsola("Se envia persona al arreglo: " + persona.nombre + ' ' + persona.apellido);
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
      }

    encontrarPersona(index:number){
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){

        // Se modifica el registro dado que se esta trabajando con referencia
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
    }

    eliminarPersona(index:number){
        this.personas.splice(index,1);
    }
}