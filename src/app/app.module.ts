import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { PendingBlogComponent } from './pending-blog/pending-blog.component';
import { AllPendingBlogsComponent } from './all-pending-blogs/all-pending-blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    BlogComponent,
    Navbar1Component,
    NavbarAdminComponent,
    PendingBlogComponent,
    AllPendingBlogsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
