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
      {
        name: 'Nav4',
        url: '#',
      },
      {
        name: 'Nav5',
        url: '#',
      },
      {
        name: 'Nav6',
        url: '#',
      },
    ];
  }

  ngOnInit(): void {}
}
