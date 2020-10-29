import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todosService: TodosService;

  // Dependency injection
  constructor(todosService: TodosService) {
    this.todosService = todosService;
  }

  // this property is dependent on the other property i.e. todos property
  get todosMarkedForCompletion() {
    return this.todosService.todos.filter(todo => todo.done).length;
  }

  ngOnInit(): void {
  }

}
