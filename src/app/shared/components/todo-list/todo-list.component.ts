import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getTodosArr !: Itodo[];

  constructor() { }

  ngOnInit(): void {
  }

  trackByTodoID(index:number, todo: Itodo){
    return todo.todoID;
  }

}
