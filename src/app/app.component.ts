import { Component, ViewChild,ElementRef } from '@angular/core';

import { Observable, fromEvent ,Subscription, Subject} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map,filter,tap, switchMap, debounceTime,shareReplay,share} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images:any;
  // @ViewChild('search',{static:true}) search?:ElementRef<HTMLInputElement>
  // title = 'clientFile';
  // typeAheadSub?:Subscription
  // users:any;
  // ngOnInit()
  // {
  //   // const searchObs=fromEvent(this.search!.nativeElement,"input").pipe(
  //   //   map((inpEvent:any)=>inpEvent.target.value)
  //   // )
  //   // searchObs.subscribe((value:any)=>
  //   // {
  //   //   console.log(value);
  //   //   //console.log(value.target.value);
  //   // })
  //   // const searchObs=fromEvent(this.search!.nativeElement,"input").pipe(
  //   //   map((e:any)=>
  //   //     {
  //   //     return ajax(`https://api.github.com/search/user?q=${e.target.value}`)
  //   //     }
  //   //   )
  //   // )
  //   const searchObs=fromEvent(this.search!.nativeElement,"input").pipe(
  //     debounceTime(1000),
  //     filter((e:any)=>e.target.value!=""),
  //     switchMap((e:any)=>
  //       {
  //       return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
  //       }
  //     ),
  //     map((ajaxres:any)=>
  //     {
  //       return ajaxres.response.items;
  //     }),
  //   )
  //   // this.typeAheadSub=searchObs.subscribe((value:any)=>
  //   // {
  //   //   console.log(value);
  //   //   this.users=value;
  //   //   //console.log(value.target.value);
  //   // })

  //   // observable..=> pizzawho emits the data.....
  //  const pizzaObsevabe= new Observable((subscriber)=>
  //   {
  //     console.log("inside observable");
  //     subscriber.next({name:"Farm House",veg:true,size:"small"})
  //     // subscriber.next({name:"Margherita",veg:true,size:"large"})
  //     // subscriber.next({name:"Barbecue chicken",veg:false,size:"medium"})
  //     subscriber.complete();
  //   }).pipe(
  //     tap((pizza:any)=>{
  //       console.log("inside pipe");
  //       // side effect we can perform
  //       // if(pizza.size=="large")
  //       //   {
  //       //     throw new Error("large size pizza is not avaliable")
  //       //   }
  //       // console.log("log from pipe",pizza);
  //     }),
  //     filter((pizza:any)=>{

  //       return pizza.veg==true

  //     }),
  //     map((pizza:any)=>
  //     {
  //       return pizza.name
  //     }),
  //     // share(),
  //     shareReplay()
  //   )
  //   // subscriber/observer -> who consumes the emited data....
  //   // pizzaObsevabe.subscribe({
  //   //   next:(value)=>console.log(value),
  //   //   error:(err)=>console.log(err.message),
  //   //   complete:()=>console.log("I am done eating pizzasa")
  //   // })
  //   // pizzaObsevabe.subscribe(
  //   //   (value)=>console.log(value),
  //   //   (err)=>console.log(err.message),
  //   //   ()=>console.log("I am done eating pizzasa")
  //   // )

  //   const subject=new Subject<number>();

  //   // consuming

  //   // multicast
  //   subject.subscribe((value)=>
  //   {
  //     console.log("sub1",value);
  //   })
  //   subject.subscribe((value)=>
  //     {
  //       console.log("sub2",value);
  //     })

  //     subject.next(1);// emiting
  //     subject.next(2);

  // }
  // ngOnDestroy()
  // {
  //   if(this.typeAheadSub)
  //     {
  //       this.typeAheadSub.unsubscribe();
  //     }
  // }
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('http://localhost:8000/upload', formData)
      .subscribe(
        response => {
          console.log('File uploaded successfully:', response);
          // Handle success
        },
        error => {
          console.error('Error uploading file:', error);
          // Handle error
        }
      );
  }
  getAllFiles()
  {
    this.http.get<any[]>('http://localhost:8000/uploads')
      .subscribe(
        (images: string[]) => {
          this.images = images;
          console.log(images);
        },
        error => {
          console.error('Error fetching images:', error);
        }
      );
  }
}

// cold obserable to hot obserable using sharereply
