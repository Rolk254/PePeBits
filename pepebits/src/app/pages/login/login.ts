import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <- para ngModel
import { MatFormFieldModule } from '@angular/material/form-field'; // <- para <mat-form-field>
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [
  BrowserModule,
  FormsModule,          // <- para ngModel
  MatFormFieldModule,   // <- para <mat-form-field>
  MatInputModule
]
,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  username = '';
  constructor(private auth: AuthService, private router: Router) {}
  login() {
    if(this.username) {
      this.auth.login(this.username);
      this.router.navigate(['/']);
    }
  }
}