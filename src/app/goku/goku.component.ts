// src/app/goku/goku.component.ts

import { Component } from '@angular/core';
import { techniques } from '../techniques/techniques'; // Asegúrate de importar las técnicas.

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.scss']
})
export class GokuComponent {
  techniques = techniques; // Asigna las técnicas al arreglo techniques en el componente.

  constructor() { }
}
