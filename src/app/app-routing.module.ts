import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApieComponent } from './apie/apie.component';
import { DokumentacijaComponent } from './dokumentacija/dokumentacija.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { MeniuComponent } from './meniu/meniu.component';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



export const routes: Routes = [
  { path: 'apie', component: ApieComponent },
  { path: 'dokumentacija', component: DokumentacijaComponent },
  { path: 'pagrindinis', component: PagrindinisComponent },
  { path: '**', component: PagrindinisComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


