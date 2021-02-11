import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(
    private userService:UserService,
    private router:Router){

  }

  isAllowed(url:string){
    let allowed=false;
    
    if(url.indexOf("/login")>-1 || url.indexOf("/signup")>-1){
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

    if(!allowed){
      let nextPage : string=null;
      if(!this.userService.isLoggedIn()){
        nextPage = "/login";
      }else if(this.userService.currentUser().role=="ADMIN"){
        nextPage = "/admin";
      }else if(this.userService.currentUser().role=="STUDENT"){
        nextPage = "/student";
      }

      //this.router.navigateByUrl(nextPage);

      let msg = "No access to the request resource. Please login with proper credits."
      this.router.navigate([nextPage],{queryParams:{err:msg}});
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
