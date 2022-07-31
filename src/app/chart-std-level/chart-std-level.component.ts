import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-chart-std-level',
  templateUrl: './chart-std-level.component.html',
  styleUrls: ['./chart-std-level.component.scss']
})
export class ChartStdLevelComponent implements OnInit {

 
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions:any;

  constructor() {
    this.chartOptions = {
        plotOptions: {
          pie: {
            size: 200
          }
      },
      series: [35.7,35.7,14.3,7.1,7.1],
      labels: [
        'หาดใหญ่', 'ปัตตานี',
        'ภูเก็ต', 'สุราษฎร์ธานี',
        'ตรัง'
     
      ],
      colors: ['#244C98', '#0FFF9E', '#FFA000', '#109CF1', '#9092FA'],
      chart: {
        type: 'pie',
        fontFamily: 'Kanit, Arial, sans-serif',
      },
      dataLabels: {
        enabled: false,
        textAnchor: 'middle',
       
      },
      tooltip: {
        enabled: true,
        custom: function (series: any) {
          let seriesIndex = series.seriesIndex;
          let label = series.w.globals.labels[seriesIndex];
          let color = series.w.globals.colors[seriesIndex];
          let get_series = series.series[seriesIndex];
          return (
            '<div style="padding:5px;background:' +
            color +
            '">' +
            label +
            ': ' +
            (Math.round(get_series * 100) / 100).toFixed(1) +
            '%</div>'
          );
        },
      },
      title: {
        text: 'สัดส่วนประชากรนักศึกษาแบ่งตามวิทยาเขตต่าง ๆ'
      },
      legend: {
        position: 'right',
        horizontalAlign: 'center',
        fontSize: '12px',
        fontWeight: '400',
        onItemHover: {
          highlightDataSeries: false,
        },
        formatter: function (val: any, series: any) {
          let seriesIndex = series.seriesIndex;
          let seriesPercent = series.w.globals.seriesPercent[seriesIndex];
          return val + '&nbsp;&nbsp; ' + (Math.round(seriesPercent * 100) / 100).toFixed(1) + '%';


        },
      },
      responsive: [
        {
        
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
              
            },
            legend: {
              position: 'bottom',
              fontSize: '14px',
            },
          },
        },
      ],
    };
  }
  ngOnInit(): void {
  }

}
// this.chartOptions = {
//   plotOptions: {
//     pie: {
//       size: 200
//     }
// },
// series: [10,15,10,30,20,15],
// labels: [
//   'Brake:extreme', 'Brake:medium',
//   'Speed:mild', 'Speed:medium',
//   'Speed:extreme', 'การขับรถอันตราย',

// ],
// colors: ['#244C98', '#0FFF9E', '#FFA000', '#109CF1', '#9092FA', '#BDA5FF'],
// chart: {
//   type: 'pie',
//   fontFamily: 'Kanit, Arial, sans-serif',
// },
// dataLabels: {
//   enabled: false,
//   textAnchor: 'middle',
 
// },
// tooltip: {
//   enabled: true,
//   custom: function (series: any) {
//     let seriesIndex = series.seriesIndex;
//     let label = series.w.globals.labels[seriesIndex];
//     let color = series.w.globals.colors[seriesIndex];
//     let get_series = series.series[seriesIndex];
//     return (
//       '<div style="padding:5px;background:' +
//       color +
//       '">' +
//       label +
//       ': ' +
//       (Math.round(get_series * 100) / 100).toFixed(1) +
//       '%</div>'
//     );
//   },
// },
// title: {
//   text: 'สัดส่วนของนักศึกษาแบ่งตามวิทยาเขต'
// },
// legend: {
//   position: 'right',
//   horizontalAlign: 'center',
//   fontSize: '12px',
//   fontWeight: '400',
//   onItemHover: {
//     highlightDataSeries: false,
//   },
//   formatter: function (val: any, series: any) {
//     let seriesIndex = series.seriesIndex;
//     let seriesPercent = series.w.globals.seriesPercent[seriesIndex];
//     return val + '&nbsp;&nbsp; ' + (Math.round(seriesPercent * 100) / 100).toFixed(1) + '%';


//   },
// },
// responsive: [
//   {
  
//     breakpoint: 1000,
//     options: {
//       plotOptions: {
//         bar: {
//           horizontal: true,
//         },
        
//       },
//       legend: {
//         position: 'bottom',
//         fontSize: '14px',
//       },
//     },
//   },
// ],
// };