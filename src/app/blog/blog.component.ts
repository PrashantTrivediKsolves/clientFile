import { Component, OnInit } from '@angular/core';
import { PostBlogService } from '../services/post-blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private blogservices:PostBlogService) { }
  AllBlogs:any;
  ngOnInit(): void {
  }

  postBlog(data:any)
  {
    console.log(data);
    this.blogservices.addBlog(data);
  }
  getblog()
  {
    this.blogservices.getAllblog().subscribe((res)=>
    {
      console.log(res);
      this.AllBlogs=res;
    })
  }

}
