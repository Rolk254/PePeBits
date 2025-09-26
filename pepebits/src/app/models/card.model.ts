// src/app/models/card.model.ts
export interface Card {
  id: number;
  name: string;
  team: string;
  rarity: 'common' | 'rare' | 'epic' | 'legend';
}
