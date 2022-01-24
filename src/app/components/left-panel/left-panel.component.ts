import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
import { Book } from "../../models/book.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const allBooks = this.bookService.getBookList();

    const currentUser = this.userService.getCurrentUser();
    if (currentUser === null) {
      this.books = [];
    } else {
      this.books = allBooks.filter(book => book.accessLevel >= currentUser.accessLevel);
    }
  }

  onBookClick(book: Book): void {
    this.bookService.currentBook = book;
  }

}
