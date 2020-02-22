import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '../../../products.service';
import { ProductItem } from '../product-item/ProductItem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<ProductItem>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productsService.getProduct(+params.get('id')),
      ),
    );
  }
}
