import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { People, Planet } from './../model/api';

@Component({
  selector: 'app-example-normal',
  templateUrl: './example-normal.component.html',
  styleUrls: ['./example-normal.component.css']
})
export class ExampleNormalComponent implements OnInit, OnDestroy {
  people: People;
  planet: Planet;

  private subPeople: Subscription;
  private subPlanet: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.subPeople = this.http
      .get<People>('https://swapi.co/api/people/1/')
      .subscribe((data: People) => {
        this.people = data;
      });
    this.subPlanet = this.http
      .get<Planet>('https://swapi.co/api/planets/3/')
      .subscribe((data: Planet) => {
        this.planet = data;
      });
  }

  ngOnDestroy() {
    if (this.subPeople) {
      this.subPeople.unsubscribe();
    }
    if (this.subPlanet) {
      this.subPlanet.unsubscribe();
    }
  }
}
