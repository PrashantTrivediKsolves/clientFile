import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  constructor(private signinservice:ServiceService) { }

  ngOnInit(): void {
  }
  signinUser(data:any)
  {
    this.signinservice.signinUser(data);
  }

}
