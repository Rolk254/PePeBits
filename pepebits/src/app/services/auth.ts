import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userKey = 'pepebits_user';

  login(username: string) { localStorage.setItem(this.userKey, username); }
  logout() { localStorage.removeItem(this.userKey); }
  getUser(): string | null { return localStorage.getItem(this.userKey); }
  isLogged(): boolean { return !!this.getUser(); }
}
