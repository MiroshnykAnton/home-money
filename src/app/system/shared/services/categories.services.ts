import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { BaseApi } from "src/app/shared/core/base-api";
import { Category } from "../models/category.model";

@Injectable()
export class CategoriesService extends BaseApi {
  constructor(public override http: HttpClient) {
    super(http);
  }

  addCategory(category: Category): Observable<Category> {
    return this.post('categories', category);
  }

  getCategories(): Observable<Category[]> {
    return this.get('categories');
  }

  updateCategory(category: Category): Observable<Category> {
    return this.put(`categories/${category.id}`, category);
  }

  getCategoryById(id:number): Observable<Category> {
    return this.get(`categories/${id}`);
  }
}