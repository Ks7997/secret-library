import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsersList(): User[] {
    return [
      new User('high', 'high', 0),
      new User('medium', 'medium', 1),
      new User('low', 'low', 2)
    ];
  }
}
