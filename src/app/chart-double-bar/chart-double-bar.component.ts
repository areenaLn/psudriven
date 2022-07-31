import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { AnsStd, DashboardStdService } from '../dashboard-std/dashboard-std.service';

@Component({
  selector: 'app-chart-double-bar',
  templateUrl: './chart-double-bar.component.html',
  styleUrls: ['./chart-double-bar.component.scss']
})
export class ChartDoubleBarComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any; dataSeries: any[] = []; dataSeries1: any[] = [];
  ansStd: AnsStd[] = []; man = 0; female = 0; man1 = 0; female1 = 0; man2 = 0; female2 = 0;
  man3 = 0; female3 = 0; man4 = 0; female4 = 0; man5 = 0; female5 = 0; man6 = 0; female6 = 0;
  man7 = 0; female7 = 0; man8 = 0; female8 = 0;
  constructor(private dashboardStdService: DashboardStdService) {
    // this.chartOptions = {
    //   chart: {
    //     height: 350,
    //     type: "line",
    //     stacked: false
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   colors: ['#99C2A2', '#C5EDAC'],
    //   series: [

    //     {
    //       name: 'ชาย',
    //       type: 'column',
    //       data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5, 35]
    //     },
    //     {
    //       name: "หญิง",
    //       type: 'column',
    //       data: [10, 19, 27, 26, 34, 35, 40, 38, 8]
    //     },

    //   ],
    //   stroke: {
    //     width: [4, 4]
    //   },
    //   plotOptions: {
    //     bar: {
    //       columnWidth: "20%"
    //     }
    //   },
    //   xaxis: {
    //     categories: ['ชั้นปีที่ 1', 'ชั้นปีที่ 2',
    //       'ชั้นปีที่ 3', 'ชั้นปีที่ 4',
    //       'ชั้นปีที่ 5', 'ชั้นปีที่ 6', 'มกกว่าชั้นปีที่ 6', 'บัณฑิตศึกษา', 'ดุษฎีบัณฑิต']

    //   },
    //   yaxis: [
    //     {
    //       seriesName: 'ชาย',
    //       axisTicks: {
    //         show: true
    //       },
    //       axisBorder: {
    //         show: true,
    //       },
    //       title: {
    //         text: "Columns"
    //       }
    //     },
    //     {
    //       seriesName: 'ชาย',
    //       show: false
    //     },
    //   ],
    //   tooltip: {
    //     shared: false,
    //     intersect: true,
    //     x: {
    //       show: false
    //     }
    //   },
    //   legend: {
    //     horizontalAlign: "left",
    //     offsetX: 40
    //   },
    //   title: {
    //     text: 'สัดส่วนของเพศและระดับการศึกษา',
    //     position: 'top',
    //     floating: true,
    //     // offsetX: 100,
    //     align: 'center',
    //     style: {
    //       color: '#444'
    //     }
    //   },
    // };
  }

  ngOnInit(): void {
    this.dashboardStdService.stdAnsChange.subscribe((response: any) => {
      if (response && response.loadStd) {
        this.ansStd = this.dashboardStdService.getAsnStd2();
        // this.getTabCar();
        this.getChart(this.ansStd);
      }
    });
  }
  getChart(std: AnsStd[]) {
    var level1 = std.filter(
      user => user.stdLevel_id === '1')
    var level2 = std.filter(
      user => user.stdLevel_id === '2')
    var level3 = std.filter(
      user => user.stdLevel_id === '3')
    var level4 = std.filter(
      user => user.stdLevel_id === '4')
    var level5 = std.filter(
      user => user.stdLevel_id === '5')
    var level6 = std.filter(
      user => user.stdLevel_id === '6')
    var level7 = std.filter(
      user => user.stdLevel_id === '7')
    var level8 = std.filter(
      user => user.stdLevel_id === '8')
    var level9 = std.filter(
        user => user.stdLevel_id === '9')
    if (level1) {
      for (let index = 0; index < level1.length; index++) {
        if (level1[index].sex == 'ชาย') {
          this.man = this.man + 1;


        } else if (level1[index].sex == 'หญิง') {
          this.female = this.female + 1;

        }

      }
      this.dataSeries.push(this.man);
      this.dataSeries1.push(this.female);
    }
    if (level2) {
      for (let index = 0; index < level2.length; index++) {
        if (level2[index].sex == 'ชาย') {
          this.man1 = this.man1 + 1;


        } else if (level2[index].sex == 'หญิง') {
          this.female1 = this.female1 + 1;

        }

      }
      this.dataSeries.push(this.man1);
      this.dataSeries1.push(this.female1);
    }

    if (level3) {
      for (let index = 0; index < level3.length; index++) {
        if (level3[index].sex == 'ชาย') {
          this.man2 = this.man2 + 1;


        } else if (level3[index].sex == 'หญิง') {
          this.female2 = this.female2 + 1;

        }

      }
      this.dataSeries.push(this.man2);
      this.dataSeries1.push(this.female2);
    }
    if (level4) {
      for (let index = 0; index < level4.length; index++) {
        if (level4[index].sex == 'ชาย') {
          this.man3 = this.man3 + 1;


        } else if (level4[index].sex == 'หญิง') {
          this.female3 = this.female3 + 1;

        }

      }
      this.dataSeries.push(this.man3);
      this.dataSeries1.push(this.female3);
    }
    if (level5) {
      for (let index = 0; index < level5.length; index++) {
        if (level5[index].sex == 'ชาย') {
          this.man4 = this.man4 + 1;


        } else if (level5[index].sex == 'หญิง') {
          this.female4 = this.female4 + 1;

        }

      }
      this.dataSeries.push(this.man4);
      this.dataSeries1.push(this.female4);
    }
    if (level6) {
      for (let index = 0; index < level6.length; index++) {
        if (level6[index].sex == 'ชาย') {
          this.man5 = this.man5 + 1;


        } else if (level6[index].sex == 'หญิง') {
          this.female5 = this.female5 + 1;

        }

      }
      this.dataSeries.push(this.man5);
      this.dataSeries1.push(this.female5);
    }
    if (level7) {
      for (let index = 0; index < level7.length; index++) {
        if (level7[index].sex == 'ชาย') {
          this.man6 = this.man6 + 1;


        } else if (level7[index].sex == 'หญิง') {
          this.female6 = this.female6 + 1;

        }

      }
      this.dataSeries.push(this.man6);
      this.dataSeries1.push(this.female6);
    }
    if (level8) {
      for (let index = 0; index < level8.length; index++) {
        if (level8[index].sex == 'ชาย') {
          this.man7 = this.man7 + 1;


        } else if (level8[index].sex == 'หญิง') {
          this.female7 = this.female7 + 1;

        }

      }
      this.dataSeries.push(this.man7);
      this.dataSeries1.push(this.female7);
    }
    if (level9) {
      for (let index = 0; index < level9.length; index++) {
        if (level9[index].sex == 'ชาย') {
          this.man8 = this.man8 + 1;


        } else if (level9[index].sex == 'หญิง') {
          this.female8 = this.female8 + 1;

        }

      }
      this.dataSeries.push(this.man8);
      this.dataSeries1.push(this.female8);
    }
    this.chartOptions = {
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#99C2A2', '#C5EDAC'],
      series: [

        {
          name: 'ชาย',
          type: 'column',
          data: this.dataSeries
        },
        {
          name: "หญิง",
          type: 'column',
          data: this.dataSeries1
        },

      ],
      stroke: {
        width: [4, 4]
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      xaxis: {
        categories: ['ชั้นปีที่ 1', 'ชั้นปีที่ 2',
          'ชั้นปีที่ 3', 'ชั้นปีที่ 4',
          'ชั้นปีที่ 5', 'ชั้นปีที่ 6', 'มกกว่าชั้นปีที่ 6', 'บัณฑิตศึกษา', 'ดุษฎีบัณฑิต']

      },
      yaxis: [
        {
          seriesName: 'ชาย',
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
          },
          title: {
            text: "Columns"
          }
        },
        {
          seriesName: 'ชาย',
          show: false
        },
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      },
      title: {
        text: 'สัดส่วนของเพศและระดับการศึกษา',
        position: 'top',
        floating: true,
        // offsetX: 100,
        align: 'center',
        style: {
          color: '#444'
        }
      },
    };
  
  }

  
}
