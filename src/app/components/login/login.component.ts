import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    // Prepare the login request
    const loginRequest = {
      username: this.username,
      password: this.password,
    };

    // Call the login service
    this.loginService.login(loginRequest).subscribe(
      (response) => {
        if (response) {
          // Set authentication state
          this.authService.login(); // Assuming this sets the isAuthenticated to true

          // Redirect to home
          this.router.navigate(['/home']);
        } else {
          // Handle invalid credentials
          alert('Invalid Credentials!');
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        // Handle any errors from the login service
        alert('Login failed! Please try again later.');
        console.error('Login error:', error);
      }
    );
  }
}
