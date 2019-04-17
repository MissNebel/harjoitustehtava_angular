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
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ToolbarModule } from 'primeng/toolbar';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    SavedComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    CarouselModule,
    MenubarModule,
    TableModule,
    ToolbarModule,
    VirtualScrollerModule,
    InputTextModule,
    ButtonModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
