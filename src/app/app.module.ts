import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { ApieComponent } from './apie/apie.component';
import { DokumentacijaComponent } from './dokumentacija/dokumentacija.component';
import { IvedimasComponent } from './ivedimas/ivedimas.component';

import { HttpClientModule } from "@angular/common/http";
import { MeniuComponent } from './meniu/meniu.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    PagrindinisComponent,
    ApieComponent,
    DokumentacijaComponent,
    MeniuComponent,
    IvedimasComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
