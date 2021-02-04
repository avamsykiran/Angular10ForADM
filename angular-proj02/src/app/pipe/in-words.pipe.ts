import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inWords'
})
export class InWordsPipe implements PipeTransform {

  digits : string[];
  
  constructor(){
    this.digits = ["ZERO","ONE","TWO","THREE","FOUR","FIVE",
                  "SIX","SEVEN","EIGHT","NINE"];
  }

  transform(value: number): string {

    let str:string = `${value}`;

    let result = '';
    for(let i=0;i<str.length;i++){
      //result += this.digits[parseInt(str.charAt(i))] + " ";
      result += `${this.digits[parseInt(str.charAt(i))]} `;
    }

    return result;
  }

}
