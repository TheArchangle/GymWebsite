import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gym-website');
  profileVisible = false;
  settingsVisible = false;

  get isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  get username() {
    return localStorage.getItem('username') || '';
  }

  constructor(private router: Router) {}


  showProfile() {
    this.profileVisible = true;
    this.settingsVisible = false;
  }

  closeProfile() {
    this.profileVisible = false;
  }

  showSettings() {
    this.settingsVisible = true;
    this.profileVisible = false;
  }

  closeSettings() {
    this.settingsVisible = false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }
}
