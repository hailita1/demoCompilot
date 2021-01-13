import {Component, OnInit} from '@angular/core';
import {NgxCopilotService} from 'ngx-copilot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public menu = [
    {
      name: 'Home',
      copilotOrder: 1,
      icon: 'fa-home'
    },
    {
      name: 'Menu 1',
      copilotOrder: 2,
      icon: 'fa-user-friends'
    },
    {
      name: 'Menu 2',
      copilotOrder: 3,
      icon: ' fa-list'
    }
  ];

  constructor(private copilot: NgxCopilotService) {

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.copilot.checkInit();
  }

  skip = (o: any = null) => this.copilot.next(o);

  initPosition = (o: any) => this.copilot.checkInit(o);

  done = () => this.copilot.removeWrapper();

  init = () => this.copilot.checkInit();

}
