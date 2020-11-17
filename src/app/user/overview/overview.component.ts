import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnChanges {
  //list of projects available
  @Input() listOfRepositories;
  requiredLIstOfProjects

  data = []
  // list of years to Display
  Years = [2020, 2019, 2018, 2017, 2016, 2015]

  //bydefault selected year
  selectedYear = 2020;
  constructor() { }

  ngOnInit() {
    let from = new Date(2012, 0, 1);
    let daysOfYear = new Date(2012, 12, 31);
    for (let day = from; day <= daysOfYear; day.setDate(day.getDate() + 1)) {
      this.data.push({
        "date": new Date(day),
        "total": 17164,
        "details": [{
          "name": "Project 1",
          "date": new Date(day),
          "value": 9192
        }]
      })
    }
  }

  ngOnChanges() {
    this.requiredLIstOfProjects=this.listOfRepositories;
    if (this.requiredLIstOfProjects) {
      this.requiredLIstOfProjects.sort((a, b) => (a.watchers_count < b.watchers_count ? 1 : -1));
      this.requiredLIstOfProjects.length = 6;
    }
  }

  //function calls when user sek-lect a particulatr year
  selectyear(year) {
    this.selectedYear = year
  }

}
