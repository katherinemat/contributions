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
import { UserComponent } from './user/user.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { AddStockComponent } from './add-stock/add-stock.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MainComponent,
    ResultsComponent,
    TwitterComponent,
    OrgDetailComponent,
    StockComponent,
    UserComponent,
    PiechartComponent,
    AddStockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
