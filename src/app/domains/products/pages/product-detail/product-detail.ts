
import { Component, inject, Input, signal } from '@angular/core';
import { ProductM } from '@shared/models/product.model';
import { ProductS } from '@shared/services/product';
import { Cart } from '@shared/services/cart';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input() id?: string;
  product = signal<ProductM |null>(null);
  cover = signal('');
  private productService = inject(ProductS)
  private cartService = inject(Cart)

  ngOnInit(){
    if(this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) =>{
          this.product.set(product);
          if (product.images.length > 0){
            this.cover.set(product.images[0])
          }

        }
      })
    }
    
  }

  changeCover(newImage: string){
    this.cover.set(newImage);
  }

  addToCart(){
    const product = this.product();
    if (product){
      this.cartService.addToCart(product)
    }
    
  }
}
