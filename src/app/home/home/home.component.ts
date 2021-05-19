import { Component, OnInit } from '@angular/core';
import { ArticlModel } from 'src/app/shared/models/news.moddel';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: ArticlModel[];

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
    this.newService.Articles.subscribe(res => {
      this.articles = res.filter(article => article.showOnHomepage);
    });
  }

}
