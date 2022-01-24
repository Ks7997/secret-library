// Describes a single user
export class User {
  login: string;
  password: string;
  accessLevel: number;

  constructor(login: string, password: string, accessLevel: number) {
    this.login = login;
    this.password = password;
    this.accessLevel = accessLevel;
  }
}
