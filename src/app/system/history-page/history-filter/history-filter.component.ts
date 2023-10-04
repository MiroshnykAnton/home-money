import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'wfm-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
})
export class HistoryFilterComponent implements OnInit {
  @Output() onFilterCancel = new EventEmitter<any>();
  @Output() onFilterApply = new EventEmitter<any>();

  @Input() categories: Category[] = [];

  selectedPeriod = 'd';
  selectedTypes: any[] = [];
  selectedCategories: any[] = [];

  timePeriods = [
    { type: 'd', label: 'День' },
    { type: 'w', label: 'Тиждень' },
    { type: 'M', label: 'Місяць' },
  ];

  types = [
    { type: 'income', label: 'Дохід' },
    { type: 'outcome', label: 'Витрата' },
  ];
  constructor() {}
  ngOnInit(): void {}

  closeFilter() {
    this.selectedTypes = [];
    this.selectedCategories = [];
    this.selectedPeriod = 'd';
    this.onFilterCancel.emit();
  }

  [index: string]: any;
  private calculateInputParams(field: string, checked: boolean, value: string) {
    if (checked) {
      this[field].indexOf(value) === -1 ? this[field].push(value) : null;
    } else {
      this[field] = this[field].filter((i: any) => i !== value);
    }
  }

  handleChangeType({ checked, value }: any) {
    this.calculateInputParams('selectedTypes', checked, value);
    // debugger
  }

  handleChangeCategory({ checked, value }: any) {
    this.calculateInputParams('selectedCategories', checked, value);
  }

  applyFilter() {
    this.onFilterApply.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod,
    });
  }
}
