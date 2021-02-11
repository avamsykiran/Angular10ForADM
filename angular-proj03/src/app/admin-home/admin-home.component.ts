import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  infoMsg:string;
  errMsg:string;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (qryPrms) => {
        if(qryPrms.err){
          this.errMsg=qryPrms.err;
        }
        if(qryPrms.info){
          this.infoMsg=qryPrms.info;
        }
      }
    );
  }

  closeInfoMsgBox(){
    this.infoMsg=null;    
  }

  closeErrMsgBox(){    
    this.errMsg=null;
  }
}
