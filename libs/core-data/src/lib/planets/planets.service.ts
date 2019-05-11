import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Planet } from './planet.model';

const BASE_URL = `https://swapi.co/api/planets`;

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res.results.map((planet: Planet, i) => this.CreateNewIds(planet, i)))));
  }

  private CreateNewIds(data: Planet, i) {
    i++;
    return { id: i, ...data };
  }
}
