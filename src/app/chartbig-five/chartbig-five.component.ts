import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { BigFive, DashboardStdService } from '../dashboard-std/dashboard-std.service';
import { PersonTest } from '../stdpart4/stdpart4.service';


@Component({
  selector: 'app-chartbig-five',
  templateUrl: './chartbig-five.component.html',
  styleUrls: ['./chartbig-five.component.scss']
})
export class ChartbigFiveComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;
  personTest: PersonTest[] = [];
  bigFive: BigFive[] = [];
  dataSeries: any[] = [];
  point1 = 0; point2 = 0; point3 = 0; point4 = 0; point5 = 0; point6 = 0; point7 = 0; point8 = 0; point9 = 0; point10 = 0;
  sum1 = 0; sum2 = 0; sum4 = 0; sum3 = 0; sum5 = 0; sum6 = 0; sum7 = 0; sum8 = 0; sum9 = 0; sum10 = 0;
  extraversion = 0; agreeableness = 0; conscientiousness = 0; emotional = 0; openness = 0;
  constructor(private dashboardStdService: DashboardStdService) {
    
  }
  ngOnInit(): void {
    this.dashboardStdService.stdBigfiveChange.subscribe((response: any) => {
      if (response && response.loadStd) {
        this.bigFive = this.dashboardStdService.getBigfiveSave();
        // console.log('data ====:' + this.bigFive[0]?.persomnAns)
        this.groupData();
        // this.getstdPersontest();

        // this.getTabCar();
        //this.getChart(this.ansStd);
      }
    });


  }
  groupData() {
    this.dataSeries=[];
    this.extraversion = 0;
    if (this.bigFive.length == 0) {
      this.dataSeries =[0,0,0,0,0];
    }else{
      for (let i = 0; i < this.bigFive.length; i++) {
        this.manageData(this.bigFive[i].persomnAns)
      }
      this.extraversion = (this.point1 / this.sum1) + (this.point6 / this.sum6);
  this.agreeableness =(this.point2 / this.sum2) + (this.point7 / this.sum7);
  this.conscientiousness =(this.point3 / this.sum3) + (this.point8 / this.sum8);
  this.emotional=(this.point4 / this.sum4) + (this.point9/ this.sum9);
  this.openness =(this.point5 / this.sum5)+(this.point10 / this.sum10) ;
  this.dataSeries=[this.extraversion.toFixed(1),this.agreeableness.toFixed(1),this.conscientiousness.toFixed(1),this.emotional.toFixed(1),this.openness.toFixed(1)];
    }

if(this.dataSeries){
  this.chartOptions = {
    series: [{
      name: 'ระดับ',
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
      categories: ["Extraversion", 'Agreeableness', 'Conscientiousness', 'Emotional Stability', 'Openness to Experiences']
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
  this.addData();
}
  }
  addData(){
    this.dashboardStdService.addBigFiveData(this.dataSeries);
    if(this.dashboardStdService.addBigFiveData(this.dataSeries)){
      this.dashboardStdService.dataBigFiveChange.next({
        loadStd: true,
      });
    }
  }
  manageData(item: string) {

    let temp;
    if (item) {
      let toArray = item.split(',');
      if (toArray[0] == '1') {
        this.sum1 = this.sum1 + 1;
        this.point1 = this.point1 + parseInt(toArray[1]);

      } else if (toArray[0] == '2') {
        this.sum2 = this.sum2 + 1;
        if (toArray[1] == '1') {
          this.point2 = this.point2 + 5;
        } else if (toArray[1] == '2') {
          this.point2 = this.point2 + 4;
        } else if (toArray[1] == '3') {
          this.point2 = this.point2 + 3;
        } else if (toArray[1] == '4') {
          this.point2 = this.point2 + 2;
        } else if (toArray[1] == '5') {
          this.point2 = this.point2 + 1;
        }
      } else if (toArray[0] == '3') {
        this.sum3 = this.sum3 + 1;
        this.point3 = this.point3 + parseInt(toArray[1]);

      } else if (toArray[0] == '4') {
        this.sum4 = this.sum4 + 1;
        if (toArray[1] == '1') {
          this.point4 = this.point4 + 5;
        } else if (toArray[1] == '2') {
          this.point4 = this.point4 + 4;
        } else if (toArray[1] == '3') {
          this.point4 = this.point4 + 3;
        } else if (toArray[1] == '4') {
          this.point4 = this.point4 + 2;
        } else if (toArray[1] == '5') {
          this.point4 = this.point4 + 1;
        }
      }
      else if (toArray[0] == '5') {
        this.sum5 = this.sum5 + 1;
        this.point5 = this.point5 + parseInt(toArray[1]);

      } else if (toArray[0] == '6') {
        this.sum6 = this.sum6 + 1;
        if (toArray[1] == '1') {
          this.point6 = this.point6 + 5;
        } else if (toArray[1] == '2') {
          this.point6 = this.point6 + 4;
        } else if (toArray[1] == '3') {
          this.point6 = this.point6 + 3;
        } else if (toArray[1] == '4') {
          this.point6 = this.point4 + 2;
        } else if (toArray[1] == '5') {
          this.point6 = this.point6 + 1;
        }
      } else if (toArray[0] == '7') {
        this.sum7 = this.sum7 + 1;
        this.point7 = this.point7 + parseInt(toArray[1]);

      } else if (toArray[0] == '8') {
        this.sum8 = this.sum8 + 1;
        if (toArray[1] == '1') {
          this.point8 = this.point8 + 5;
        } else if (toArray[1] == '2') {
          this.point8 = this.point8 + 4;
        } else if (toArray[1] == '3') {
          this.point8 = this.point8 + 3;
        } else if (toArray[1] == '4') {
          this.point8 = this.point8 + 2;
        } else if (toArray[1] == '5') {
          this.point8 = this.point8 + 1;
        }
      }
      else if (toArray[0] == '9') {
        this.sum9 = this.sum9 + 1;
        this.point9 = this.point9 + parseInt(toArray[1]);

      } else if (toArray[0] == '10') {
        this.sum10 = this.sum10 + 1;
        if (toArray[1] == '1') {
          this.point10 = this.point10 + 5;
        } else if (toArray[1] == '2') {
          this.point10 = this.point10 + 4;
        } else if (toArray[1] == '3') {
          this.point10 = this.point10 + 3;
        } else if (toArray[1] == '4') {
          this.point10 = this.point10 + 2;
        } else if (toArray[1] == '5') {
          this.point10 = this.point10 + 1;
        }
      }

    }


  }
  // getstdPersontest() {
  //   this.dashboardStdService.getstdPersontest().subscribe((reponse: any) => {
  //     if (reponse) {
  //       this.personTest = reponse;
  //       if (this.bigFive) {
  //         this.dataSeries = [];
  //         var data1 = this.personTest.filter(
  //           user => user.personQId === '1').length
  //         var data2 = this.personTest.filter(
  //           user => user.personQId === '2').length
  //         var data3 = this.personTest.filter(
  //           user => user.personQId === '3').length
  //         var data4 = this.personTest.filter(
  //           user => user.personQId === '4').length
  //         var data5 = this.personTest.filter(
  //           user => user.personQId === '5').length
  //         var data6 = this.personTest.filter(
  //           user => user.personQId === '6').length
  //         var data7 = this.personTest.filter(
  //           user => user.personQId === '7').length
  //         var data8 = this.personTest.filter(
  //           user => user.personQId === '8').length
  //         var data9 = this.personTest.filter(
  //           user => user.personQId === '9').length
  //         var data10 = this.personTest.filter(
  //           user => user.personQId === '10').length
  //         var sum1 = 0; var sum2 = 0; var sum3 = 0; var sum4 = 0; var sum5 = 0; var sum6 = 0; var sum7 = 0; var sum8 = 0; var sum9 = 0; var sum10 = 0;
  //         for (let index = 0; index < this.bigFive.length; index++) {
  //           if (this.bigFive[index].personQId == '1') {
  //             sum1 = sum1 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '2') {
  //             sum2 = sum2 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '3') {
  //             sum3 = sum3 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '4') {
  //             sum4 = sum4 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '5') {
  //             sum5 = sum5 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '6') {
  //             sum6 = sum6 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '7') {
  //             sum7 = sum7 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '8') {
  //             sum8 = sum8 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '9') {
  //             sum9 = sum9 + Number(this.bigFive[index].persomnAns)
  //           }
  //           else if (this.bigFive[index].personQId == '10') {
  //             sum10 = sum10 + Number(this.bigFive[index].persomnAns)
  //           }
  //         }
  //         this.dataSeries.push(sum1 / data1, sum2 / data2,sum3 / data3,sum4 / data4,sum5 / data5,sum6 / data6,sum7 / data7,sum8 / data8,sum9 / data9,sum10 / data10 )
  //         if (this.dataSeries) {
  //           this.dashboardStdService.addBigFiveData(this.dataSeries);
  //           if(this.dashboardStdService.addBigFiveData(this.dataSeries)){
  //             this.dashboardStdService.dataBigFiveChange.next({
  //               loadStd: true,
  //             });
  //           }
  //         }
  //       }
  //       // this.chartOptions = {
  //       //   series: [{
  //       //     name: 'ค่าเฉลี่ย',
  //       //     data: this.dataSeries
  //       //   }],
  //       //   chart: {
  //       //     height: 400,
  //       //     type: 'bar',
  //       //   },
  //       //   plotOptions: {
  //       //     bar: {
  //       //       borderRadius: 10,
  //       //       dataLabels: {
  //       //         position: 'top', // top, center, bottom
  //       //       },
  //       //     }
  //       //   },
  //       //   dataLabels: {
  //       //     enabled: true,
  //       //     formatter: function (val: any) {
  //       //       return val + "%";
  //       //     },
  //       //     offsetY: -20,
  //       //     style: {
  //       //       fontSize: '12px',
  //       //       colors: ["#304758"]
  //       //     }
  //       //   },

  //       //   xaxis: {
  //       //     categories: this.getnameSkills(),
  //       //     position: 'bottom',
  //       //     axisBorder: {
  //       //       show: false
  //       //     },
  //       //     axisTicks: {
  //       //       show: false
  //       //     },
  //       //     crosshairs: {
  //       //       fill: {
  //       //         type: 'gradient',
  //       //         gradient: {
  //       //           colorFrom: '#D8E3F0',
  //       //           colorTo: '#BED1E6',
  //       //           stops: [0, 100],
  //       //           opacityFrom: 0.4,
  //       //           opacityTo: 0.5,
  //       //         }
  //       //       }
  //       //     },
  //       //     tooltip: {
  //       //       enabled: true,
  //       //     }
  //       //   },
  //       //   yaxis: {
  //       //     axisBorder: {
  //       //       show: false
  //       //     },
  //       //     axisTicks: {
  //       //       show: false,
  //       //     },
  //       //     labels: {
  //       //       show: true,
  //       //       formatter: function (val: any) {
  //       //         return val + "%";
  //       //       }
  //       //     }

  //       //   },
  //       //   title: {
  //       //     text: 'BIG FIVE PERSON ALITY TRAIS',
  //       //     position: 'top',
  //       //     floating: true,
  //       //     // offsetX: 100,
  //       //     align: 'center',
  //       //     style: {
  //       //       color: '#444'
  //       //     }
  //       //   }
  //       // };

  //       // this.getnameSkills();

  //     } else {
  //     }
  //   });
  // }
  // getBigfive() {
  //   this.dashboardStdService.getansBigfive().subscribe((reponse: any) => {
  //     if (reponse) {
  //       this.bigFive = reponse;
  //       console.log('data test:' + this.bigFive[0].major_id);
  //       //   this.chartOptions = {
  //       //     plotOptions: {
  //       //       pie: {
  //       //         size: 200
  //       //       }
  //       //   },
  //       //   series: [35.7,35.7,14.3,7.1,7.1],
  //       //   labels:   this.getnameSkills(),
  //       //   colors: ['#244C98', '#0FFF9E', '#FFA000', '#109CF1', '#9092FA'],
  //       //   chart: {
  //       //     type: 'pie',
  //       //     fontFamily: 'Kanit, Arial, sans-serif',
  //       //   },
  //       //   dataLabels: {
  //       //     enabled: false,
  //       //     textAnchor: 'middle',

  //       //   },
  //       //   tooltip: {
  //       //     enabled: true,
  //       //     custom: function (series: any) {
  //       //       let seriesIndex = series.seriesIndex;
  //       //       let label = series.w.globals.labels[seriesIndex];
  //       //       let color = series.w.globals.colors[seriesIndex];
  //       //       let get_series = series.series[seriesIndex];
  //       //       return (
  //       //         '<div style="padding:5px;background:' +
  //       //         color +
  //       //         '">' +
  //       //         label +
  //       //         ': ' +
  //       //         (Math.round(get_series * 100) / 100).toFixed(1) +
  //       //         '%</div>'
  //       //       );
  //       //     },
  //       //   },
  //       //   title: {
  //       //     text: 'BIG FIVE PERSON ALITY TRAIS'
  //       //   },
  //       //   legend: {
  //       //     position: 'right',
  //       //     horizontalAlign: 'center',
  //       //     fontSize: '12px',
  //       //     fontWeight: '400',
  //       //     onItemHover: {
  //       //       highlightDataSeries: false,
  //       //     },
  //       //     formatter: function (val: any, series: any) {
  //       //       let seriesIndex = series.seriesIndex;
  //       //       let seriesPercent = series.w.globals.seriesPercent[seriesIndex];
  //       //       return val + '&nbsp;&nbsp; ' + (Math.round(seriesPercent * 100) / 100).toFixed(1) + '%';


  //       //     },
  //       //   },
  //       //   responsive: [
  //       //     {

  //       //       breakpoint: 1000,
  //       //       options: {
  //       //         plotOptions: {
  //       //           bar: {
  //       //             horizontal: true,
  //       //           },

  //       //         },
  //       //         legend: {
  //       //           position: 'bottom',
  //       //           fontSize: '14px',
  //       //         },
  //       //       },
  //       //     },
  //       //   ],
  //       // };

  //     } else {
  //       this.bigFive = [];
  //     }
  //   });

  // }
  // getnameSkills(): any {
  //   if (this.personTest) {
  //     return this.personTest.map((v) => v.pQuestion);
  //   }
  // }
}
