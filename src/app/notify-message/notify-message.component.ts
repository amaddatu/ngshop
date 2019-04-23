import { Component, OnInit, Input } from '@angular/core';
import { NotifyMessage } from '../notify-message';
import { NotifyMessageService } from '../notify-message.service';

@Component({
  selector: 'app-notify-message',
  templateUrl: './notify-message.component.html',
  styleUrls: ['./notify-message.component.css']
})
export class NotifyMessageComponent implements OnInit {
  notifyMessage: NotifyMessage;

  constructor(private notifyMessageService: NotifyMessageService) { }

  ngOnInit() {
    this.getNotifyUpdates();
  }

  getNotifyUpdates() {
    return this.notifyMessageService.all().subscribe(data => this.notifyMessage = data);
  }

  // getExtraClass(){
  //   //???
  // }
}
