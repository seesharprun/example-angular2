import {Component} from '@angular/core';
import {DataService, DataItem} from './services/data.service';

@Component({
  selector: 'app',
  templateUrl: 'app/views/app.component.html',
  providers: [
    DataService
  ]
})
export class AppComponent {
  title: string = "Demo Application";
  message: string = "This application demonstrates the rendering of a title and a basic message."
  data: DataItem[] = [];
  count: number = 4;

  constructor(private _service : DataService) {
    this.refreshList();
  }

  public refreshList() {
    this.data = this._service.GetData(this.count);
  }
}