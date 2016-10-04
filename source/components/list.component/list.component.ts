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

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.listService.getPromiseData()
      .then(usersArray => this.persons = usersArray);
  }
}

