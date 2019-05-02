import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Starship } from './starship.model';

const BASE_URL = `https://swapi.co/api/`;

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  model = `starships`;

  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}/`;
  }

  all() {
    return this.http.get<any>(this.getUrl()).pipe(
      map((res: any) => res.results.map((starship: Starship) => this.StripStarshipId(starship))));
  }

  
  private StripStarshipId(result: Starship) {
    const starshipId = result.url.split('starships/')[1].split('/')[0];

    return { id: Number(starshipId), ...result };
  }
}
