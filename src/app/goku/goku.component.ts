// goku.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique } from '../techniques/techniques';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
})
export class GokuComponent {
  @Input() techniques: Technique[] = [];
  @Output() hohanLearnedTechnique = new EventEmitter<Technique>();

  transferTechniqueTohohan(technique: Technique) {
    // Emitir un evento con la técnica que Goku transfiere a hohan.
    this.hohanLearnedTechnique.emit(technique);
  }

  constructor() { }
}
