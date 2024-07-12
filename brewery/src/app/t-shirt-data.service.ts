import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Tshirt } from './t-shirt-list/t-shirt';

const URL = 'https://66889cc10ea28ca88b859f56.mockapi.io/ladri/camisetas';

@Injectable({
  providedIn: 'root'
})
export class TShirtDataService {
  private $tshirt: Tshirt[] = [];
  tshirt: BehaviorSubject<Tshirt[]> = new BehaviorSubject<Tshirt[]>([]);

  constructor(private http: HttpClient) { }

  public getAll(): void {
    this.http.get<Tshirt[]>(URL).subscribe(data => {
      this.$tshirt = data;
      this.tshirt.next(this.$tshirt);
    });
  }
  removeFromCart(tshirt: Tshirt) {
    let item: Tshirt | undefined = this.$tshirt.find((v1) => v1.name == tshirt.name);
    if (item) {
      item.stock += tshirt.quantity;
    }
    this.tshirt.next(this.$tshirt);
  }
}
