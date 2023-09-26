// app.component.ts
import { Component } from '@angular/core';
import { Technique, techniques } from './techniques/techniques'; // Importa las técnicas correctamente desde el archivo adecuado.

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // Técnicas que hohan ha aprendido
  hohanLearnedTechniques: Technique[] = [];

  // Técnicas que Goku puede enseñar
  techniques: Technique[] = techniques; // Asigna las técnicas correctamente.

  // Método para notificar a Goku sobre una técnica aprendida por hohan
  notifyGoku(technique: Technique) {
    // Puedes implementar aquí la lógica para notificar a Goku
    console.log(`hohan ha aprendido una nueva técnica: ${technique.name}`);
  }
}
