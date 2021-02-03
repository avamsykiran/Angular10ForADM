import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  banner:string;
  logo:string;
  imgWidth:number;
  c1:boolean;
  c2:boolean;
  c3:boolean;

  constructor(){
    this.banner="My First Angular Application";
    this.logo="assets/rose.jpg";
    this.imgWidth=50;

    this.c1=false;
    this.c2=false;
    this.c3=false;
  }

  doOnClick(){
    alert('AM CLICKED');
  }
}
