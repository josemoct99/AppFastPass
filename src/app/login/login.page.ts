import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class LoginPage implements OnInit {

  public isLogged : boolean;

  constructor() { }

  ngOnInit() {
    if(1>0){
      this.isLogged = true;
      console.log("Entro a LOGIN");
    }
    
  }

}
