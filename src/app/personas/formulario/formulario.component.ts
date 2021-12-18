import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  // Event binding de hijo hacia padre
  // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string='';
  apellidoInput:string='';
  index:number;

  // Se recupera la referencia definida en la plantilla
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('apellidoInput') apellidoInput: ElementRef;

  // DI (dependency injection): Angular automaticamente inyecta una instancia de la clase
  constructor(
    private personasService: PersonasService, 
    private router:Router,
    private route:ActivatedRoute
    ){
    
    // Suscripción al evento
    this.personasService.saludar.subscribe(
      (indice:number) => alert('El indice es: ' + indice)
    );
  }
  ngOnInit(): void {
    // Se recupera el indice de la URL (ruta)
    this.index = this.route.snapshot.params['id'];

    // Si el indice no es nulo estamos modificando
    if(this.index){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona():void{
    // Local reference
    // let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);

    // this.loggingService.enviarMensajeAConsola("Enviamos persona: " + persona1.nombre + ' ' + persona1.apellido);
    // this.personaCreada.emit(persona1);

    if(this.index){
      this.personasService.modificarPersona(this.index, persona1);
    }
    else{
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(["personas"]);
  }

  eliminarPersona(){
    if(this.index != null)
      this.personasService.eliminarPersona(this.index);
      this.router.navigate(["personas"]);
  }

}
