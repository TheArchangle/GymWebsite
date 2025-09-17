import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { ServicesComponent } from './pages/services/services.component';
// import { ContactComponent } from './pages/contact/contact.component';

import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { LoginComponent } from './pages/login/login';

function loginGuard() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: Home, canActivate: [loginGuard] },
  { path: 'services', component: Services, canActivate: [loginGuard] },
  { path: 'contact', component: Contact, canActivate: [loginGuard] }
];