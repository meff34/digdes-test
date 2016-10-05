import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component/app.component';
import {ListComponent} from "./components/list.component/list.component";
import {ListBodyComponent} from "./components/listBody.component/listBody.component";
import {ListFilterComponent} from "./components/listFilter.component/listFilter.component";
import {FormsModule} from "@angular/forms";
import {ListPaginationComponent} from "./components/listPagination.component/listPagination.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ListComponent,
    ListBodyComponent,
    ListFilterComponent,
    ListPaginationComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
