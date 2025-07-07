import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductM } from '../../models/product.model';
import { Cart } from '../../services/cart';
@Component({
  selector: 'app-header',
  imports: [CommonModule,],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  hideSideMenu = signal(true);
  
  private cartService = inject(Cart)
  cart = this.cartService.cart
  total = this.cartService.total
 

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
  
  



}
