import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-chart-ojb',
  templateUrl: './chart-ojb.component.html',
  styleUrls: ['./chart-ojb.component.scss']
})
export class ChartOjbComponent implements OnInit {

 
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions:any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'เป็นนวัตกร เพื่อคิดค้นนวัตกรรม',
              y: 12,
           
            },
            {
              x: 'สามารถเรียนรู้และค้นคว้าความรู้ด้วยตนเองได้',
              y: 44,
            
            },
            {
              x: 'ประกอบอาชีพตามวิชาชีพที่เรียนมา',
              y: 54,
             
            },
            {
              x: 'มีความเชี่ยวชาญในวิชาชีพ',
              y: 66,
              
            },
            {
              x: ' เป็นคนมีคุณธรรมและจริยธรรมในวิชาชีพ',
              y: 81,
             
            },
            {
              x: 'เป็นคนดีและทำงานร่วมกับผู้อื่นได้',
              y: 67,
             
            },
            {
              x: 'มีอาชีพใดก็ได้และหาเลี้ยงตนเองได้',
              y: 67,
             
            }, {
              x: 'ไม่แน่ใจ ยังหาตนเองไม่เจอ',
              y: 67,
             
            }, {
              x: 'อื่นๆ',
              y: 67,
             
            }
          ]
        }
      ],
        chart: {
       height: 430,
        type: 'bar',
      
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      colors: ['#00E396'],
      dataLabels: {
        formatter: function(val:any, opt:any) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
              .goals
      
          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`
          }
          return val
        }
      },
      legend: {
    
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['จำนวนป้าหมายของการเรียน'],
        markers: {
          fillColors: ['#00E396']
        }
      }
      };
    }

  ngOnInit(): void {
  }

}
