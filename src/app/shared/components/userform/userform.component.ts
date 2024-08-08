import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  @ViewChild('username') username !: ElementRef<any>
  constructor(
    private _UsersService : UsersService
  ) { }

  ngOnInit(): void {
    
  }

  getUsername(){
    let val = this.username.nativeElement.value as string;
    console.log(val) ;
    this.username.nativeElement.value ='';
    this._UsersService.userSub$.next(val)
  }

}
