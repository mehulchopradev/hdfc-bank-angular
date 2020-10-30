import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  ngOnInit(): void {
    this.booksService.fetchBooks();
  }

}
