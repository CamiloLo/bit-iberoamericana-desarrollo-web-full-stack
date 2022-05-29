import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  user= {
    username:'',
    password:'',
   };

  ngOnInit(): void {
  }

  login() {
    console.log('user', this.user)
  }

}
