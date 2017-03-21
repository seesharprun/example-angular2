import {Component, Input} from '@angular/core';
import {DataItem} from './services/data.service';

@Component({
  selector: 'list',
  templateUrl: 'app/views/list.component.html'
})
export class ListComponent {
    @Input()
    items: DataItem[];
}