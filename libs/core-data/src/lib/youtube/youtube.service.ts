import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { API_KEY } from 'tools/secret';

const BASE_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLj_Goi54wf0fbtz9765nsY6SWAF9y1hxq&fields=items(snippet(description%2CresourceId%2FvideoId%2Cthumbnails%2Fhigh%2Ctitle))&key=${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get<any>(`${BASE_URL}`)
      .pipe(map(res => res.items));
  }
}
