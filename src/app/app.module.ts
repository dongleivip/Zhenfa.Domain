import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarItemComponent } from './nav-bar/nav-bar-item/nav-bar-item.component';
import { MatIconModule } from '@angular/material/icon';
import { ContentRoutingModule } from './content/content-routing.module';

@NgModule({
  declarations: [AppComponent, NavBarComponent, NavBarItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    ContentRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
