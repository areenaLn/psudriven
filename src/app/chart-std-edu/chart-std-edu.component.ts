import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { AnsStd, DashboardStdService } from '../dashboard-std/dashboard-std.service';

@Component({
  selector: 'app-chart-std-edu',
  templateUrl: './chart-std-edu.component.html',
  styleUrls: ['./chart-std-edu.component.scss']
})
export class ChartStdEduComponent implements OnInit {

  ansStd:AnsStd[]=[];
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions:any;  dataSeries: any[] = [];

  constructor(private dashboardStdService:DashboardStdService) {
   
  }
  ngOnInit(): void {
    this.dashboardStdService.stdAnsChange.subscribe((response: any) => {
      if (response && response.loadStd) {
        this.ansStd=this.dashboardStdService.getAsnStd2();
       // this.getTabCar();
       this.getChart(this.ansStd);
      }
    });
  }
  getChart(std:AnsStd[]){
    this.dataSeries = [];
    let per = std.length;
    this.dataSeries.push((std.filter(
      user => user.stdLevel_id === '1').length)/ per * 100,(std.filter(
        user => user.stdLevel_id === '2').length)/ per * 100,(std.filter(
          user => user.stdLevel_id === '3').length)/ per * 100,(std.filter(
            user => user.stdLevel_id === '4').length)/ per * 100,(std.filter(
              user => user.stdLevel_id === '5').length)/ per * 100,(std.filter(
                user => user.stdLevel_id === '6').length)/ per * 100,(std.filter(
                  user => user.stdLevel_id === '7').length)/ per * 100,(std.filter(
                    user => user.stdLevel_id === '8').length)/ per * 100,(std.filter(
                      user => user.stdLevel_id === '9').length)/ per * 100)

              this.chartOptions = {
                plotOptions: {
                  pie: {
                    size: 250
                  }
              },
              series: this.dataSeries,
              labels: [
                'ชั้นปีที่ 1', 'ชั้นปีที่ 2',
                'ชั้นปีที่ 3', 'ชั้นปีที่ 4',
                'ชั้นปีที่ 5','ชั้นปีที่ 6','มกกว่าชั้นปีที่ 6','บัณฑิตศึกษา','ดุษฎีบัณฑิต'
             
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
                text: 'สัดส่วนของระดับการศึกษา',
                position:'center'
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
}
