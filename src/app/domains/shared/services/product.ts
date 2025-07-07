import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductM } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductS {

  private http = inject(HttpClient);

  constructor() { }

  getProducts(category_id?:string){
    const url = new URL("https://api.escuelajs.co/api/v1/products")
    if (category_id){
      url.searchParams.set('categoryId', category_id)
    }
    return this.http.get<ProductM[]>(url.toString());
;
  }

  getOne(id:string){
 return this.http.get<ProductM>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
