import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';
import { TwitterComponent } from './twitter/twitter.component';
import { OrgDetailComponent } from './org-detail/org-detail.component';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainComponent,
    ResultsComponent,
    TwitterComponent,
    OrgDetailComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
