import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Paginator} from "../../models/pagination.model";

@Component({
  selector: 'list-pagination',
  templateUrl: 'app/components/listPagination.component/listPagination.component.html',
  styleUrls: ['app/components/listPagination.component/listPagination.component.css'],
})

export class ListPaginationComponent {
  @Input() pagination: Paginator;
  @Output() paginationEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  private onClick(page: number) {
    this.paginationEmitter.emit(page);
  }
}

