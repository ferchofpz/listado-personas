import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  // Con el decorador @input, se recibe informacion del componente padre hacia el componente hijo
  @Input() persona: Persona;
  @Input() indice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
