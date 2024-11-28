import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private apiUrl = 'https://your-api-url.com/api';

  constructor(private http: HttpClient) { }

  getAllSongs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/songs`);
  }

  getMySongs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/my-songs`);
  }
}
