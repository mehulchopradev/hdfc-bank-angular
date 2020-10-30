import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[];

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.books = [];
  }

  fetchBooks(): void {
    this.http.get<Book[]>('http://localhost:3000/books')
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`);
  }
}
