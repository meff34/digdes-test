/// <reference path="../../typings/globals/lodash/index.d.ts" />
import * as _ from 'lodash';

export class PaginationService {
  getPagination (totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // return empty object if nothing to display
    if (totalItems < 1) return {};
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage = 1, endPage = totalPages;

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // calculate indexes of displaying items
    let firstIndexOnPage = pageSize * currentPage - pageSize + 1;
    let lasttIndexOnPage = pageSize * currentPage > totalItems ? totalItems : pageSize * currentPage;

    // create an array of pages to ng-repeat in the pager control
    let pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      firstIndexOnPage,
      lasttIndexOnPage,
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }
}