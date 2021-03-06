import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderTableComponent } from './orders/order-table/order-table.component';
import { OrderPlacedComponent } from './menu/order-placed/order-placed.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 4
import { NoopInterceptor } from './noop-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OrdersComponent,
    MenuComponent,
    NewOrderComponent,
    OrderListComponent,
    OrderTableComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
