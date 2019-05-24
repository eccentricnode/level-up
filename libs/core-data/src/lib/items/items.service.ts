import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://itemsapi-7h1urj5kv.now.sh`;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  model = `items`;

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res)));
  }
}
