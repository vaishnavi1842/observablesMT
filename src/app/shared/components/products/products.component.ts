import { Component, OnInit } from '@angular/core';
import { OffService } from '../../services/off.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _OffService : OffService
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
  
  }

}
