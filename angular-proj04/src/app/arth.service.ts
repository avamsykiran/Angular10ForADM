import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  add(n1:number,n2:number):number{
    return n1+n2;
  }
  substract(n1:number,n2:number):number{
    return n1-n2;
  }
}
