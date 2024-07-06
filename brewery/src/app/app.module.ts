import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TShirtListComponent } from './t-shirt-list/t-shirt-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { BreweryTShirtsComponent } from './brewery-t-shirts/brewery-t-shirts.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TShirtListComponent,
    ShoppingCartComponent,
    BreweryTShirtsComponent,
    BreweryAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
