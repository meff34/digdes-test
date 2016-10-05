import {Component, Output, EventEmitter} from "@angular/core";
import {ListFilter} from "../../shared/listFilter.model";

@Component({
  selector: 'list-filter',
  templateUrl: 'app/components/listFilter.component/listFilter.component.html',
  styleUrls: ['app/components/listFilter.component/listFilter.component.css'],
})

export class ListFilterComponent {
  @Output() filterChangeEmitter:EventEmitter<ListFilter> = new EventEmitter<ListFilter>();

  state: ListFilter;

  constructor() {
    this.state = {
      name: '',
      email: '',
      login: '',
      createDate: ''
    }
  }

  private emitChanges() {
    this.filterChangeEmitter.emit(this.state);
  }
}

