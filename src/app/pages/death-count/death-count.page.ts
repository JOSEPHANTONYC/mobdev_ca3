import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-death-count',
  templateUrl: './death-count.page.html',
  styleUrls: ['./death-count.page.scss'],
})
export class DeathCountPage implements OnInit {
  deathcount: Observable<any>;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {

    this.deathcount = this.api.getDeathcount();
  }
  openDetails(deathcounts){
    // let split = character.url.split('/');
      let deathcountsId = deathcounts.char_id;
      this.router.navigateByUrl(`/tab/deathcount/${deathcountsId}`);
    }

}
