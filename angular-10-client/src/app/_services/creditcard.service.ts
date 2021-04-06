import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditcard } from '../creditcard';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {


  cardnumber : any =localStorage.getItem('cardnumber');

  constructor(private httpClient: HttpClient) { }

//save creditcard related data into db
  public createCreditCards(c:Creditcard):Observable<any>{
    this.cardnumber=localStorage.getItem('cardnumber')
    return this.httpClient.put<any>("http://localhost:8080/api/test/"+this.cardnumber+"/creditcard",c);
  }

//fetch data from db
  public getCreditCards(): Observable<any>{
    this.cardnumber=localStorage.getItem('cardnumber')
    return this.httpClient.get("http://localhost:8080/api/test/getcard/"+this.cardnumber+"/amount")
  }
}
