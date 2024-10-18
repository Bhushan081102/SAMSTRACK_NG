import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true; // Update based on your login logic
  }

  logout() {
    this.isAuthenticated = false;
  }

  checkAuth() {
    return this.isAuthenticated;
  }
}
