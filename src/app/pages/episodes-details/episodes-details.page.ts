import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.page.html',
  styleUrls: ['./episodes-details.page.scss'],
})
export class EpisodesDetailsPage implements OnInit {
  episode: any;
  //isFavourite = false;
  episodeId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getEpisode(this.episodeId).subscribe(res => {this.episode = res[0]; });


}
}
