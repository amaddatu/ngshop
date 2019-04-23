import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from '../favorite';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {
  @Input()
  favorite: Favorite;
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
  }
  toggleFavorite(){
    this.favorite.toggle();
    this.favoriteService.save(this.favorite);
  }
}
