import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { NavBarItem } from './nav-bar-item/navBarItem';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  fillerNav: string[];

  navBarItemList: NavBarItem[] = [
    {
      name: 'Company Intro',
      url: 'intro',
    },
    {
      name: 'Products',
      url: 'products',
      queryParams: { showAll: true },
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

  private mobileQueryListener: () => void;

  constructor(
    library: FaIconLibrary,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private categoryService: CategoryService,
  ) {
    library.addIcons(faBars);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.fillerNav = categories.map(category => category.name);
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
