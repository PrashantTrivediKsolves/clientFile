import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostBlogService } from '../services/post-blog.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  query: string = '';

  results:any;

  // searchResults$: Observable<any[]>;
  ngOnInit(): void {

  }
  constructor(private http: HttpClient,private postservice:PostBlogService) { }

  search(): void {
    if (this.query.trim() !== '') {
      console.log(this.query);
    this.postservice.searchBlogs(this.query).subscribe((res)=>
    {
      if(res)
        {
          this.results=res;
        }
    })
    }
  }

}
