import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

@Injectable({
  providedIn: 'root'
})
export class VolumesService {

  constructor(private http: HttpClient) { }

  searchBooksApi(str) {
    let params = new HttpParams();
    params = params.append('q', str);
    return this.http.get<any>(`${BASE_URL}`, { params })
      .pipe(map(res => res.items));
  }
}