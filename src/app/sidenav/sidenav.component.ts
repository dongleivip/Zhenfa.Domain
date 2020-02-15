import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavBarItem } from './nav-bar-item/navBarItem';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);

  navBarItemList: NavBarItem[] = [
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

  private mobileQueryListener: () => void;

  constructor(
    library: FaIconLibrary,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    library.addIcons(faBars);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
