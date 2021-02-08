import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../service/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb:number;
  ub:number;
  result:number[];
  errMsg:string;
  isDone:boolean;
  isEven:boolean;
  isSqrd:boolean;

  constructor(private numService:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
    this.result=null;
    this.errMsg=null;
    this.isDone=true;
    this.isEven=false;
    this.isSqrd=false;
  }

  ngOnInit(): void {
  }

  handleSubmit(){
    this.result=[];
    this.errMsg=null;
    this.isDone=false;

    let obr = null;

    if(this.isEven && this.isSqrd){
      obr = this.numService.generateEvenSquaredSeries(this.lb,this.ub);
    }else if(this.isEven){
      obr = this.numService.generateEvenSeries(this.lb,this.ub);
    }else if(this.isSqrd){
      obr = this.numService.generateSquaredSeries(this.lb,this.ub);
    }else{
      obr = this.numService.generateSeries(this.lb,this.ub);
    }

    obr.subscribe(
      (n) => {this.result.push(n);},
      (err)=>{this.errMsg=err;this.isDone=true;},
      ()=>{this.isDone=true;}
    );
  }


}
