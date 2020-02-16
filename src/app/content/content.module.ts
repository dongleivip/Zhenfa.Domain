import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { IntroComponent } from './components/intro/intro.component';
import { ProductsComponent } from './components/products/products.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HotSaleComponent } from './components/hot-sale/hot-sale.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    IntroComponent,
    ProductsComponent,
    CertificationComponent,
    ContactsComponent,
    HotSaleComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
  exports: [
    IntroComponent,
    ProductsComponent,
    CertificationComponent,
    ContactsComponent,
  ],
})
export class ContentModule {}
