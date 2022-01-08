import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ivedimas',
  templateUrl: './ivedimas.component.html',
  styleUrls: ['./ivedimas.component.css']
})
export class IvedimasComponent {
  forma = new FormGroup({
    vardas: new FormControl(""),
    nuotrauka: new FormControl("")
  })
 

  constructor() { }


  ngOnInit(): void {
  }

  ivestisuniuka() {

  }

  async pateiktiForma() {
    let objektas = this.forma.value;
    console.log(objektas);
    fetch("https://apidarbai.herokuapp.com/prideti",
      {
        method: 'post',//istraukta is interneto
        headers: {

          'Accept': 'application/json, text/plain, */*',

          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objektas)
      })
      .then(res => res.json())

      .then(res => console.log(res));

  }
  

}
