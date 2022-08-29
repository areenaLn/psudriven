import { Component, OnInit, ViewChild } from '@angular/core';
import { relativeLength } from 'highcharts';
import { ChartComponent } from 'ng-apexcharts';
import { AnsstdSkill, DashboardStdService } from '../dashboard-std/dashboard-std.service';
import { Major, Stdpart1Service } from '../stdpart1/stdpart1.service';
import { StdSkill } from '../stdpart3/stdpart3.service';

@Component({
  selector: 'app-chart-std-media',
  templateUrl: './chart-std-media.component.html',
  styleUrls: ['./chart-std-media.component.scss']
})
export class ChartStdMediaComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;
  ansStdskill: AnsstdSkill[] = [];
  skill1: [] = [];
  dataSeries: any[] = []; skillType: StdSkill[] = [];
  constructor(private stdpart1Service: Stdpart1Service, private dashboardStdService: DashboardStdService) {
  }

  ngOnInit(): void {

    this.dashboardStdService.stdAnsSkillChange.subscribe((response: any) => {
      if (response && response.loadStd) {
        this.ansStdskill = this.dashboardStdService.getAsnStdSkill();
        console.log('data :' + this.ansStdskill[0]?.skillQuesId)
        this.getSkilltype();

        // this.getTabCar();
        //this.getChart(this.ansStd);
      }
    });

  }
  getSkilltype() {

    this.dashboardStdService.getStdskilltype().subscribe((reponse: any) => {
      if (reponse) {
        this.skillType = reponse;
        this.getnameSkills();

        this.manageData(this.ansStdskill);



      } else {
        this.skillType = [];

      }
    });
  }
  getnameSkills(): any {
    if (this.skillType) {
      return this.skillType.map((v) => v.skillTypeName);
    }
  }
  manageData(data: AnsstdSkill[]) {
    this.dataSeries = [];

    if (data) {
      if (data.length == 0) {
        this.dataSeries = [0, 0, 0, 0, 0];
      } else {
        var skill1 = data.filter(
          user => user.skillQuesId === '1').length
        var skill2 = data.filter(
          user => user.skillQuesId === '2').length
        var skill3 = data.filter(
          user => user.skillQuesId === '3').length
        var skill4 = data.filter(
          user => user.skillQuesId === '4').length
        var skill5 = data.filter(
          user => user.skillQuesId === '5').length
        var skill6 = data.filter(
          user => user.skillQuesId === '6').length
        var sum = 0; var sum1 = 0; var sum2 = 0; var sum3 = 0; var sum4 = 0; var sum5 = 0;
        for (let index = 0; index < data.length; index++) {

          if (data[index].skillQuesId == '1') {
            sum = sum + Number(data[index].ansskill)

          }
          else if (data[index].skillQuesId == '2') {
            sum1 = sum1 + Number(data[index].ansskill)

          } else if (data[index].skillQuesId == '3') {
            sum2 = sum2 + Number(data[index].ansskill)

          } else if (data[index].skillQuesId == '4') {
            sum3 = sum3 + Number(data[index].ansskill)

          } else if (data[index].skillQuesId == '5') {
            sum4 = sum4 + Number(data[index].ansskill)

          } else if (data[index].skillQuesId == '6') {
            sum5 = sum5 + Number(data[index].ansskill)

          } else {
            sum = 0; sum1 = 0; sum2 = 0; sum3 = 0; sum4 = 0; sum5 = 0;
            skill1 = 1; skill2 = 1; skill3 = 1; skill4 = 1; skill5 = 1; skill6 = 1;
          }
        }
        this.dataSeries.push(sum / skill1, sum1 / skill2, sum2 / skill3, sum3 / skill4, sum4 / skill5, sum5 / skill6)
        if (this.dataSeries) {
          this.dashboardStdService.addskillData(this.dataSeries);
          if (this.dashboardStdService.addskillData(this.dataSeries)) {
            this.dashboardStdService.dataSkillChange.next({
              loadStd: true,
            });
          }

        }
      }


      this.chartOptions = {
        series: [{
          name: 'Series 1',
          data: this.dataSeries,
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
            size: 120,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#fff']
              }
            }
          }
        },
        title: {
          text: 'ทักษะการกำกับตนเอง(SELF-REGULATED LEARNING)'
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
            formatter: function (val: any) {
              return val
            }
          }
        },
        xaxis: {
          categories: this.getnameSkills()
        },
        yaxis: {
          tickAmount: 9,
          labels: {
            formatter: function (val: any, i: any) {
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
  }

}
