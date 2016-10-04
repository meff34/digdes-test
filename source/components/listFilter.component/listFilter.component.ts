import {Component, Output, EventEmitter} from "@angular/core";
import {EmittingObject} from "../../shared/emittingObject.model";

@Component({
  selector: 'list-filter',
  templateUrl: 'app/components/listFilter.component/listFilter.component.html',
  styleUrls: ['app/components/listFilter.component/listFilter.component.css'],
})

export class ListFilterComponent {

  @Output() queryString:EventEmitter<EmittingObject> = new EventEmitter<EmittingObject>();

  constructor() {}

  private onInputChange(element: HTMLInputElement) {
    let emittingObject = {
      id: element.id,
      value: element.value
    };
    this.queryString.emit(emittingObject);
  }
}

