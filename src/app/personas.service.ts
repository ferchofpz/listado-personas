import { Persona } from "./persona.model";

export class PersonasService{
    personas:Persona[] = [
        new Persona('Juan','Perez'), 
        new Persona('Laura','Juarez'),
        new Persona('Carla','Lara')
    ];

    agregarPersona(persona: Persona){
        // this.loggingService.enviarMensajeAConsola("Se envia persona al arreglo: " + persona.nombre);
        this.personas.push(persona);
      }
}