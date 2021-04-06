import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Creditcard} from '../creditcard'
import {CreditcardService} from '../_services/creditcard.service'

@Component({
  selector: 'app-creditcard-insert',
  templateUrl: './creditcard-insert.component.html',
  styleUrls: ['./creditcard-insert.component.css']
})
export class CreditcardInsertComponent implements OnInit {

  cr:Creditcard=new Creditcard();
  msg='';
  OnInput(val)
   {
    localStorage.setItem('cardnumber',val) ;
     }

  constructor(private Service: CreditcardService,
    private router:Router) { }
      ngOnInit(): void { }

  saveCreditCard()
  {
    this.Service.createCreditCards(this.cr).subscribe( data =>
      {
      console.log(data);
      this. goToUserList();
      },

    error =>
    console.log(error));
    console.log("exception occured");
    console.log("card credentials not correct");
  }

  goToUserList()
{
  alert("payment done!!");
this.router.navigate(['/get-details'])
}
  onSubmit()
  {
    console.log(this.cr);
    this.saveCreditCard();
  }

}
