import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

import { BaseApi } from "src/app/shared/core/base-api";
import { Bill } from "../models/bill.model";

export interface ICurrencyResponse {
  base: string;
  date: string;
  rates: {
    [key: string]:number
  }
}

@Injectable()
export class BillService extends BaseApi {
  constructor(public override http: HttpClient) {
    super(http);
  }

  // getBill(): Observable<Bill> {
  //   return this.http.get<Bill>('http://localhost:3000/bill');
  // }     сократили код и сделали ниже

  getBill(): Observable<Bill> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.put('bill', bill);
  }

  getCurrency(base: string = 'RUB'): Observable<ICurrencyResponse> {
    return of({
      base: 'RUB',
      date: '2020-08-08',
      rates: { 'USD': 0.033, 'EUR': 0.03 },
    });
    // this.http.get<any>(`http://api.fixer.io/latest?base=${base}`);
  }
}