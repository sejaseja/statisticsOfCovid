import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidStatistics } from '../a1';
@Component({
  selector: 'app-coronavirus-disease-updates',
  templateUrl: './coronavirus-disease-updates.component.html',
  styleUrls: ['./coronavirus-disease-updates.component.scss'],
})
export class CoronavirusDiseaseUpdatesComponent  implements OnInit {
  covidStatistics: CovidStatistics[] = [];



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<CovidStatistics[]>('assets/data/covidcases.json').subscribe(
      info => {
        this.covidStatistics = info;
      }
    )
  }

}
