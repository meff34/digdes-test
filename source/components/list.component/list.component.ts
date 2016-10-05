import { Component, OnInit } from '@angular/core';
import { ListService } from "../../services/list.service";
import { Person } from "../../models/person.model";
import { PaginationService } from "../../services/pagination.service";
import {FilterService} from "../../services/filter.service";
import {Paginator} from "../../models/pagination.model";

@Component({
  selector: 'list',
  templateUrl: 'app/components/list.component/list.component.html',
  styleUrls: ['app/components/list.component/list.component.css'],
  providers: [ ListService, FilterService, PaginationService ]
})

export class ListComponent implements OnInit {
  private personsData: Person[];
  private filteredPersons: Person[];
  private displayingPersons: Person[];
  private pagination: Paginator = {};

  constructor(
    private listService: ListService,
    private filterService: FilterService,
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.getPersonsData();
  }

  private getPersonsData():void {
    this.listService.getPromiseData()
      .then((data) => this.initList(data));
  }

  private initList(data):void {
    this.filteredPersons = this.personsData = data;
    this.setPage(1);
  }

  private setPage(page: number):void {
    if (this.pagination.totalPages && (page < 1 || page > this.pagination.totalPages)) {
      return;
    }
    // get pagination object from service
    this.pagination = this.paginationService.getPagination(this.filteredPersons.length, page, 5);
    // check that filteredPersons isn't empty
    if (this.pagination === {}) {
      this.displayingPersons = [];
      return;
    }
    // get current page of items
    this.displayingPersons = this.filteredPersons.slice(this.pagination.startIndex, this.pagination.endIndex + 1);
  }

  private onFilterChange(filter: Person):void {
    this.filteredPersons = this.filterService.getFilteredPersons(filter, this.personsData);
    // restart pagination
    this.setPage(1);
  }

  private onPaginationClick(page: number):void {
    this.setPage(page);
  }


}
