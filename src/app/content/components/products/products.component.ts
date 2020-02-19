import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { ProductItem } from '../product-item/ProductItem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  items: ProductItem[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe(products => (this.items = products));
  }
}
