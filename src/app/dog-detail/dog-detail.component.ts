import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';
import { Like } from '../like';
import { Favorite } from '../favorite';

@Component({
  selector: 'dog',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  @Input()
  dog: Dog;
  @Input()
  like: Like;
  @Input()
  favorite: Favorite;

  constructor() { }

  ngOnInit() {
  }

  getExtraStyle(){
    let out = "";
    out = this.favorite.fav ? out + " favorite" : out;
    return out;
  }
}
