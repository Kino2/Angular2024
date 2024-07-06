import { Component } from '@angular/core';
import { TShirtCartService } from '../t-shirt-cart.service';
import { Tshirt } from '../t-shirt-list/t-shirt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'] 
})
export class ShoppingCartComponent {

  cartList$: Observable<Tshirt[]>;

  constructor(private cart: TShirtCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
}
