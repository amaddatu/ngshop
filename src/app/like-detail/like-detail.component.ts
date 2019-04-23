import { Component, OnInit, Input } from '@angular/core';
import { Like } from '../like';
import { LikeService } from '../like.service';

@Component({
  selector: 'app-like-detail',
  templateUrl: './like-detail.component.html',
  styleUrls: ['./like-detail.component.css']
})
export class LikeDetailComponent implements OnInit {
  @Input()
  like: Like;

  constructor(private likeService: LikeService) { }

  ngOnInit() {
  }

  incrementLike(){
    this.like.increment();
    this.likeService.save(this.like);
  }
}
