import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [];
  imagemLargura = 50;
  imagemMargin = 2;
  mostrarImagem = false;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

getEventos() {

  this.http.get('http://localhost:5000/api/values').subscribe(
    response => { this.eventos = response; },
    error => {
      console.log(error);
    }
  );
}

}
