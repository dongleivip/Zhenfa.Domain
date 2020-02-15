import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { IntroComponent } from './components/intro/intro.component';
import { ProductsComponent } from './components/products/products.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    IntroComponent,
    ProductsComponent,
    CertificationComponent,
    ContactsComponent,
  ],
  imports: [CommonModule, ContentRoutingModule],
  exports: [
    IntroComponent,
    ProductsComponent,
    CertificationComponent,
    ContactsComponent,
  ],
})
export class ContentModule {}
