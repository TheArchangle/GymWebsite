import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  // Example credentials (replace with real auth in production)
  private readonly validUsername = 'DeepM';
  private readonly validPassword = 'password@123';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.loginError = false;
      // Store login state (simple example)
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', this.username);
      console.log('Username stored:', this.username);
      this.router.navigate(['/home']); // Redirect to home or dashboard
    } else {
      this.loginError = true;
    }
  }
}
