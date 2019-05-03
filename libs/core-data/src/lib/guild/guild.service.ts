import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://api.guildwars2.com/v2/achievements?ids=1,2,3,4,5,6,7,8,9,10`;

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  getAchievements() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res)));
  }
}
