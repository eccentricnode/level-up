import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video, YoutubeService, VideosFacade } from '@level/core-data';

@Component({
  selector: 'level-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist$: Observable<Video[]> = this.videosFacade.playlist$;
  selectedVideo$: Observable<Video> = this.videosFacade.selectedVideos$;

  constructor(private youtubeService: YoutubeService, private videosFacade: VideosFacade) { }

  ngOnInit() {
    this.videosFacade.loadVideos();
  }

  getPlaylist() {
    this.playlist$ = this.youtubeService.getUrl();
  }

  selectVideo(video) {
    this.videosFacade.selectVideo(video);
  }
}