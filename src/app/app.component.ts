import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SamsTrack_NG';
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('authToken');  // Clear the token on logout
    this.router.navigate(['/login']);  // Redirect to login page
  }
}
