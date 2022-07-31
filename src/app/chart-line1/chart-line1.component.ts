import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-chart-line1',
  templateUrl: './chart-line1.component.html',
  styleUrls: ['./chart-line1.component.scss']
})
export class ChartLine1Component implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions:any;

  constructor() {
    this.chartOptions = {
      series: [{
        type: 'line',
        data: [6,7,9,8,9,65,78,43,21]
      }],
        chart: {
        height: 250,
    
      },
      plotOptions: {
       
      },
      dataLabels: {
        enabled: true,
        formatter: function (val:any) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      stroke: {
        curve: 'smooth',
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          formatter: function (val:any) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        position: 'top',
        floating: true,
        // offsetX: 100,
        align: 'center',
        style: {
          color: '#444'
        }
      },
      markers: {
        size: 6,
    }
      };
    }

  ngOnInit(): void {
  }

}
