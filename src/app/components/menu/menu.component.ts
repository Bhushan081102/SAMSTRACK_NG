import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) {}

  logout() {
    // Clear user authentication data (like token or session)
   // localStorage.removeItem('authToken'); // Assuming the token is stored in localStorage

    // Redirect the user to the login page or home page
    this.router.navigate(['/login']); // Adjust the route based on your application
  }

}
