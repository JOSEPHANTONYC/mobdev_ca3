import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  quotes: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.quotes = this.api.getQuotes();
  }
  openDetails(quote){
    // let split = character.url.split('/');
      let quoteId = quote.char_id;
      this.router.navigateByUrl(`/tab/quotes/${quoteId}`);
    }

}
