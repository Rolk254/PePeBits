import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- para ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // <- para <mat-form-field>
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    BrowserModule,
    FormsModule,          // <- para ngModel
    MatFormFieldModule,   // <- para <mat-form-field>
    MatInputModule
  ],

  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent { @Input() card!: Card; }
