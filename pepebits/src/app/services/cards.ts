import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class CardsService {
  private cardsKey = 'myCards';
  private players: Card[] = [];

  constructor(private http: HttpClient) {
    this.loadPlayers();
  }

  loadPlayers() {
    this.http.get<Card[]>('/assets/players.json').subscribe(data => this.players = data);
  }

  openPack(): Card[] {
    if (this.players.length === 0) return [];
    const pack: Card[] = [];
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * this.players.length);
      pack.push(this.players[idx]);
    }
    this.addToCollection(pack);
    return pack;
  }

  getCollection(): Card[] {
    const saved = localStorage.getItem(this.cardsKey);
    return saved ? JSON.parse(saved) : [];
  }

  addToCollection(cards: Card[]) {
    const collection = this.getCollection();
    localStorage.setItem(this.cardsKey, JSON.stringify([...collection, ...cards]));
  }
}
