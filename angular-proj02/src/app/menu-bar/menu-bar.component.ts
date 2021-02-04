import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  links : string[][];

  constructor() { 
    this.links = [
      ["/","Home"],
      ["/loan","Loan Form"],
      ["/pipes","Pipes Demo"],
      ["/sddc","Strucural Directives Demo"]      
    ];
  }

  ngOnInit(): void {
  }

}
