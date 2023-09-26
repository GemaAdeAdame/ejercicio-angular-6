// techniques.ts

export interface Technique {
  name: string;
  damage: number;
  complexity: string;
  // Otros campos si es necesario
}

// Define tus técnicas
export const techniques: Technique[] = [
  { name: 'Técnica 1', damage: 100, complexity: 'Alta' },
  { name: 'Técnica 2', damage: 150, complexity: 'Media' },
  // Otras técnicas
];
