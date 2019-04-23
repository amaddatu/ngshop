import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../dog';
import { Like } from '../like';

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

  constructor() { }

  ngOnInit() {
  }

}
