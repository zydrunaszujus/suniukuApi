import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../app-routing.module';
@Component({
  selector: 'app-meniu',
  templateUrl: './meniu.component.html',
  styleUrls: ['./meniu.component.css']
})
export class MeniuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
grizti(){
  window.location.href='pagrindinis';
}
}
