import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductM } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse-pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago-pipe';
@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe, TimeAgoPipe],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input({required:true}) product! : ProductM ;
  

  @Output() addToCart = new EventEmitter();


  addToCartHandler(){
    this.addToCart.emit(this.product);
  }
}
