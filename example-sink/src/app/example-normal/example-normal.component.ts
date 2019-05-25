import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { People, Planet } from './../model/api';

@Component({
  selector: 'app-example-normal',
  templateUrl: './example-normal.component.html',
  styleUrls: ['./example-normal.component.css']
})
export class ExampleNormalComponent implements OnInit {
  people: People;
  planet: Planet;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<People>('https://swapi.co/api/people/1/')
      .subscribe((data: People) => {
        this.people = data;
      });
    this.http
      .get<Planet>('https://swapi.co/api/planets/3/')
      .subscribe((data: Planet) => {
        this.planet = data;
      });
  }
}
