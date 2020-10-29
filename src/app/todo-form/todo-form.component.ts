import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTodo: string;

  todosService: TodosService;

  // dependency injection
  constructor(todosService: TodosService) {
    this.todosService = todosService;
    this.newTodo = null;
  }

  ngOnInit(): void {
  }

  onSave(): void {
    const newTodo = this.newTodo;
    this.todosService.addTodo(newTodo);
    this.newTodo = null;
  }

}
