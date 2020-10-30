import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: any[];

  http: HttpClient

  url: string = 'http://localhost:3000/todos';

  constructor(http: HttpClient) {
    this.http = http;
    this.todos = [];
  }

  fetchTodos(): void {
    // asychronous call
    this.http.get<any[]>(`${this.url}?done=false`)
      .subscribe((todos: any[]) => {
        // collect the result of the asynchronous call
        this.todos = todos;
      });
  }

  addTodo(title: string): Observable<any> {
    const newTodoObj = {
      title: title,
      done: false,
      createdDate: new Date()
    };

    return this.http.post<any>(this.url, newTodoObj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap((todo: any) => {
        this.todos.push(todo); // side effect code of adding the newly created todo in the todos list of the service
      }),
      catchError((err: any): Observable<any> => {
        console.log(err);
        alert('Error in saving the todo');
        return of(null);
      })
    );
  }
}
