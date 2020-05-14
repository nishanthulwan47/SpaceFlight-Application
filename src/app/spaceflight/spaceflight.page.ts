import { Component, OnInit } from '@angular/core';
import { SpaceflightsService } from '../spaceflights.service';
import { NewSpaceflight } from './spaceflight.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-spaceflight',
  templateUrl: './spaceflight.page.html',
  styleUrls: ['./spaceflight.page.scss'],
})
export class SpaceflightPage implements OnInit {

  articles: any = [];
  article: any = [];
  name: string;
  windowstart: string;
  description: any;
  missions: any = [];
  location: string;


  constructor(private spaceflight: SpaceflightsService, private router: Router) { }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this.spaceflight.getArticles().subscribe(data => {
        this.articles = data;
        this.articles = this.articles.launches;
        console.log(this.articles);
    });
  }

  getDetail(item) {
    this.router.navigate(['detail', item]);
  }

}
