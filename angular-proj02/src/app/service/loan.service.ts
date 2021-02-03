import { Injectable } from '@angular/core';
import { Loan } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  getSimpleInterest(loan:Loan):number{    
    return (loan.amount*loan.period*loan.rateOfInterest)/100;
  }

  getAmountPayable(loan:Loan):number{
    return loan.simpleInterest+loan.amount;
  }
}
