import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todos';
import { SnackBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  isInEditMode: boolean = false;
  @ViewChild('todoForm') todoForm !: NgForm;
  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor(
    private _todoService: TodoService,
    private _snackBar: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  ngSubmit() {

  }

  onSubmit() {
    if (this.todoForm.invalid) {
      return
    }
    let newTodo = {
      ...this.todoForm.form.value,
      todoID: this._todoService.uuid()
    }
    this.emitNewTodo.emit(newTodo);
    this.todoForm.resetForm();
    this._snackBar.openSnackBarService(`The new todoItem ${newTodo.todoItem} is added successfully!!!`);
  }

}
