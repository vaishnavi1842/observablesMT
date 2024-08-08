import { Component, OnInit } from '@angular/core';
import { OffService } from '../../services/off.service';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';
import { Ipost } from 'src/app/models/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   posts !:Array<Ipost>;
  constructor(
    private _OffService : OffService,
    private _PostsService : PostsService
  ) { }

  ngOnInit(): void {
     this._OffService.of$
     .subscribe(num=>{
      console.log(num);
      
     })

     this._OffService.skills$
     .subscribe(skills=>{
      console.log(skills);
      
     })

     this._PostsService.fetchAllPosts()
     .subscribe(res=>{
        console.log(res);
        this.posts=res
        
     })

     this._OffService.OurInterval$
     .subscribe(
      (num)=>{
      console.log(num); 
     },
     (err)=>{
        console.log(err);
        
     },
     ()=>{
      console.log();
      
     }
    )
  }

}
