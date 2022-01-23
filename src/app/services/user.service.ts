import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: User | null = null;

  getUsersList(): User[] {
    return [
      new User('high', 'high', 0),
      new User('medium', 'medium', 1),
      new User('low', 'low', 2)
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
