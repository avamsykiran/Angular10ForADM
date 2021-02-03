import { Component } from '@angular/core';
import { Loan } from '../model/loan';
import { LoanService } from '../service/loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent {

  loan:Loan;
  
  constructor(private loanService:LoanService) { 
    this.loan = {amount:0,amountPayable:0,simpleInterest:0,rateOfInterest:0,period:0};
  }

  compute(){
    this.loan.simpleInterest=this.loanService.getSimpleInterest(this.loan);
    this.loan.amountPayable=this.loanService.getAmountPayable(this.loan);
  }
}
