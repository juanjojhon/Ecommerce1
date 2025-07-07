import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Product } from '@products/components/product/product';
import { ProductM } from '@shared/models/product.model';
import { Header } from '@shared/components/header/header';
import { Cart } from '@shared/services/cart';
import { ProductS } from '@shared/services/product';

@Component({
  selector: 'app-list',
  imports: [CommonModule, Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  products = signal<ProductM[]>([]);
  private cartService = inject(Cart)
  private productService = inject(ProductS)

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next : (products) => {
        this.products.set(products)

      }
    })
  }



  addToCart(product : ProductM){
    this.cartService.addToCart(product)
  }

}
