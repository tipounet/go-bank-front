import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AUTH_PROVIDERS, provideAuth,AuthHttp} from 'angular2-jwt';

import {User} from '../shared/model/user.model';
import {Authentication} from '../shared/services/Authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.html'
  // providers: [UserService]
})
// page par défaut si on est pas connecté})
export class LoginComponent {
  private user = new User(0);

  constructor(private router: Router, private auth: Authentication) {
  }

  login() {
    let body = JSON.stringify(this.user);

    this.auth.login(body).subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.goHome();
        return true;
      },
      error => {
        console.error("Error connexion ", error);
        return Observable.throw(error);
      })
  }

  goHome() {
    event.preventDefault();
    this.router.navigate(['/home']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
