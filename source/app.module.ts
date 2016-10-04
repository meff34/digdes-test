import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component/app.component';
import {ListComponent} from "./components/list.component/list.component";
import {ListBodyComponent} from "./components/listBody.component/listBody.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ListComponent, ListBodyComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
