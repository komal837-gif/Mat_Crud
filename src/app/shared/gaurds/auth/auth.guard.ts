import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanLoad {

  private router = inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean | UrlTree {
    if(localStorage.getItem('token')){
      return true
    }else{
      return this.router.createUrlTree([''])
    }
  }
  
canLoad(route: Route, segments: UrlSegment[]):  boolean | UrlTree {
  if(localStorage.getItem('token')){
    return true
  }else{
    return false
  }
}
  
}
