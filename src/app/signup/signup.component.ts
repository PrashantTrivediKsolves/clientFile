import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupservice:ServiceService) { }

  ngOnInit(): void {

  }
  signUpUser(data:any)
  {
    this.signupservice.signUpUser(data);
  }

}
