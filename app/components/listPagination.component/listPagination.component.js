"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},__decorate=function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},__metadata=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=require("@angular/core"),ListPaginationComponent=function(){function t(){_classCallCheck(this,t),this.paginationEmitter=new core_1.EventEmitter}return _createClass(t,[{key:"onClick",value:function(t){this.paginationEmitter.emit(t)}}]),t}();__decorate([core_1.Input(),__metadata("design:type",Object)],ListPaginationComponent.prototype,"pagination",void 0),__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],ListPaginationComponent.prototype,"paginationEmitter",void 0),ListPaginationComponent=__decorate([core_1.Component({selector:"list-pagination",templateUrl:"app/components/listPagination.component/listPagination.component.html",styleUrls:["app/components/listPagination.component/listPagination.component.css"]}),__metadata("design:paramtypes",[])],ListPaginationComponent),exports.ListPaginationComponent=ListPaginationComponent;