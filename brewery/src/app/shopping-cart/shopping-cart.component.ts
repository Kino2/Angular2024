import { Component } from '@angular/core';
import { TShirtCartService } from '../t-shirt-cart.service';
import { Tshirt } from '../t-shirt-list/t-shirt';
import { Observable } from 'rxjs';
import { TShirtDataService } from '../t-shirt-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  cartList$: Observable<Tshirt[]>;

  constructor(private cart: TShirtCartService, private stock: TShirtDataService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  removeFromCart(tshirt: Tshirt): void {
    this.stock.removeFromCart(tshirt);
    this.cart.removeFromCart(tshirt);
    tshirt.stock += tshirt.quantity;
    tshirt.quantity = 0;
  }
}
