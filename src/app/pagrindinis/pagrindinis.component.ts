import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";




@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent {

  constructor() { 
   
   
  }
   
  
  vardas="vardas";
  nuotrauka="nuotrauka";
  suniukas="";
  manoNuotrauka="";
  adresas="";
  async gautiSuniuka(){
    //this.manoNuotrauka = await (await fetch("https://apidarbai.herokuapp.com/WeatherForecast/Suniukas")).json();
  let objektas=await (await fetch("https://apidarbai.herokuapp.com/WeatherForecast/Suniukas")).json();
  console.log(JSON.stringify(objektas));
  this.manoNuotrauka=objektas.nuotrauka
  this.adresas=JSON.stringify(objektas);
  }
 
  
 
}
