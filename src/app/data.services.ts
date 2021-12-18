import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(
        private httpClient: HttpClient
    ){}

    guardarPersonas(personas:Persona[]){

        // Se retorna un objeto de tipo observable por lo que se debe suscribir
        this.httpClient.put('https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe(
            response => console.log("Resultado guardar personas: " + response),
            error => console.log("Error al guardar personas: " + error)
        );
    }

    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos.json');
    }

    modificarPersona(index:number, persona: Persona){
        let url:string = 'https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.put(url,persona)
        .subscribe(
            respuesta => console.log("Resultado modificacion:" + respuesta),
            error => console.log("Error en la modificacion: " + error)
        );
    }

    eliminarPersona(index:number){
        let url:string = 'https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos/' + index + '.json';
        this.httpClient.delete(url)
        .subscribe(
            respuesta => console.log("Resultado eliminacion:" + respuesta),
            error => console.log("Error en la eliminacion: " + error)
        );
    }
}