import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'list-filter',
  templateUrl: 'app/components/listFilter.component/listFilter.component.html',
  styleUrls: ['app/components/listFilter.component/listFilter.component.css'],
})

export class ListFilterComponent {

  @Output() queryString:EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  private onInputChange(str: string) {
    this.queryString.emit(str);
  }
}

