import { Component, OnDestroy, OnInit } from '@angular/core';
import { OffService } from '../../services/off.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  intervalsubscription ! : Subscription
  constructor(
     private _OffService : OffService
  ) { }

  ngOnInit(): void {
    this.intervalsubscription = this._OffService.interval$
     .subscribe(res=>{
       console.log(res);
        })
    
      
  }

  ngOnDestroy(): void {
    this.intervalsubscription.unsubscribe()
  }

}
