// app.component.ts
import { Component } from '@angular/core';
import { Technique } from '../app/techniques/techniques';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // Técnicas que hohan ha aprendido
  hohanLearnedTechniques: Technique[] = [];

  // Técnicas que Goku puede enseñar
  techniques: Technique[] = [
    // Aquí configura tus técnicas
  ];

  // Método para notificar a Goku sobre una técnica aprendida por hohan
  notifyGoku(technique: Technique) {
    // Puedes implementar aquí la lógica para notificar a Goku
    console.log(`hohan ha aprendido una nueva técnica: ${technique.name}`);
  }
}
