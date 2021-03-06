import { Injectable } from '@angular/core';
import { mockData } from '../mock-data/mock-list'

@Injectable()
export class ListService {

  public getPromiseData():any {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockData), 150);
    });
  }
}