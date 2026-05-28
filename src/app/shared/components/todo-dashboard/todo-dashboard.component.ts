import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';
import { todosData1 } from '../../consts/todos';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todosArr: Itodo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todosArr = todosData1;
  }

  getNewTodo(newTodo: Itodo){
    this.todosArr.unshift(newTodo);
  }

}
