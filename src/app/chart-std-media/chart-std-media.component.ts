import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-chart-std-media',
  templateUrl: './chart-std-media.component.html',
  styleUrls: ['./chart-std-media.component.scss']
})
export class ChartStdMediaComponent implements OnInit {


  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions:any;

  constructor() {
    this.chartOptions = {
      series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33,44,5],
      }],
        chart: {
        height: 400,
        type: 'radar',
      },
      dataLabels: {
        enabled: true
      },
      plotOptions: {
        radar: {
          size: 150,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      title: {
        text: 'Radar with Polygon Fill'
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return val
          }
        }
      },
      xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Saturday','Saturday']
      },
      yaxis: {
        tickAmount: 9,
        labels: {
          formatter: function(val:any, i:any) {
            if (i % 2 === 0) {
              return val
            } else {
              return ''
            }
          }
        }
      }
      };
 }

  ngOnInit(): void {
  }

}
