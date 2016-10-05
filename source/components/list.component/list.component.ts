import { Component } from '@angular/core';
import { ListService } from "../../shared/list.service";
import { Person } from "../../shared/person.model";
import { ListFilter } from "../../shared/listFilter.model";

@Component({
  selector: 'list',
  templateUrl: 'app/components/list.component/list.component.html',
  providers: [ ListService ]
})

export class ListComponent {
  public displayingPersons: Person[];
  public personsCount: number;
  public personsData: Person[];

  constructor(private listService: ListService) {
    this.getData();
  }

  private initList(data):void {
    this.personsData = this.displayingPersons = data;
  }

  private getData():void {
    this.listService.getPromiseData()
      .then((data) => this.initList(data));
  }

  private checkContainsInPerson(person: Person, filter: ListFilter):boolean {
    let isContain: boolean = true;
    for (let prop in filter) {
      if (!this.checkContainsInString(person[prop], filter[prop])) isContain = false;
    }
    return isContain;
  }

  private checkContainsInString(personString: string, filterString: string):boolean {
    return personString.toLowerCase()
      .includes(filterString.toLowerCase())
  }

  private onFilterChange(filter: ListFilter):void {
    this.displayingPersons = this.personsData
      .filter(person => this.checkContainsInPerson(person, filter));
  }
}
