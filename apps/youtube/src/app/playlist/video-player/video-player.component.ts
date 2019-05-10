import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '@level/core-data';

@Component({
  selector: 'level-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  embedded: Video;

  constructor(private sanitizer: DomSanitizer, private cd: ChangeDetectorRef) {}
  
  @Input() set video(value: Video) {
    this.embedded = Object.assign({}, value);
    this.cd.markForCheck();
    this.cd.detectChanges();
  };

  setEmbed() {
    if(this.embedded.snippet.resourceId.videoId) {
      let url: any = 'https://www.youtube.com/embed/';
      url = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}${this.embedded.snippet.resourceId.videoId}`);
      return url;
    }
  }
}
