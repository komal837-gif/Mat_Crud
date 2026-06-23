import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
allReadyHasAccount: boolean = false;
@ViewChild('signUpForm') signUpForm !: NgForm
@ViewChild('loginForm') loginForm !: NgForm
  constructor(
    private authService:AuthService,
    private router:Router,
    private snack:SnackBarService

  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.loginForm.valid){
      let obj = this.loginForm.value;
      this.authService.login(obj)
        .subscribe({
          next:data=>{
            console.log(data)
            this.router.navigate(['home'])
            this.loginForm.reset()
            this.snack.SuccessMsg(data.message)
          },
          error:err=>{
            console.log(err)
            this.snack.ErrorMsg(err.error.message)
          }
        })
    } 
  }

  onSignUp(){
    if(this.signUpForm.valid){
      let obj = this.signUpForm.value;
      this.authService.register(obj)
        .subscribe({
          next:res=>{
            console.log(res)
            this.allReadyHasAccount = true;
            this.snack.SuccessMsg(res.message)

          },
          error:err=>{
           console.log(err.error)
           this.snack.ErrorMsg(err.error.message)
           this.signUpForm.reset()

          }
        })
    }
  }

}
