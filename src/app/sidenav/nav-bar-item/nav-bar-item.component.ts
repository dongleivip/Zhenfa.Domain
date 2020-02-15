import { Component, OnInit, Input } from '@angular/core';
import { NavBarItem } from './navBarItem';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss']
})
export class NavBarItemComponent implements OnInit {
  @Input() navItem: NavBarItem;

  constructor() { }

  ngOnInit(): void {
  }

}
