import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  episodes: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.episodes = this.api.getEpisodes();
  }
  openDetails(episode){
    // let split = character.url.split('/');
      let episodeId = episode.episode_id;
      this.router.navigateByUrl(`/tab/episodes/${episodeId}`);
    }
  

}
