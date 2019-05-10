import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '@level/core-data';

@Component({
  selector: 'level-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent {
  @Input() playlist: Video;
  @Output() selected = new EventEmitter();

  videoSelectSubmit(video: Video) {
    this.selected.emit(video);
  }
}
