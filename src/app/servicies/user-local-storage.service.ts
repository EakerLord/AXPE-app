import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  constructor() { }

  getAll() {
    return this.getUsers();
  }
  getById(id: number){}
  getByUsername(userName: string){}

  // -----

  create(user: User) {
    const users = this.getUsers();
    let lastUser: User;

    if (users) {
      lastUser = users[users.length - 1]
    }

    if ( !lastUser ) {
      user.id = 0;
    } else {
      user.id = lastUser.id + 1;
    }

    users.push(user);
    this.setUsers(users);
  }
  update(user: User){}
  delete(id: number){}

  // -----

  private setUsers(users: User[]) {
    try {
      localStorage.setItem('users', JSON.stringify(users));
    } catch (err) {
      console.log(err);
    }
  }
  private getUsers() {
    let usersLocalStorage: User[] = [];
    try {
      const localStorageResponse = JSON.parse(localStorage.getItem('users'));

      if (localStorageResponse && localStorageResponse.length > 0){
        usersLocalStorage = localStorageResponse;
      }
      return usersLocalStorage;

    } catch (err) {
      console.log(err);
    }
  }
}
