
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '@products/components/product/product';
import { ProductM } from '@shared/models/product.model';
import { Header } from '@shared/components/header/header';
import { Cart } from '@shared/services/cart';
import { ProductS } from '@shared/services/product';
import { Category } from '@shared/services/category';
import { CategoryM } from '@shared/models/category.model';
import { RouterModule } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-list',
  imports: [Product, Header, RouterModule, RouterLinkWithHref],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export default class List {

  products = signal<ProductM[]>([]);
  categories =signal<CategoryM[]>([]);
  private cartService = inject(Cart)
  private productService = inject(ProductS)
  private categoryService = inject(Category)

  @Input() category_id? : string;

  ngOnInit(){
    this.getCategories();
  }

  ngOnChanges(changes : SimpleChanges){
 this.getProducts()
  }

  addToCart(product : ProductM){
    this.cartService.addToCart(product)
  }

  private getProducts(){

    this.productService.getProducts(this.category_id)
    .subscribe({
      next : (products) => {
        this.products.set(products);
      },
      error: () => {
        
      }
    })
  }

    private getCategories(){

    this.categoryService.getAll()
    .subscribe({
      next : (data) => {
        this.categories.set(data);
      },
      error: () => {
        
      }
    })
  }

  }


