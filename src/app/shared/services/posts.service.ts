import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ipost } from 'src/app/models/posts';
import { environment } from 'src/environments/environment';
  
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl : string = `${environment.baseUrl}/posts`
  constructor(
    private _http : HttpClient
  )
   { }

   fetchAllPosts() : Observable<Ipost[]>{
    return this._http.get<Ipost[]>(this.postUrl)
   }
}
