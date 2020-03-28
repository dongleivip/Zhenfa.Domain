import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'category/:id', component: ProductsComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
