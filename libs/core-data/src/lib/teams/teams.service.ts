import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Team } from './team.model';

const BASE_URL = `https://NflArrest.com/api/v1/team`;

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res.map((team: Team, i) => this.CreateNewIds(team, i)))));
  }

  private CreateNewIds(data: Team, i) {
    i++;
    return { id: i, ...data };
  }
}
