import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";

let matArr  = [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule
]

@NgModule({
    imports: [...matArr],
    exports: [...matArr]
})
export class MaterialModule{}