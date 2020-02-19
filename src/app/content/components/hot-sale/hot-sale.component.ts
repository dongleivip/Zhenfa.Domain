import { ProductsService } from '../../../products.service';
import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../product-item/ProductItem';

@Component({
  selector: 'app-hot-sale',
  templateUrl: './hot-sale.component.html',
  styleUrls: ['./hot-sale.component.scss'],
})
export class HotSaleComponent implements OnInit {
  items: ProductItem[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getHotSaleProducts()
      .subscribe(products => (this.items = products));
  }
}
