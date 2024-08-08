import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { of } from 'rxjs/internal/observable/of';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class OffService {
 OurInterval$ = new Observable((observer)=>{
    let count = 0;
    setInterval(()=>{
      observer.next(count)
      count ++;
      if(count == 5){
        observer.complete()
      }
      if(count > 12){
        observer.error('devils number')
      }
    },1000)
 })


 interval$ = interval(1000)
 
 skills$ = of("html", "css", "js", "ts")
 .pipe(
  tap(skills=>{
    console.log(`before Map ${skills}`);
    
  }),
  map(skills=>{
    return `I Love ${skills}`
  }),

  tap(skills=>{
    console.log(`After Map ${skills}`);
    
  })
 )

 of$ = of(1,2,3,4,5,6,7,8,9)
 .pipe(
  filter(num=>{
    return  num % 2 === 0
  })
 )
 

  
  constructor() { }
}
