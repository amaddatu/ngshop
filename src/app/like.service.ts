import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Like} from './like';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private likeData;

  constructor() { }

  all(): Observable <Like[]> {
    return of(this.likeData);
  }
}
