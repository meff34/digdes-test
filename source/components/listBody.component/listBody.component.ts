import {Component, Input} from "@angular/core";
import {Person} from "../../shared/person.model";

@Component({
  selector: 'list-body',
  templateUrl: 'app/components/listBody.component/listBody.component.html'
})

export class ListBodyComponent {
  @Input() persons: Person[];

  constructor() {}

}

