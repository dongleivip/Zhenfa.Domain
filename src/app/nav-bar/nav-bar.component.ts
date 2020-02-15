import { Component, OnInit } from '@angular/core';
import { NavBarItem } from './nav-bar-item/navBarItem';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  navBarItemList: NavBarItem[];
  constructor() {
    this.navBarItemList = [
      {
        name: 'Company Intro',
        url: 'intro',
      },
      {
        name: 'Products',
        url: 'products',
      },
      {
        name: 'Certifications',
        url: 'certification',
      },
      {
        name: 'Contact Us',
        url: 'contacts',
      },
    ];
  }

  ngOnInit(): void {}
}
