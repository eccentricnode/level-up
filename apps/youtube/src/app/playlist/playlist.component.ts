import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video, YoutubeService } from '@level/core-data';

@Component({
  selector: 'level-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist$: Observable<Video[]>;
  selectedVideo: Video;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.getPlaylist();
  }

  getPlaylist() {
    this.playlist$ = this.youtubeService.getUrl();
  }

  selectVideo(video) {
    this.selectedVideo = video;
  }
}