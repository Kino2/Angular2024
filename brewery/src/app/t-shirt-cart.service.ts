import { Injectable } from '@angular/core';
import { Tshirt } from './t-shirt-list/t-shirt';
import { BehaviorSubject } from 'rxjs';

/**
 * Maneja la logica del carrito
 */
@Injectable({
  providedIn: 'root'
})
export class TShirtCartService {

  private _cartList: Tshirt[] = [];
  cartList: BehaviorSubject<Tshirt[]> = new BehaviorSubject<Tshirt[]>([]);


  constructor() { }

  addToCart(tshirt: Tshirt) {
    let item: Tshirt | undefined = this._cartList.find((v1) => v1.name == tshirt.name);
    if (!item) {
      this._cartList.push({ ...tshirt });
    } else {
      item.quantity += tshirt.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
  removeFromCart(tshirt: Tshirt) {
    let item: Tshirt | undefined = this._cartList.find((v1) => v1.name !== tshirt.name);
    this.cartList.next(this._cartList);
  }
  ngOnInit(): void {
  }

}
