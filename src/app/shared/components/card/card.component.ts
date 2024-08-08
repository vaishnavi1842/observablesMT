import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/posts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() postdata ! :Ipost
  constructor() { }

  ngOnInit(): void {
  }

}
