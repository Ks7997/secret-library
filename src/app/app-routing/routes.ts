import { Routes } from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {BooksComponent} from "../components/books/books.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent}
];
