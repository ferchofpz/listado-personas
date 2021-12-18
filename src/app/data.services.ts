import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService
    ){}

    guardarPersonas(personas:Persona[]){
        const token = this.loginService.getIdToken();

        // Se retorna un objeto de tipo observable por lo que se debe suscribir
        this.httpClient.put('https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response => console.log("Resultado guardar personas: " + response),
            error => console.log("Error al guardar personas: " + error)
        );
    }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    modificarPersona(index:number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url:string = 'https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+token;
        this.httpClient.put(url,persona)
        .subscribe(
            respuesta => console.log("Resultado modificacion:" + respuesta),
            error => console.log("Error en la modificacion: " + error)
        );
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url:string = 'https://listado-personas-c5c74-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            respuesta => console.log("Resultado eliminacion:" + respuesta),
            error => console.log("Error en la eliminacion: " + error)
        );
    }
}