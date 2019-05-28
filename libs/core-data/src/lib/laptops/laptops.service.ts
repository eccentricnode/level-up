import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://nestjs-apis.shivalbigman.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  model = `laptops`;

  constructor(private http: HttpClient) {}

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res)));
  }
}
