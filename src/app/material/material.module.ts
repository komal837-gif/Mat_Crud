import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

const matArr = [MatSidenavModule,MatListModule, MatToolbarModule,CommonModule, MatButtonModule,MatIconModule, MatCardModule,MatProgressSpinnerModule,MatChipsModule,MatDialogModule,MatSnackBarModule]


@NgModule({
  declarations: [],
  imports: [...matArr],
  exports:[...matArr]
})
export class MaterialModule { }
