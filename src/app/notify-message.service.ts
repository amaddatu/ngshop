import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {NotifyMessage} from './notify-message';

@Injectable({
  providedIn: 'root'
})
export class NotifyMessageService {
  private notifyMessage: NotifyMessage = new NotifyMessage();
  constructor() { }

  all(): Observable<NotifyMessage> {
    return of(this.notifyMessage);
  }

  public notify(message: string, image: string){
    this.notifyMessage.message = message;
    this.notifyMessage.image = image;
    this.notifyMessage.active = true;
  }

  public inactive(){
    this.notifyMessage.active = false;
  }

}
