import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Vehicle } from './vehicle.model';

const BASE_URL = `https://swapi.co/api/vehicles`;

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() { 
    return this.http.get<any>(this.getUrl())
      .pipe(map((res: any) => res.results.map((vehicle: Vehicle, i) => this.CreateNewIds(vehicle, i))));
  }

  private CreateNewIds(data: Vehicle, i) {
    i++;
    return { id: i, ...data };
  }
}
