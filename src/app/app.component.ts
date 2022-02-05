import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '310-eventbinding-angular_audio_player-racitifilippo';
  audio:HTMLAudioElement;
  duration: number = 0;

  playAudio(){
    this.duration = this.audio.duration;
    this.audio.load();
    this.audio.play();
  }

  stopAudio(){
    this.audio.pause();
  }

  constructor() {}

  ngOnInit(): void {
      this.audio = new Audio();
      this.audio.src = "../assets/iron_man.mp3";
  }

}
