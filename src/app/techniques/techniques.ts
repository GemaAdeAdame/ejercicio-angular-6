// src/app/techniques.ts

export interface Technique {
  name: string;
  damage: number;
  complexity: string;
  // Otros campos si es necesario
}

// Define tus técnicas aquí
export const techniques: Technique[] = [
  { name: 'Kamehameha', damage: 1000, complexity: 'Alta' },
  { name: 'Genkidama', damage: 2000, complexity: 'Media' },
  // Agrega más técnicas
];
