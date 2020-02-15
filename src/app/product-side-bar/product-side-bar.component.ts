import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-side-bar',
  templateUrl: './product-side-bar.component.html',
  styleUrls: ['./product-side-bar.component.scss'],
})
export class ProductSideBarComponent implements OnInit {
  constructor() {}
  products = [
    {
      name: 'Photos',
    },
    {
      name: 'Recipes',
    },
    {
      name: 'Work',
    },
  ];
  ngOnInit(): void {}
}
