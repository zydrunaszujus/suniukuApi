import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { ApieComponent } from './apie/apie.component';
import { DokumentacijaComponent } from './dokumentacija/dokumentacija.component';


import { HttpClientModule } from "@angular/common/http";
import { MeniuComponent } from './meniu/meniu.component';



@NgModule({
  declarations: [
    AppComponent,
    PagrindinisComponent,
    ApieComponent,
    DokumentacijaComponent,
    MeniuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
