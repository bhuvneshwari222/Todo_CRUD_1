import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';
import { todosData1 } from '../../consts/todos';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackBarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todosArr: Itodo[] = [];
  editTodoObj !: Itodo;

  constructor(
    private _matDialog: MatDialog,
    private _snackbar: SnackBarService
  ) { }

  ngOnInit(): void {
    this.todosArr = todosData1;
  }

  getNewTodo(newTodo: Itodo) {
    this.todosArr.unshift(newTodo);
  }

  getRemoveID(removeID: string) {
    let config = new MatDialogConfig();
    config.data = `Are you sure? you want to remove this todoItem with id ${removeID}`;
    config.width = '400px';
    config.disableClose = true;
    let dialogRef = this._matDialog.open(GetConfirmComponent, config);
    dialogRef.afterClosed()
      .subscribe({
        next: resp => {
          if (resp) {
            let getIndex = this.todosArr.findIndex(t => t.todoID === removeID);
            let removedTodo = this.todosArr.splice(getIndex, 1);
            this._snackbar.openSnackBarService(`The todoITem ${removedTodo[0].todoItem} is removed successfully!!!`);
          }
        },
        error: err => {
          this._snackbar.openSnackBarService(err.msg);
        }
      })
  }

  getEditTodo(editTodo: Itodo) {
    this.editTodoObj = editTodo;
  }

  getUpdatedTodo(updatedTodo: Itodo) {
    let getIndex = this.todosArr.findIndex(t => t.todoID === updatedTodo.todoID);
    this.todosArr[getIndex] = updatedTodo;
    this._snackbar.openSnackBarService(`The todoItem ${updatedTodo.todoItem} is updated successfully!!!`)
  }
}
