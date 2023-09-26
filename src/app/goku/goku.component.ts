// src/app/goku/goku.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique } from '../techniques/techniques'; // Asegúrate de importar las técnicas.

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.scss']
})

export class GokuComponent {
  @Input() techniques: Technique[] = [];
  @Output() gohanLearnedTechnique = new EventEmitter<Technique>();

  transferTechniqueToGohan(technique: Technique) {
    // Emitir un evento con la técnica que Goku transfiere a Gohan.
    this.gohanLearnedTechnique.emit(technique);
  }

  constructor() { }
}
