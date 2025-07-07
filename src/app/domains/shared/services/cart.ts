import { computed, Injectable, signal } from '@angular/core';
import { ProductM } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  cart = signal<ProductM[]>([]);
  total = computed(() => {
    const cart = this.cart()
    return   cart.reduce((total, product) => total + product.price, 0)
  
  })

  constructor() { }

  addToCart(product: ProductM){
    this.cart.update(state => [...state, product])
  }
}
