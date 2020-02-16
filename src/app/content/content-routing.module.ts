import { ContactsComponent } from './components/contacts/contacts.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ProductsComponent } from './components/products/products.component';
import { IntroComponent } from './components/intro/intro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotSaleComponent } from './components/hot-sale/hot-sale.component';

const routes: Routes = [
  { path: '', component: HotSaleComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
