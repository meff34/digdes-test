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
const core_1 = require("@angular/core");
let ListFilterComponent = class ListFilterComponent {
    constructor() {
        this.filterChangeEmitter = new core_1.EventEmitter();
        this.state = {
            name: '',
            email: '',
            login: '',
            createDate: ''
        };
    }
    emitChanges() {
        this.filterChangeEmitter.emit(this.state);
    }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], ListFilterComponent.prototype, "filterChangeEmitter", void 0);
ListFilterComponent = __decorate([
    core_1.Component({
        selector: 'list-filter',
        templateUrl: 'app/components/listFilter.component/listFilter.component.html',
        styleUrls: ['app/components/listFilter.component/listFilter.component.css'],
    }), 
    __metadata('design:paramtypes', [])
], ListFilterComponent);
exports.ListFilterComponent = ListFilterComponent;

//# sourceMappingURL=../../maps/components/listFilter.component/listFilter.component.js.map
