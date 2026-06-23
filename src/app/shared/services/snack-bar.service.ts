import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  

  constructor(private snack:MatSnackBar) { }

  SuccessMsg(msg:string){
    this.snack.open(msg,'close',{
      horizontalPosition:'center',
      verticalPosition:'bottom'
      
    })
  }

  ErrorMsg(msg:string){
    this.snack.open(msg,'close',{
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
 
}
