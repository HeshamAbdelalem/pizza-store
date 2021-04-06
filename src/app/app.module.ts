import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { NavComponent } from './componentes/shared/nav/nav.component';
import { ShoppingCartComponent } from './componentes/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './componentes/shopping-cart/product-list/product-list.component';
import { CartComponent } from './componentes/shopping-cart/cart/cart.component';
import { CartItemComponent } from './componentes/shopping-cart/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
