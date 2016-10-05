"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const list_service_1 = require("../../shared/list.service");
let ListComponent = class ListComponent {
    constructor(listService) {
        this.listService = listService;
        this.getData();
    }
    initList(data) {
        this.personsData = this.displayingPersons = data;
    }
    getData() {
        this.listService.getPromiseData()
            .then((data) => this.initList(data));
    }
    checkContainsInPerson(person, filter) {
        let isContain = true;
        for (let prop in filter) {
            if (!this.checkContainsInString(person[prop], filter[prop]))
                isContain = false;
        }
        return isContain;
    }
    checkContainsInString(personString, filterString) {
        return personString.toLowerCase()
            .includes(filterString.toLowerCase());
    }
    onFilterChange(filter) {
        this.displayingPersons = this.personsData
            .filter(person => this.checkContainsInPerson(person, filter));
    }
};
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        templateUrl: 'app/components/list.component/list.component.html',
        providers: [list_service_1.ListService]
    }), 
    __metadata('design:paramtypes', [list_service_1.ListService])
], ListComponent);
exports.ListComponent = ListComponent;

//# sourceMappingURL=../../maps/components/list.component/list.component.js.map
