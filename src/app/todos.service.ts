import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    // asychronous call
    this.http.get<any[]>(`${this.url}?done=false`)
      .subscribe((todos: any[]) => {
        // collect the result of the asynchronous call
        this.todos = todos;
      });
  }

  addTodo(title: string): void {
    const newTodoObj = {
      title: title,
      done: false,
      createdDate: new Date()
    };

    this.http.post<any>(this.url, newTodoObj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe((todo: any) => {
      this.todos.push(todo);
    })
  }
}
