import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path:"",
    component:SignupComponent
  },
  { path: 'signin'
  , component: SigninComponent
} ,
    {
      path:"header",
      component:HeaderComponent
    },
    {
      path:"home",
      component:HomeComponent
    },
    {
      path:"blog",
      component:BlogComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
