import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas';

  constructor(
    private loginService: LoginService
  ){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAPE0mLpHWA3EBYYqsbggl-saZtAlH_PNo",
      authDomain: "listado-personas-c5c74.firebaseapp.com"
    });
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
