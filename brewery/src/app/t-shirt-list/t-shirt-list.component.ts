import { Component } from '@angular/core';
import { Tshirt } from './t-shirt';
import { TShirtCartService } from '../t-shirt-cart.service';
import { TShirtDataService } from '../t-shirt-data.service';
@Component({
  selector: 'app-t-shirt-list',
  templateUrl: './t-shirt-list.component.html',
  styleUrl: './t-shirt-list.component.css'
})
export class TShirtListComponent {


  tshirts: Tshirt[] = [];

  constructor(private cart: TShirtCartService, private TshirtDataService: TShirtDataService) {

  }
  ngOnInit(): void {
    this.TshirtDataService.getAll()
      .subscribe(tshirts => this.tshirts = tshirts)
  }
  maxReached(m: string) {
    alert(m);
  }
  addToCart(tshirt: Tshirt): void {
    if(tshirt.quantity > 0){
      this.cart.addToCart(tshirt)
      tshirt.stock -= tshirt.quantity;
      tshirt.quantity = 0;
    }
  }
}

