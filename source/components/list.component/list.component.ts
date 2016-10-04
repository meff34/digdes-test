import {Component, OnInit} from '@angular/core';
import { ListService } from "../../shared/list.service";
import { Person } from "../../shared/person.model";
import {EmittingObject} from "../../shared/emittingObject.model";

@Component({
  selector: 'list',
  templateUrl: 'app/components/list.component/list.component.html',
  providers: [ ListService ]
})

export class ListComponent implements OnInit {
  public persons: Person[];
  public personsData: Person[];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getData();
    this.persons = this.personsData;
  }

  private onQueryString(emittedObject: EmittingObject) {
    if (emittedObject.value != '') {
      this.persons = this.personsData
        .filter(person => this.checkContainsInString(emittedObject.value, person[emittedObject.id]));
    } else {
      this.persons = this.personsData;
    }
  }

  private getData() {
    this.listService.getPromiseData()
      .then(usersArray => this.personsData = this.persons = usersArray);
  }

  private checkContainsInString(queryString: string, checkingString: string) {
    return checkingString
      .toLowerCase()
      .includes(queryString.toLowerCase()) ? true : false;
  }
}

