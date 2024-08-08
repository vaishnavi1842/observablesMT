import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component implements OnInit {
  usernamevalue!:string;

  constructor(
    private _UsersService : UsersService
    
  ) { }

  ngOnInit(): void {
    this._UsersService.userSub$
    .subscribe(res=>{
        this.usernamevalue=res      
    })
  }

}
