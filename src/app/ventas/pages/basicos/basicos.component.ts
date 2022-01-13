import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  nombreLower: string = 'brandon';
  nombreUpper: string = 'JUAN';
  nombreCompleto: string = 'fErNanDo HeRreRa';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
