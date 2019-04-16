import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { CompanyComponent } from './company/company.component';
import { SavedComponent } from './saved/saved.component';

import { AccordionModule } from 'primeng/accordion'; 
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import {OrderListModule} from 'primeng/orderlist';



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    CarouselModule,
    TabMenuModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
