import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { League } from './league.model';

const BASE_URL = `https://api.opendota.com/api/leagues`;

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http
      .get<any>(this.getUrl())
      .pipe(
        map((res: any) =>
          res.map((league: League, i) => this.CreateNewIds(league, i))
        )
      );
  }

  private CreateNewIds(data: League, i) {
    i++;
    return { id: i, ...data };
  }
}
