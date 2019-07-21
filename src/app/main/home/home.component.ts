import { Component, OnInit } from '@angular/core';
import {Chart, ChartDataSets} from 'chart.js';
import { MessageService } from 'src/app/message.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public one: any;
   public lists: any = [];
  public lists1: any = [];
  public lists2: any = [{name: 'THREATS', id: '+4.124'},
                      {name: 'NEUTRAL', id: '+2.147'} ] ;
public list3: any = [{name: 'STANDARD SCANS', id: '745'}];
constructor(private _msgservice: MessageService) {
 }
  Standardscan: number;
  Teamscan: number;
  Totalrequests: number;
  Threats: number;
  Neutral: number;


  LineChart: any ;
  LineChart1: any;
  BarChart: any;
  BarChart1: any;
// drag drop:

ngOnInit() {

this._msgservice.getid()
.subscribe(res => this.lists = res);

this._msgservice.getscans()
.subscribe(res => this.lists1 = res);



  this.Standardscan = 5.657;
this.Teamscan = 3.1459;
this.Totalrequests = 745;
this.Threats = 4.124;
this.Neutral = 2.147;

// Line chart:
this._msgservice.line()
        .subscribe(res => {
      const visitor: any = res['list'].map(res => res.user.data1);
      const views: any = res['list'].map(res => res.user.data2);
      const basevalue: any = res['list'].map(res => res.lable);

 this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: basevalue,
 datasets: [{
     label: 'Page Visitors',
     data: visitor,
     fill: false,
     lineTension: 0.2,
     borderColor: 'rgb(92,69,134)',
     borderWidth: 2,
    pointBackgroundColor: 'rgb(92,69,134)'
 },
 {
  label: 'Page Views',
  data: views,
  fill: false,
  lineTension: 0.2,
  borderColor: 'rgb(232,133,132)',
  borderWidth: 2,
  pointBackgroundColor: 'rgb(232,133,132)'

}
]
},
options: {
 scales: {
     yAxes: [{
         ticks: {
          min: 0, max: 60

         }
     }]
 }
}
});
        });


// Line chart1:
this._msgservice.line1()
        .subscribe(res => {

          const team1: any = res['list'].map(res => res.user.data1);
          const team2: any = res['list'].map(res => res.user.data2);
          const basevalue: any = res['list'].map(res => res.lable);


this.LineChart1 = new Chart('lineChart1', {
  type: 'line',
data: {
 labels: basevalue,
 datasets: [{
     label: 'Team Drills',
     data: team1,
    fill: false,
     lineTension: 0.2,
     borderColor: 'rgb(232,133,132)',
     borderWidth: 2,
     pointBackgroundColor: 'rgb(232,133,132)',
     pointRadius: 1.5
 },
 {
  label: 'Team Drills',
  data: team2,
  fill: false,
  lineTension: 0.2,
  borderColor: 'rgb(180,116,128)',
  borderWidth: 0.5,
  pointBackgroundColor: 'rgb(180,116,128)',
  pointRadius: 1.5

}
]
},
options: {
 scales: {
     xAxes: [{
         display: false
     }],
     yAxes: [{
      ticks: {
       min: 0, max: 60

      },
      display: false
  }]
 }
}
});
        });



// Bar chart:
this._msgservice.barchart()
        .subscribe(res => {

          const data1: any = res['list'].map(res => res.user.data1);
          const data2: any = res['list'].map(res => res.user.data2);
          const basevalue: any = res['list'].map(res => res.lable);



this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
  labels: basevalue,

 datasets: [
  {
    label: 'Dataset 1',
    data: data1,

    lineTension: 0.2,
    backgroundColor: 'rgb(92,69,134)',

    },
{
 label: 'Dataset 2',
 data: data2,

 lineTension: 0.2,
 backgroundColor: 'rgb(64, 69, 65)',
 borderWidth: 1
}

]
},
options: {
  scales: {
     xAxes: [{
         display: false  }],
         yAxes: [{
          display: false }],

 }
}
});
        });


// Bar chart1
this._msgservice.barchart1()
        .subscribe(res => {

          const data1: any = res['list'].map(res => res.user.data1);
          const data2: any = res['list'].map(res => res.user.data2);
          const basevalue: any = res['list'].map(res => res.lable);


this.BarChart1 = new Chart('barChart1', {
  type: 'bar',
data: {
  labels: basevalue,

 datasets: [
  {
    label: 'Dataset 1',
    data: data1,
    fill: false,
    lineTension: 0.2,
    backgroundColor: 'rgb(64, 69, 65)'
    },
{
 label: 'Dataset 2',
 data: data2,
 fill: false,
 lineTension: 0.2,
 backgroundColor: 'rgb(180,116,128)',
 borderWidth: 1
}

]
},
options: {
 scales: {
     xAxes: [{
         display: false }],
         yAxes: [{
          display: false }],

 }
}
});
        });

  }

    }
