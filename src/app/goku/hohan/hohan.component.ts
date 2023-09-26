// hohan.component.ts

import { Component, Input } from '@angular/core';
import { Technique } from '../../techniques/techniques';

@Component({
  selector: 'app-hohan',
  templateUrl: './hohan.component.html',
})
export class hohanComponent {
  @Input() learnedTechniques: Technique[] = [];

  learnTechniqueFromGoku(technique: Technique) {
    // Agregar la técnica a las que hohan ha aprendido.
    this.learnedTechniques.push(technique);
  }

  constructor() { }
}


