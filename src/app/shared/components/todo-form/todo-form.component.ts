import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todos';
import { SnackBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false;
  @ViewChild('todoForm') todoForm !: NgForm;
  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() emitUpdatedTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Input() getEditTodo !: Itodo;

  constructor(
    private _todoService: TodoService,
    private _snackBar: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['getEditTodo'].currentValue) {
      this.isInEditMode = true;
      this.todoForm.form.patchValue(this.getEditTodo);
    }
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

  onUpdate() {
    if (this.todoForm.valid) {
      let updatedTodo: Itodo = { ...this.todoForm.form.value, todoID: this.getEditTodo.todoID }
      this.emitUpdatedTodo.emit(updatedTodo);
      this.todoForm.resetForm();
      this.isInEditMode = false;
    }
  }

}
