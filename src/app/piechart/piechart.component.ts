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

  lineChartColors:Array<any> = [
      { // grey
        backgroundColor: ['#c96c1c', '#e2ad39', '#097275', '#f4e9cd', '#03444a'],
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'red',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      },
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
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
