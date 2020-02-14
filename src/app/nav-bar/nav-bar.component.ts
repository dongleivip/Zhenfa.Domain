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
        name: 'Nav1',
        url: '#',
      },
      {
        name: 'Nav2',
        url: '#',
      },
      {
        name: 'Nav3',
        url: '#',
      },
    ];
  }

  ngOnInit(): void {}
}
