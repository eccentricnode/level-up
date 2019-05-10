import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_KEY } from 'tools/secret';
import { Book } from './book.model';

const BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  searchBooksApi(str) {
    let params = new HttpParams();
    params = params.append('q', str);
    return this.http.get<any>(`${BASE_URL}`, { params })
      .pipe(map(res => res.items.map((book: Book, i) => this.CreateNewIds(book, i))));
  }

  private CreateNewIds(data: Book, i) {
    i++;
    return { id: i, ...data };
  }
}