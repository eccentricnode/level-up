import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Dota2 } from './dota2.model';

const BASE_URL = `https://api.opendota.com/api/teams`;

@Injectable({
  providedIn: 'root'
})
export class Dota2Service {
  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http.get<any>(this.getUrl()).pipe(
      map((res: any) => res.map((team: Dota2) => this.ReassignTeamId(team))));
  }

  
  private ReassignTeamId(result: Dota2) {
    const teamId = result.team_id;
    return { id: Number(teamId), ...result };
  }
}