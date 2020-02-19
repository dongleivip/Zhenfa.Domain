import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products.service';
import { ProductItem } from '../product-item/ProductItem';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  items$: Observable<ProductItem[]>;
  items: ProductItem[];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.items$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) =>
        params.get('showAll') === 'true'
          ? this.productsService.getProducts()
          : this.productsService.getHotSaleProducts(),
      ),
    );

    // this.route.queryParamMap.subscribe(params => {
    //   this.isHotSale = params.get('isHotSale') === 'true';
    //
    //   if (params.get('isHotSale') === 'true') {
    //     this.productsService
    //       .getHotSaleProducts()
    //       .subscribe(products => (this.items = products));
    //   } else {
    //     this.productsService
    //       .getProducts()
    //       .subscribe(products => (this.items = products));
    //   }
    // });

    this.items$.subscribe(res => (this.items = res));
    // this.text = this.route.queryParamMap.pipe(map(paramMap => paramMap.get('isHotSale')));
  }
}
