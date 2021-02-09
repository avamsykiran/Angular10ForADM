import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:string;

  constructor(
    private userService:UserService,
    private router:Router) {

  }

  ngOnInit(): void {
  }

  handleSubmit(){
    let user:User=null;
    let nextPage:string=null;

    if(this.userId.toLowerCase()=="admin"){
      user={userId:this.userId,role:"ADMIN"};
      nextPage="/admin";
    }else{
      user={userId:this.userId,role:"STUDENT"};
      nextPage="/student";
    }

    this.userService.login(user);
    this.router.navigateByUrl(nextPage);
  }

}
