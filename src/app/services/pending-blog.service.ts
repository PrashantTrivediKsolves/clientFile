import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PendingBlogService {
  constructor(private http:HttpClient) { }
  addPendingBlog(data:any)
  {
    this.http.post("http://localhost:8000/add-blog-pending",data,{observe:'response'}).subscribe((res)=>
    {
      console.log(res);
    })
  }

  getAllPendingBlog()
  {
    return this.http.get("http://localhost:8000/get-blogs-pending");
  }
  deleteBlog(postId:any)
  {
    return this.http.delete(`http://localhost:8000/pendingblog/${postId}`);
  }
  getPendingBlogById(postId:any)
  {
    return this.http.get(`http://localhost:8000/pendingblog/${postId}`);
  }
}
