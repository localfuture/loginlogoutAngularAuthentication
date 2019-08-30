import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  onsubmit(data: NgForm) {
    const name = data.value.email;
    const pass = data.value.password;
    
    if (name == "admin" && pass == "1234") {
      localStorage.setItem('loggedIn','true');
      this.router.navigateByUrl('welcome');
    }
    
  }

  ngOnInit() {
  }

}
