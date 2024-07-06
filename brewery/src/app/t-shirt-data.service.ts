import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Tshirt } from './t-shirt-list/t-shirt';

const URL = 'https://66889cc10ea28ca88b859f56.mockapi.io/ladri/camisetas';

@Injectable({
  providedIn: 'root'
})
export class TShirtDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Tshirt[]> {
    return this.http.get<Tshirt[]>(URL)
      .pipe(
        tap((tshirts: Tshirt[]) => tshirts.forEach(tshirt => tshirt.quantity = 0))
      );
  }
}
