import { Component, OnInit, Input } from '@angular/core';
import { Like } from '../like';
import { LikeService } from '../like.service';
import { NotifyMessageService } from '../notify-message.service';
import { FavoriteService } from '../favorite.service';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-like-detail',
  templateUrl: './like-detail.component.html',
  styleUrls: ['./like-detail.component.css']
})
export class LikeDetailComponent implements OnInit {
  @Input()
  like: Like;

  constructor(private likeService: LikeService,
    private notifyMessageService: NotifyMessageService, 
    private favoriteService: FavoriteService, 
    private dogsService: DogsService) { }

  ngOnInit() {
  }

  incrementLike(){
    this.like.increment();
    this.likeService.save(this.like);
    if(this.favoriteService.isFavorite(this.like.dogId.valueOf())){
      let dog:Dog = this.dogsService.getDog(this.like.dogId.valueOf());
      this.notifyMessageService.notify(dog.title + " has been liked on your favorite list...", dog.image);
      setTimeout( (ns) => {
        this.notifyMessageService.inactive();
      }, 3000, this.notifyMessageService);
    }
  }
}
