import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { People, Planet } from '../model/api';

@Component({
  selector: 'app-example-sync',
  templateUrl: './example-sync.component.html',
  styleUrls: ['./example-sync.component.css']
})
export class ExampleSyncComponent implements OnInit {
  people$: Observable<People>;
  planet$: Observable<Planet>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.people$ = this.http.get<People>('https://swapi.co/api/people/3/');

    this.planet$ = this.http.get<Planet>('https://swapi.co/api/planets/5/');
  }
}
