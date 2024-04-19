import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient,private router:Router,private cookie:CookieService) { }
  signUpUser(data:any)
  {
    this.http.post("http://localhost:8000/signup", data,{observe:'response'}).subscribe((res)=>
    {
      if(res)
      {
        console.log(res);
        this.router.navigate(['/signin']);
      }
    });
  }
  signinUser(data:any)
  {
    console.log("helllo");
    const url = 'http://localhost:8000/login';
    const body = {
      email: data.email,
      password: data.password,
    };
    console.log(body);
    this.http.post(url, body).subscribe(
      (res: any) => {
        console.log(res.token);
        //localStorage.setItem('user', JSON.stringify(res)); // Assuming server response contains user data
        this.cookie.set('token',res.token);
        console.log("User signin success full");
        let token=res.token;
        // this.router.navigate(['my-blog']);

        const decoded = this.getdecode(token);

        console.log(decoded.role);

        if(decoded.role==='user')
        {
          this.router.navigate(['navbarUser']);
        }
        else if(decoded.role==='admin')
        {
          this.router.navigate(['navbarAdmin']);
        }
      },
      (error) => {
        console.log('Login failed:', error);
        // Handle login error (e.g., display error message)
      }
    );
  }
  getdecode(token:string):any{
    try{
      return jwtDecode(token);
    }
    catch(error)
    {
      return error
    }
  }
}
