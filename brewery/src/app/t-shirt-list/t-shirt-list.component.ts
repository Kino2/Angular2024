import { Component } from '@angular/core';
import { Tshirt } from './t-shirt';
import { TShirtCartService } from '../t-shirt-cart.service';
import { TShirtDataService } from '../t-shirt-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-t-shirt-list',
  templateUrl: './t-shirt-list.component.html',
  styleUrl: './t-shirt-list.component.css'
})
export class TShirtListComponent {


  tshirts: Observable<Tshirt[]> = new Observable;

  constructor(private cart: TShirtCartService, private TshirtDataService: TShirtDataService) {

  }
  ngOnInit(): void {
    this.TshirtDataService.getAll();
    this.tshirts = this.TshirtDataService.tshirt.asObservable();
  }
  addToCart(tshirt: Tshirt): void {
    if (tshirt.quantity > 0) {
      if (tshirt.stock < tshirt.quantity) {
        tshirt.quantity = tshirt.stock;
      }
      this.cart.addToCart(tshirt)
      tshirt.stock -= tshirt.quantity;
      tshirt.quantity = 0;
    }
  }
}

