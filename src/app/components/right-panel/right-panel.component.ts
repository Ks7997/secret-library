import { Component } from '@angular/core';
import { BookService } from "../../services/book.service";

// Component for books page right panel
@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent {

  constructor(
    private bookService: BookService
  ) { }

  // Selected book name
  get bookName() {
    return this.bookService.currentBook?.name ?? 'no book selected';
  }

}
