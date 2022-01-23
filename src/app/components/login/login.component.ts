import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {login: '', password: ''};

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("User: ", this.user);
    const isUserValid = this.userService.loginUser(this.user.login, this.user.password);
    console.log("isUserValid ", isUserValid);
    if (isUserValid) {
      this.router.navigate(["/books"]);
    }

  }
}
