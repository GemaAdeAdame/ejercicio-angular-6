import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Technique } from '../../techniques/techniques';

@Component({
  selector: 'app-hohan',
  templateUrl: './hohan.component.html',
})
export class hohanComponent {
  // Técnicas que hohan ha aprendido
  @Input() learnedTechniques: Technique[] = [];

  // Evento para notificar a Goku cuando hohan aprende una nueva técnica
  @Output() hohanLearnedTechnique = new EventEmitter<Technique>();

  // Método para aprender una técnica de Goku
  learnTechniqueFromGoku(technique: Technique) {
    // Agregar la técnica a las que hohan ha aprendido
    this.learnedTechniques.push(technique);

    // Notificar a Goku sobre la técnica aprendida
    this.hohanLearnedTechnique.emit(technique); // Usa el mismo nombre del evento
  }

  constructor() { }
}
