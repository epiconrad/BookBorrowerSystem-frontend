import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
      //private http: HttpClient
 
    username : string
    password : string
  
    ngOnInit() {
      //sessionStorage.setItem('token', '');
  }

  login() : void 
  {
      if(this.username == 'admin' && this.password == 'admin')
      {
          this.router.navigate(['manage']);
      }
      else
      {
          alert("Invalid Credentials");
      }
  }
  /*
  login() {
    let url = 'http://localhost:8080/login';
    this.http.post<Observable<boolean>>(url, {
      userName: this.model.username,
      password: this.model.password
  }).subscribe(isValid => {
      if (isValid) {
          sessionStorage.setItem(
            'token', 
            btoa(this.model.username + ':' + this.model.password)
          );
      this.router.navigate(['']);
      } else {
          alert("Authentication failed.")
      }
  });
  }*/
}