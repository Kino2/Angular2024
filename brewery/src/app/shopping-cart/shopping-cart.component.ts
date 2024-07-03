import { Component } from '@angular/core';
import { TShirtCartService } from '../t-shirt-cart.service';
import { Tshirt } from '../t-shirt-list/t-shirt';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartList : Tshirt[] = [];
  constructor(private cart: TShirtCartService){
    cart.cartList.subscribe(c => this.cartList = c)
  }
}
