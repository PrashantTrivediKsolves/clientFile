import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { PendingBlogComponent } from './pending-blog/pending-blog.component';
import { AllPendingBlogsComponent } from './all-pending-blogs/all-pending-blogs.component';

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
    },
    {
      path:"navbarUser",
      component:Navbar1Component
    },
    {
      path:"navbarAdmin",
      component:NavbarAdminComponent
    },
    {
      path:"pendingBlog",
      component:PendingBlogComponent
    },
    {
      path:"All-pending-blog",
      component:AllPendingBlogsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
