export interface Tree {
  id: string;
  species: string;
  description: string;
  latitude: number;
  longitude: number;
  height?: number;
  diameter?: number;
  age?: number;
  health: string;
  plantedDate?: string;
  imageUrl?: string;
}
