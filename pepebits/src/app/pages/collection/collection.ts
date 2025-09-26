import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards';
import { Card } from '../../models/card.model';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- para ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // <- para <mat-form-field>
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card';
@Component({
  selector: 'app-collection',
imports: [
  CommonModule,
  CardComponent,
  BrowserModule,
  FormsModule,          // <- para ngModel
  MatFormFieldModule,   // <- para <mat-form-field>
  MatInputModule
]
,
  templateUrl: './collection.html',
  styleUrls: ['./collection.scss']
})
export class CollectionComponent implements OnInit {
  collection: Card[] = [];
  constructor(private cardsService: CardsService) {}
  ngOnInit() { this.collection = this.cardsService.getCollection(); }
}
