import {Injectable} from '@angular/core';
import {Response} from '@angular/http';

import { AuthHttp } from 'angular2-jwt';

import {Account} from '../model/account.model';
import {User} from '../model/user.model';

@Injectable()
export class AccountService {

  accounts : Account[];

  constructor(private authHttp: AuthHttp) { }

  getAccountForUser(u: User) {
    return this.authHttp.get('http://localhost:8080/account/user/' + u.id)
      .map((res: Response) => {
        return res.json();
      });
  }

  saveNew(a: Account) {
    console.log('AccountService.saveNew ', a);
    return this.authHttp.post('http://localhost:8080/account', JSON.stringify(a))
      .map((res: Response) => res.json());
  }
}
