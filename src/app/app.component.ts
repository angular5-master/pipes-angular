import { Component } from '@angular/core';
import { resolve, reject } from 'q';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Alfredo";

  nombre2 = "alfredo bravo cuero";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.345;

  salario = 2500000;

  heroe = {
    nombre: "Alfredo",
    apellidos: "Bravo Cuero",
    edad: 33,
    direccion:{
      ciudad: "Medellin",
      barrion: "Navarra"
    }
  };

  valorDePromesa = new Promise( (resolve, reject)=>{
    setTimeout( ()=>resolve('Llego la data!!'),3500 );
  });

  fecha = new Date();

  video = 'K1A0ua1Xhok';
}
