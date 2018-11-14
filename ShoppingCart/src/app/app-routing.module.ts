import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MobileComponent } from './components/mobile/mobile.component';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'about-page',
    component: AboutComponent
  },
  {
    path: 'contact-page',
    component: ContactComponent
  }, 
  { path: 'login-page',
  component: LoginComponent
  },
  {
    path: 'mobile-page',
    component: MobileComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
