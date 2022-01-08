import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent {

  constructor() { 
  }
   ngOnInit():void{

   }
   apiNuoroda= "https://apidarbai.herokuapp.com/visi";
  
  vardas="vardas";
  nuotrauka="nuotrauka";
  suniukas="";
  manoNuotrauka="http://lt.happybowwow.org/05_-e1495398326133.jpg";
  adresas=JSON.stringify(JSON.parse('{ "vardas": "Bobikas 1", "nuotrauka": "http://lt.happybowwow.org/05_-e1495398326133.jpg"}'),null,4);
//adresas ,kad rodytu nuotrauka ir adresa
  
async gautiSuniuka(){
  // this.manoNuotrauka = await (await fetch("https://apidarbai.herokuapp.com/WeatherForecast/Suniukas")).json();
  let objektas=await (await fetch("https://apidarbai.herokuapp.com/suniukas")).json();
  console.log(JSON.stringify(objektas));
  this.manoNuotrauka=objektas.nuotrauka;
  this.adresas=JSON.stringify(objektas,null,4);//nul,4 suformatuoja kokiiu formatu rodyt teksta
  }
 
  async istrintiSuniuka() {
    
  }
  
}
