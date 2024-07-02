import { Component } from '@angular/core';
import { Tshirt } from './t-shirt';

@Component({
  selector: 'app-t-shirt-list',
  templateUrl: './t-shirt-list.component.html',
  styleUrl: './t-shirt-list.component.css'
})
export class TShirtListComponent {


  tshirts: Tshirt[] = [
    {
      "image": "assets/img/river96.jpg",
      "name": "River Plate",
      "year": 1996,
      "price": 2000,
      "stock": 0,
      "clearance": false,
      "quantity": 0,
    },
    {
      "image": "assets/img/boca00.jpg",
      "name": "Boca Juniors",
      "year": 2000,
      "price": 9120,
      "stock": 26,
      "clearance": true,
      "quantity": 0,
    },
    {
      "image": "assets/img/cai02.jpg",
      "name": "Independiente",
      "year": 2002,
      "price": 1500,
      "stock": 22,
      "clearance": false,
      "quantity": 0,
    },
    {
      "image": "assets/img/racing01.jpg",
      "name": "Racing Club",
      "year": 2001,
      "price": 2100,
      "stock": 22,
      "clearance": false,
      "quantity": 0,
    },
    {
      "image": "assets/img/casla14.jpg",
      "name": "San Lorenzo",
      "year": 2014,
      "price": 3200,
      "stock": 100,
      "clearance": false,
      "quantity": 0,
    }
  ];

  upQuantity(tshirt: Tshirt): void {
    if (tshirt.quantity < tshirt.stock) {
      tshirt.quantity++;
    }
  }

  downQuantity(tshirt: Tshirt): void {
    if (tshirt.quantity > 0) {
      tshirt.quantity--;
    }
  }
  changeQuantity(event: KeyboardEvent, tshirt: Tshirt): void {

    }
  }

