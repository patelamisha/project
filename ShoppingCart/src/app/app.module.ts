import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { MaterialModule } from '@angular/material';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from './modules/material';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { SERVICES } from './services';
import { ACTIONS } from './store/actions';
import { reducers, metaReducers } from './store/reducers';
import { AllEffects } from './store/effects';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { ComputerComponent } from './components/computer/computer.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { FilterComponent } from './components/filter/filter.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    MobileComponent,
    ComputerComponent,
    KitchenComponent,
    FilterComponent,
    SortFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    HttpClientModule,

    AppRoutingModule,
    StoreModule.forRoot(reducers,
      // { metaReducers }
    ),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
    AllEffects,
  ],
  providers: [ SERVICES, ACTIONS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
