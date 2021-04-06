import { Component, OnInit } from '@angular/core';
import { Creditcard } from '../creditcard';
import { CreditcardService } from '../_services/creditcard.service';

@Component({
  selector: 'app-creditcard-display',
  templateUrl: './creditcard-display.component.html',
  styleUrls: ['./creditcard-display.component.css']
})
export class CreditcardDisplayComponent implements OnInit {

  cards:Creditcard[];

  constructor(private Service: CreditcardService) { }


   ngOnInit(): void {
    this.Service.getCreditCards().subscribe((data:Creditcard[]) => {
      console.log(data);
      this.cards = data;
    });
  }

}
