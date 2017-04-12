import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../stock.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  @Input() stockTable: Stock[];

  doughnutChartLabels = [];
  doughnutChartData = [];

  constructor() { }


  ngOnInit() {

    setTimeout(() => {
      for (let stock of this.stockTable) {
        this.doughnutChartLabels.push(stock.name);
        this.doughnutChartData.push(stock.shares);
      }
    }, 2000);

  }

  // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
  //
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

}
