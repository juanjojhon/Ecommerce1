import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryM } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class Category {

 private http = inject(HttpClient);
  
  constructor() { }

  getAll(){
      return this.http.get<CategoryM[]>("https://api.escuelajs.co/api/v1/categories");
    }
}
