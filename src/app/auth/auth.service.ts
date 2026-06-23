import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginUser, IRegisterUser } from '../model/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Auth_Url = environment.AUTH_URL;
  constructor(
    private http:HttpClient
  ) { }

  

  register(userDetails:IRegisterUser):Observable<any>{
    return this.http.post(`${this.Auth_Url}/api/auth/register`,userDetails)
  }

  login(user:ILoginUser):Observable<any>{
    return this.http.post(`${this.Auth_Url}/api/auth/login`,user)
  }

  saveToken(token:string){
    localStorage.setItem('token',token)
  }

  saveUserRole(userRole:string){
    localStorage.setItem('userRole',userRole)
  }

  getToken():string | null{
    return localStorage.getItem('token')
  }

  getUserRole():string | null{
    return localStorage.getItem('userRole')
  }

}
