import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.services';  // Ruta como está en tu proyecto

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.page.html',
  styleUrls: ['./my-music.page.scss'],
})
export class MyMusicPage implements OnInit {
  songs: any[] = [];

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.loadSongs();
  }

  loadSongs() {
    this.musicService.getMySongs().subscribe(
      (songs: any[]) => {
        this.songs = songs;
      },
      (error: any) => {
        console.error('Error fetching songs:', error);
      }
    );
  }
}
