import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable,} from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Injectable({

  providedIn: 'root'

})

export class PostBlogService {

  constructor(private http:HttpClient) { }
  addBlog(data:any)
  {
    this.http.post("http://localhost:8000/add-blog",data,{observe:'response'}).subscribe((res)=>
    {
      console.log(res);
    })
  }
  getAllblog()
  {
    return this.http.get("http://localhost:8000/get-blogs");
  }
  searchBlogs(query:any)
  {
    // return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
    return this.http.get<any>(`http://localhost:8000/search/posts?q=${query}`);
  }
}
