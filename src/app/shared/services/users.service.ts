import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userSub$ : Subject <string> = new Subject<string>()
  constructor() { }
}
