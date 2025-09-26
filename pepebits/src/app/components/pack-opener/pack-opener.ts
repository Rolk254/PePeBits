import { Component } from '@angular/core';
import { CardsService } from '../../services/cards';
import { Card } from '../../models/card.model';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- para ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // <- para <mat-form-field>
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from '../card/card';
@Component({
  selector: 'app-pack-opener',
imports: [
  CardComponent,
  BrowserModule,
  FormsModule,          // <- para ngModel
  MatFormFieldModule,   // <- para <mat-form-field>
  MatInputModule
],

  templateUrl: './pack-opener.html',
  styleUrls: ['./pack-opener.scss']
})
export class PackOpenerComponent {
  openedCards: Card[] = [];
  constructor(private cardsService: CardsService) {}
  openPack() { this.openedCards = this.cardsService.openPack(); }
}
