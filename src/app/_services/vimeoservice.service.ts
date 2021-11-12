import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VimeoserviceService {

  constructor(private http: HttpClient) { }

  getVideos(user) {
    return this.http.get('https://vimeo.com/api/v2/' + user + '/videos.json');
  }

  getEmbedLink() {
    return this.http.get('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/76979871');
  }

  getAlbums(user: any) {
      return this.http.get('https://vimeo.com/api/v2/' + user + '/albums.json');
  }
}
