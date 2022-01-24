import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BooksComponent} from './components/books/books.component';
import {FormsModule} from "@angular/forms";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {LeftPanelComponent} from './components/left-panel/left-panel.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {RightPanelComponent} from './components/right-panel/right-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
