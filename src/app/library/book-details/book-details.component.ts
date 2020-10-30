import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/book';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  route: ActivatedRoute;

  booksService: BooksService;

  book: Book;

  constructor(route: ActivatedRoute, booksService: BooksService) {
    this.route = route;
    this.booksService = booksService;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const bookId = params.bookId;
      this.booksService.getBook(bookId).subscribe((book: Book) => {
        this.book = book;
      });
    });
  }

}
