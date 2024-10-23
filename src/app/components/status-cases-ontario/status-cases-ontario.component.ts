import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ontariocases } from 'src/app/a1';

@Component({
  selector: 'app-status-cases-ontario',
  templateUrl: './status-cases-ontario.component.html',
  styleUrls: ['./status-cases-ontario.component.scss'],
})
export class StatusCasesOntarioComponent implements OnInit {
  Ontariocases: ontariocases[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<ontariocases[]>('assets/data/ontariocases.json').subscribe(
      info => {
        this.Ontariocases = info;
      },
      error => {
        console.error('An error occurred while fetching the data:', error);
      }
    );
  }
}
