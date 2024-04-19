import { Component, OnInit } from '@angular/core';
import { PendingBlogComponent } from '../pending-blog/pending-blog.component';
import { PendingBlogService } from '../services/pending-blog.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-pending-blogs',
  templateUrl: './all-pending-blogs.component.html',
  styleUrls: ['./all-pending-blogs.component.css']
})

export class AllPendingBlogsComponent implements OnInit {

  pendingBlogs:any;

  // pendingblogContent=new Subject<any>();

  constructor(private pendingblogservice:PendingBlogService,private http:HttpClient) { }

  ngOnInit(): void {
  }
  pendingBlog()
  {
    this.pendingblogservice.getAllPendingBlog().subscribe((res)=>
    {
      if(res)
        {
          this.pendingBlogs=res;
          console.log(this.pendingBlogs);
        }
    })
  }
  DeleteBlog(postId: any): void {
    this.pendingblogservice.deleteBlog(postId).subscribe(
      () => {
        console.log('Blog deleted successfully');
        this.pendingBlog();
        // Refresh the blog list after deletion...
      },
    );
  }
  getpendingBlogById(postId:any)
  {
    this.pendingblogservice.getPendingBlogById(postId).subscribe((res)=>
    {
      // this.pendingblogContent.next(res);
      // console.log("res = ",res);
      // console.log(typeof res);
      this.http.post("http://localhost:8000/add-blog",res,{observe:'response'}).subscribe((res)=>
      {
        console.log("blog Added successFully");
        console.log(res);
      })
    })
    this.DeleteBlog(postId);
  }

}
