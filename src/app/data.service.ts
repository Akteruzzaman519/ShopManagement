import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  SaveProduct(products: any[]) {
    return this.http.post('https://shopmanagement-1-default-rtdb.firebaseio.com/products.json', products);
  }
}
