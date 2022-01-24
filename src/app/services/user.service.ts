import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User | null = null;

  getUsersList(): User[] {
    return [
      new User('high', '12345', 0),
      new User('medium', '12345', 1),
      new User('low', '12345', 2)
    ];
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  loginUser(login: string, password: string): boolean {
    const foundUser = this.getUsersList().find(user => user.login === login && user.password === password);
    if (foundUser !== undefined) {
      this.currentUser = foundUser;
      return true;
    } else
      return false;
  }
}
