import { Component, Input, OnInit } from '@angular/core';

import { Bill } from '../../shared/models/bill.model';
import { ICurrencyResponse } from '../../shared/services/bill.service';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss'],
})
export class BillCardComponent implements OnInit {
  @Input() bill!: Bill;
  @Input() currency!: ICurrencyResponse;

  dollar!: number;
  euro!: number;

  constructor() {}

  ngOnInit() {
    // const { rates } = this.currency;
    // this.dollar = rates['USD'] * this.bill.value;
    // this.euro = rates['EUR'] * this.bill.value;
  }
}
