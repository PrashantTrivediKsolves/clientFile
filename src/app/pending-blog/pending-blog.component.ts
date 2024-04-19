import { Component, OnInit } from '@angular/core';
import { PendingBlogService } from '../services/pending-blog.service';

@Component({
  selector: 'app-pending-blog',
  templateUrl: './pending-blog.component.html',
  styleUrls: ['./pending-blog.component.css']
})
export class PendingBlogComponent implements OnInit {
  constructor(private pendingblogservice:PendingBlogService) { }

  ngOnInit(): void {
  }
  postPendingBlog(data:any)
  {
    this.pendingblogservice.addPendingBlog(data);
  }

}
