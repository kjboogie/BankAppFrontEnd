import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsurancepolicyService {

  constructor(private http : HttpClient) { }

  cardnumber :any = localStorage.getItem('cardnumber')

  public sendInsurancePolicyData(data): Observable<any>{
    this.cardnumber=localStorage.getItem('cardnumber')
    return this.http.put("http://localhost:8080/api/test/"+this.cardnumber+"/addInsurancepolicy",data);
  }

  public getpolicies(): Observable<any>{
    this.cardnumber=localStorage.getItem('cardnumber')
    return this.http.get("http://localhost:8080/api/test/getinsurancepolicies/"+this.cardnumber+"/ipolicy");
  }


}
