import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Manufacturer } from './manufacturer.model';

const BASE_URL = `https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json`;

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    this.http.get<any>(this.getUrl())
      .pipe(map((res => res.Results.map((manufacturer: Manufacturer, i) => this.CreateNewIds(manufacturer, i)))));
  }

  private CreateNewIds(data: Manufacturer, i) {
    i++;
    return { id: i, ...data };
  }
}
