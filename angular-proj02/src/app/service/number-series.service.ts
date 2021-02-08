import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {

    let job = (observer:Observer<number>) => {

        if(lb>ub){
          observer.error("Invalid limits!");
          return; //terminate the job here.
        }

        let n = lb;
        
        let handle = setInterval(()=>{
          observer.next(n); //return a number each time
          n++;
          if(n>ub){
            observer.complete(); //signal the job completion.
            clearInterval(handle); //the setInterval will close (stop) here.
          }
        },2000);
    };

    return new Observable<number>(job);
  }

  generateSquaredSeries(lb:number,ub:number) : Observable<number> {

    let oldObservable = this.generateSeries(lb,ub);
    let newObservable = oldObservable.pipe(map((n) => (n*n)));
    return newObservable;
  }

  generateEvenSeries(lb:number,ub:number) : Observable<number> {

    let oldObservable = this.generateSeries(lb,ub);
    let newObservable = oldObservable.pipe(filter((n) => n%2==0));
    return newObservable;
  }

  generateEvenSquaredSeries(lb:number,ub:number) : Observable<number> {

    let oldObservable = this.generateSeries(lb,ub);
    let newObservable = oldObservable.pipe(
      filter((n) => n%2==0),map((n) => (n*n)));
    return newObservable;
  }

}
