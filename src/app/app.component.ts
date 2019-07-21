import { Component } from '@angular/core';
import { MessageService } from './message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 public title: any = 'dragadmin';
 public photo: any = 'avatar-6.jpg ';

  occupation: any = ' Developer';
  public name: any = 'Mark Stephen';
  public desgination: any = 'Developer';
  public lists: any = [];
  public count: any = '';
  public red: any = 'red';
  public lists1: any = [];
  public count1: any = '';
  public clickMessage: any = '';

// tslint:disable-next-line: no-inferrable-types
  iscollapsed: boolean = true;
  show = true;

  togglecollapse() {
    this.iscollapsed = !this.iscollapsed;
  }

  hide() {
    this.show = !this.show;
  }


  onClickMe() {
    this.clickMessage = !this.clickMessage;
  }

  onalert() {
    window.confirm('Are you sure to logout?');
  }

  constructor(private _msgservice: MessageService) { }

// tslint:disable-next-line: use-life-cycle-interface
ngOnInit() {
this._msgservice.getmessage()
.subscribe(data => {
this.count = data['length'];
this.lists = data;
});


this._msgservice.getmessage()
.subscribe(data => {
this.count1 = data['length'];
this.lists1 = data;
});
}
}


