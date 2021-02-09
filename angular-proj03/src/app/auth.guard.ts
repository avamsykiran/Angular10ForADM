import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private userService:UserService){

  }


  isAllowed(url:string):boolean{
    let allowed:boolean=false;

    if(url.indexOf("/login")>-1){
      if(!this.userService.isLoggedIn()){
        allowed=true;
      }
    }else if(url.indexOf("/admin")>-1){
      if(this.userService.isLoggedIn() && this.userService.currentUser().role=="ADMIN"){
        allowed=true;
      }
    }else if(url.indexOf("/student")>-1){
      if(this.userService.isLoggedIn() && this.userService.currentUser().role=="STUDENT"){
        allowed=true;
      }
    }

    return allowed;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          
      return this.isAllowed(state.url);
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed(state.url);
  }
  
}
