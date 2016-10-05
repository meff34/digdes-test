import {Component, Output, EventEmitter} from "@angular/core";
import {Person} from "../../models/person.model";

@Component({
  selector: 'list-filter',
  templateUrl: 'app/components/listFilter.component/listFilter.component.html',
  styleUrls: ['app/components/listFilter.component/listFilter.component.css'],
})

export class ListFilterComponent {
  @Output() filterChangeEmitter:EventEmitter<Person> = new EventEmitter<Person>();

  state: Person;

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

