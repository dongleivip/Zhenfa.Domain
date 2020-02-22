import { ProductItem } from './content/components/product-item/ProductItem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductItem[]> {
    return this.http.get<ProductItem[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<ProductItem> {
    return this.http
      .get<ProductItem[]>(this.productsUrl)
      .pipe(map(response => response.filter(p => p.productId === id)[0]));
  }

  getHotSaleProducts(): Observable<ProductItem[]> {
    return this.http
      .get<ProductItem[]>(this.productsUrl)
      .pipe(map(response => response.filter(p => p.isHotSale)));
  }
}
