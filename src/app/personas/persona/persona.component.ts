import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // Con el decorador @input, se recibe informacion del componente padre hacia el componente hijo
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
