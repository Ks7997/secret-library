import { Injectable } from '@angular/core';
import { Book } from "../models/book.model";
import { Chapter } from "../models/chapter.model";

// Service for working with books
@Injectable({
  providedIn: 'root'
})
export class BookService {
  currentBook: Book | null = null;

  // Book list
  getBookList(): Book[] {
    return [
      new Book("Abbey", [
        new Chapter("Chapter 1", 4787, 4),
        new Chapter("Chapter 2", 6536, 3)
      ], 1),
      new Book("Harry", [
        new Chapter("Chapter 1", 4787, 5),
        new Chapter("Chapter 2", 5673, 5),
        new Chapter("Chapter 3", 4231, 4),
        new Chapter("Chapter 4", 5375, 3)
      ], 0),
      new Book("Pride", [
        new Chapter("Chapter 1", 3712, 4),
        new Chapter("Chapter 2", 9123, 3),
        new Chapter("Chapter 3", 4336, 5)
      ], 2),
    ];
  }
}
