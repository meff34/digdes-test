import {Person} from "../models/person.model";

export class FilterService {
  public getFilteredPersons(filter: Person, personsData: Person[]):Person[] {
    return personsData.filter(person => this.checkContainsInPerson(person, filter));
  }

  private checkContainsInPerson(person: Person, filter: Person):boolean {
    /*
     * if one of filter fields
     * isn't exist in Person, return false.
     * */
    let isContain: boolean = true;
    for (let prop in filter) {
      if (!this.checkContainsInString(person[prop], filter[prop])) isContain = false;
    }
    return isContain;
  }

  private checkContainsInString(personString: string, filterString: string):boolean {
    // ie11 isn't support Array.prototype.includes :(
    return personString.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 ? true : false
  }
}