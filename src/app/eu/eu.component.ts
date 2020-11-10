import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  nome: string = 'Ricardo';
  idade: string = '30';
  pais: string = 'Venezuela';
  cidade: string = 'Rio de Janeiro';
  gosto: string = 'Motos';
  souEu: string = './assets/perfil.png';
  
  constructor() { }

  ngOnInit(): void {
  }

}
