import {Component, Input} from "@angular/core";
import {Person} from "../../shared/person.model";

@Component({
  selector: 'list-body',
  templateUrl: 'app/components/listBody.component/listBody.component.html',
  styleUrls: ['app/components/listBody.component/listBody.component.css'],
})

export class ListBodyComponent {
  @Input() persons: Person[];

  constructor() {}
}

