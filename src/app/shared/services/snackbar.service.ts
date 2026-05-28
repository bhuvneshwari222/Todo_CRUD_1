import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";



@Injectable({
    providedIn: 'root',
})
export class SnackBarService{

    constructor(
        private _snackbar: MatSnackBar
    ){}

    openSnackBarService(msg: string){
        this._snackbar.open(msg, 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000
        })
    }
}