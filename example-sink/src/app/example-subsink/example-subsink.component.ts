import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'subsink';

import { People, Planet } from '../model/api';

@Component({
  selector: 'app-example-subsink',
  templateUrl: './example-subsink.component.html',
  styleUrls: ['./example-subsink.component.css']
})
export class ExampleSubsinkComponent implements OnInit, OnDestroy {
  people: People;
  planet: Planet;

  private sub = new SubSink();
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sub.sink = this.http
      .get<People>('https://swapi.co/api/people/2/')
      .subscribe((data: People) => {
        this.people = data;
      });
    this.sub.sink = this.http
      .get<Planet>('https://swapi.co/api/planets/1/')
      .subscribe((data: Planet) => {
        this.planet = data;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
