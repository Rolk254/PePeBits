import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- para ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // <- para <mat-form-field>
import { MatInputModule } from '@angular/material/input'; 
import { MatToolbar } from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
imports: [
  MatToolbar,
  BrowserModule,
  FormsModule,          // <- para ngModel
  MatFormFieldModule,   // <- para <mat-form-field>
  MatInputModule
],

  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}
  logout() { this.auth.logout(); }
}
