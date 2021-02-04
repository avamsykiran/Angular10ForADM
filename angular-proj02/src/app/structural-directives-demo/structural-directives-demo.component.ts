import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives-demo',
  templateUrl: './structural-directives-demo.component.html',
  styleUrls: ['./structural-directives-demo.component.css']
})
export class StructuralDirectivesDemoComponent implements OnInit {

  num:number;
  constructor() {
    this.num=0;
   }

  ngOnInit(): void {
  }

}
