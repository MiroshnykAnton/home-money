import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Category } from '../../shared/models/category.model';
import { CategoriesService } from '../../shared/services/categories.services';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnDestroy {

  sub1!: Subscription;

  @Output() onCategoryAdd = new EventEmitter<Category>();

  constructor(private categoriesService: CategoriesService) {}

  onSubmit(form: NgForm) {
    let { name, capacity } = form.value;
    if (capacity < 0) capacity *= -1;
    // console.log(form.value);
    // console.log(form);

    const category = new Category(name, capacity);

    this.sub1 = this.categoriesService
      .addCategory(category)
      .subscribe((category: Category) => {
        form.reset();
        form.form.patchValue({ capacity: 1 });
        this.onCategoryAdd.emit(category);
        // console.log(category);
      });
  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe();
  }

}
