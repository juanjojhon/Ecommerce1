import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductM } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductS {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(){
    return this.http.get<ProductM[]>("https://api.escuelajs.co/api/v1/products");
  }
}
