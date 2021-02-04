import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent {

  strVal:string;
  numVal:number;
  dateVal:Date;

  constructor() { 

    this.strVal="Hello World";
    this.numVal=Math.PI;
    this.dateVal=new Date();
  }

}
