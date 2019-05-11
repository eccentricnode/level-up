import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Person } from './person.model';

const BASE_URL = `https://swapi.co/api/people/`;

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() { 
    return this.http.get<any>(this.getUrl())
      .pipe(map((res: any) => res.results.map((person: Person, i) => this.CreateNewId(person, i))));
  }

  private CreateNewId(data: Person, i) {
    i++;
    return { id: i, ...data };
  }
}
