import {Injectable} from '@angular/core';
import {User} from '../model/user.model';

// FIXME : requête serveur pour utiliser les vrais données SCRUD !
@Injectable()
export class UserService {
  users = [
    new User(1, 'nom 1', 'prenom 1', 'pseudo_1', 'em1@il.bzh'),
    new User(2, 'nom 2', 'prenom 2', 'pseudo_2', 'em2@il.bzh'),
    new User(3, 'nom 3', 'prenom 3', 'pseudo_3', 'em3@il.bzh'),
    new User(4, 'nom 4', 'prenom 4', 'pseudo_4', 'em4@il.bzh'),
  ];
  getAll() {
    return this.users;
  }
}
