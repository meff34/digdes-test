import {Component, OnInit} from '@angular/core';
import { ListService } from "../../shared/list.service";
import { Person } from "../../shared/person.model";

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

  private onQueryString(string: string) {
    console.log(string);
    if (string != '') {
      this.persons = this.personsData.filter(person => {
        return person.login
          .toLowerCase()
          .includes(string.toLowerCase()) ? true : false;
      });
    } else {
      this.persons = this.personsData;
    }
  }

  private getData() {
    this.listService.getPromiseData()
      .then(usersArray => this.personsData = this.persons = usersArray);
  }
}

