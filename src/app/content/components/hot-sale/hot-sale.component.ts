import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item/ProductItem';

@Component({
  selector: 'app-hot-sale',
  templateUrl: './hot-sale.component.html',
  styleUrls: ['./hot-sale.component.scss'],
})
export class HotSaleComponent implements OnInit {
  items: ProductItem[];
  constructor() {
    this.items = Array.from({ length: 10 }, (_, i) => ({
      name: `产品${i + 1}`,
      imageUrl:
        'https://www.apple.com/v/home/a/images/heroes/iphone-11/hero__dvsxv8smkkgi_small_2x.jpg',
      productId: i,
    }));
  }

  ngOnInit(): void {}
}
