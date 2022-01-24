import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

// Login page
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {login: '', password: ''};

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  // Validates and saves entered login and password
  onSubmit() {
    const isUserValid = this.userService.loginUser(this.user.login, this.user.password);
    if (isUserValid) {
      this.router.navigate(["/books"]);
    }

  }
}
