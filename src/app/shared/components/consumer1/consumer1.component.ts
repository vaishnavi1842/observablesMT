import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component implements OnInit {
  usernamevalue!:string;
  constructor(
    private _UsersService : UsersService
  ) { }

  ngOnInit(): void {
    this._UsersService.userSub$
    .subscribe(val=>{
      this.usernamevalue = val
    })
  }

}
